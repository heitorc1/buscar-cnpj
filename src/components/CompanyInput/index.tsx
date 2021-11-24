import React from "react";
import styles from "./styles.module.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const CompanyInput: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <TextField
        id="company"
        label="CNPJ"
        variant="outlined"
        sx={{ width: "25%" }}
        focused
      ></TextField>
      <Button
        variant="contained"
        color="primary"
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
