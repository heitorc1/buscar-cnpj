import React from "react";
import styles from "./styles.module.scss";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

import Typography from "@mui/material/Typography";

type CompanyType = {
  razao_social: string;
  cnpj: string;
  logradouro: string;
};

const MapTextBox: React.FC<CompanyType> = ({
  razao_social,
  cnpj,
  logradouro,
}) => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          size="2x"
          className={styles.icon}
          color="black"
        />
      </Link>
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

export default MapTextBox;
