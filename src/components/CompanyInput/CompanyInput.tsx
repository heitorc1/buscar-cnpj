import React, { useContext, useState } from "react";
import { Wrapper } from "./CompanyInput.styles";
import NumberFormat from "react-number-format";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

import CompanyContext from "../../context";

import jsonp from "jsonp";
import validarCNPJ from "../../services/validarCNPJ";

type CustomProps = {
  onChange: (event: { target: { name: string; value: string } }) => void;
  name: string;
};

type CompanyType = {
  nome: string;
  uf: string;
  cnpj: string;
  bairro: string;
  logradouro: string;
  numero: string;
  cep: string;
  municipio: string;
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

  const handleLocalStorage = (item: CompanyType) => {
    let companies = [];
    if (!localStorage.getItem("company")) {
      companies.push(item);
      localStorage.setItem("company", JSON.stringify(companies));
    } else {
      companies = JSON.parse(localStorage.getItem("company") || "{}");
      companies.push(item);
      localStorage.setItem("company", JSON.stringify(companies));
    }
  };

  async function handleClick() {
    const validate = validarCNPJ(cnpj);
    if (!validate) {
      // CNPJ incorreto
      setOpen(true);
    } else {
      // CNPJ existe
      setOpen(false);
      jsonp("https://www.receitaws.com.br/v1/cnpj/" + cnpj, (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          setState(data);
          handleLocalStorage(data);
        }
      });
    }
  }

  return (
    <Wrapper>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClick={handleClose}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert severity="error">
          CNPJ incorreto! Por favor, digite novamente.
        </Alert>
      </Snackbar>

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
