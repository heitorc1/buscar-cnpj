import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./styles.module.scss";

type CompanyType = {
  razao_social: string;
  cnpj: string;
  logradouro: string;
};

const Card: React.FC<CompanyType> = ({ razao_social, cnpj, logradouro }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.razaoSocial}>
        <Typography variant="h4" className={styles.value}>
          {razao_social}
        </Typography>
        <Typography variant="h4" className={styles.label}>
          Razão social
        </Typography>
      </div>
      <div className={styles.cnpj}>
        <Typography variant="h4" className={styles.value}>
          {cnpj}
        </Typography>
        <Typography variant="h4" className={styles.label}>
          CNPJ
        </Typography>
      </div>
      <div className={styles.endereco}>
        <Typography variant="h4" className={styles.value}>
          {logradouro}
        </Typography>
        <Typography variant="h4" className={styles.label}>
          Endereço
        </Typography>
      </div>
    </div>
  );
};

export default Card;
