import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

import Typography from "@mui/material/Typography";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import image from "../../assets/images/image.png";

import Card from "../Card";

type CompanyType = {
  nome: string;
  cnpj: string;
  logradouro: string;
};

const Results: React.FC = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem("company") || "[]");
    setCompanies(storage.reverse());
  }, []);

  return (
    <>
      {companies.length > 0 ? (
        <div className={styles.wrapper}>
          <FontAwesomeIcon icon={faChevronLeft} color="white" size="2x" />
          {companies.map((company: CompanyType, index: number) => {
            if (index < 4) {
              return (
                <Card
                  key={index}
                  razao_social={company.nome}
                  cnpj={company.cnpj}
                  logradouro={company.logradouro}
                />
              );
            } else {
              return false;
            }
          })}
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
