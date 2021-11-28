import Typography from "@mui/material/Typography";
import React, { useContext } from "react";
import styles from "./styles.module.scss";
import { Link } from "react-router-dom";
import CompanyContext from "../../context";
import jsonp from "jsonp";

type CompanyType = {
  razao_social: string;
  cnpj: string;
  logradouro: string;
};

const Card: React.FC<CompanyType> = ({ razao_social, cnpj, logradouro }) => {
  const { setState } = useContext(CompanyContext);

  const handleClick = () => {
    const formattedCNPJ = cnpj
      .split(".")
      .join("")
      .split("/")
      .join("")
      .split("-")
      .join("");

    jsonp(
      "https://www.receitaws.com.br/v1/cnpj/" + formattedCNPJ,
      (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          setState({
            nome: data.nome,
            cnpj: data.cnpj,
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            cep: data.cep,
            municipio: data.municipio,
            uf: data.uf,
          });
        }
      }
    );
  };

  return (
    <div className={styles.wrapper}>
      <Link to="/map" className={styles.link} onClick={handleClick}>
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
      </Link>
    </div>
  );
};

export default Card;
