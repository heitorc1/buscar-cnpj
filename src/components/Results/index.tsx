import React, { useContext } from "react";
import styles from "./styles.module.scss";

import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import image from "../../assets/images/image.png";

import Card from "../Card";
import CompanyContext from "../../context";

const Results: React.FC = () => {
  const { state } = useContext(CompanyContext);

  return (
    <>
      {!!state.cnpj ? (
        <div className={styles.wrapper}>
          <FontAwesomeIcon icon={faChevronLeft} color="white" size="2x" />
          <Card
            razao_social={state.nome}
            cnpj={state.cnpj}
            logradouro={state.logradouro}
          ></Card>
          <FontAwesomeIcon icon={faChevronRight} color="white" size="2x" />
        </div>
      ) : (
        <div className={styles.notFound}>
          <img src={image} alt="Sem histórico" />
          <Typography variant="h3">
            Localize acima a primeira empresa
          </Typography>
        </div>
      )}
    </>
  );
};

export default Results;
