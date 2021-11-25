import Typography from "@mui/material/Typography";
import React from "react";
import styles from "./styles.module.scss";

const Card: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.razaoSocial}>
        <Typography variant="h4" className={styles.value}>
          Empresa X
        </Typography>
        <Typography variant="h4" className={styles.label}>
          Razão social
        </Typography>
      </div>
      <div className={styles.cnpj}>
        <Typography variant="h4" className={styles.value}>
          151458150
        </Typography>
        <Typography variant="h4" className={styles.label}>
          CNPJ
        </Typography>
      </div>
      <div className={styles.endereco}>
        <Typography variant="h4" className={styles.value}>
          Endereço
        </Typography>
        <Typography variant="h4" className={styles.label}>
          Endereço
        </Typography>
      </div>
    </div>
  );
};

export default Card;
