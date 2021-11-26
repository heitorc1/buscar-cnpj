import React, { useContext, useState } from "react";
import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CompanyContext from "../../context";

import jsonp from "jsonp";

const CompanyInput: React.FC = () => {
  const { setState } = useContext(CompanyContext);
  const [cnpj, setCNPJ] = useState("");

  async function searchCompany() {
    jsonp("https://www.receitaws.com.br/v1/cnpj/" + cnpj, (err, data) => {
      if (err) {
        console.error(err.message);
      } else {
        setState(data);
      }
    });
  }

  return (
    <div className={styles.wrapper}>
      <TextField
        id="company"
        label="CNPJ"
        variant="outlined"
        onChange={(e) => setCNPJ(e.target.value)}
        sx={{ width: "25%" }}
        focused
      ></TextField>
      <Button
        variant="contained"
        color="primary"
        onClick={searchCompany}
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
    </div>
  );
};

export default CompanyInput;
