import React, { useContext, useState } from "react";
import { Wrapper } from "./CompanyInput.styles";
import NumberFormat from "react-number-format";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CompanyContext from "context";
import { handleLocalStorage } from "../../services/saveToLocalStorage";
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
  const [cnpj, setCNPJ] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    const validate = validarCNPJ(cnpj);
    if (!validate) {
      // CNPJ incorreto
      setOpen(true);
    } else {
      // CNPJ existe
      setOpen(false);
      searchCNPJ(cnpj).then((res) => {
        console.log(res);
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
  }

  return (
    <Wrapper>
      <Notification
        state={open}
        severity="error"
        message="CNPJ incorreto! Por favor, digite novamente."
      />
      {/* <Snackbar
        open={open}
        autoHideDuration={6000}
        onClick={handleClose}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="error">
          CNPJ incorreto! Por favor, digite novamente.
        </Alert>
      </Snackbar> */}

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
    </Wrapper>
  );
};

export { CompanyInput };
