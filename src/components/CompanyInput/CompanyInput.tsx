import React, { useContext, useState } from "react";
import { Wrapper } from "./CompanyInput.styles";
import NumberFormat from "react-number-format";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CompanyContext from "context";
import { handleLocalStorage } from "services/saveToLocalStorage";
import { Notification } from "components";

import { searchCNPJ } from "services/Api";

import validarCNPJ from "util/validarCNPJ";

type CustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

const NumberFormatCustom = React.forwardRef<NumberFormat, CustomProps>(
  function NumberFormatCustom(props, ref) {
    const { onChange, ...other } = props;

    return (
      <NumberFormat
        {...other}
        format="##.###.###/####-##"
        getInputRef={ref}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: values.value,
            },
          });
        }}
      />
    );
  }
);

const CompanyInput: React.FC = () => {
  const { setState } = useContext(CompanyContext);
  const [open, setOpen] = useState(false);
  const [notFound, setNotFound] = useState(true);
  const [cnpj, setCNPJ] = useState("");

  function handleClick() {
    setOpen(false);
    setTimeout(() => {
      const validate = validarCNPJ(cnpj);
      if (!validate) {
        // CNPJ incorreto
        setNotFound(true);
      } else {
        // CNPJ existe
        setNotFound(false);
        searchCNPJ(cnpj).then((res) => {
          handleLocalStorage(res);
          setState({
            nome: res.nome,
            cnpj: res.cnpj,
            logradouro: res.logradouro,
            complemento: res.compĺemento,
            bairro: res.bairro,
            cep: res.cep,
            municipio: res.municipio,
            uf: res.uf,
          });
        });
      }
      setOpen(true);
    });
  }

  return (
    <Wrapper>
      <TextField
        id="company"
        label="CNPJ"
        variant="outlined"
        onChange={(e) => setCNPJ(e.target.value)}
        sx={{ width: "25%" }}
        InputProps={{
          inputComponent: NumberFormatCustom as any,
        }}
        focused
      ></TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick}
        sx={{
          fontSize: "20px",
          fontWeight: "bold",
          marginLeft: "10px",
          borderRadius: "20px",
          paddingX: "20px",
          marginY: "5px",
        }}
      >
        Localizar
      </Button>

      {open ? (
        notFound ? (
          <Notification
            severity="error"
            message="CNPJ incorreto! Por favor, digite novamente."
          />
        ) : (
          <Notification
            severity="success"
            message="Empresa adicionada com sucesso!"
          />
        )
      ) : null}
    </Wrapper>
  );
};

export { CompanyInput };
