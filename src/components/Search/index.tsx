import React from "react";
import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import CompanyInput from "../CompanyInput";

const Search: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <p>
          <FontAwesomeIcon icon={faBuilding} className={styles.icon} />{" "}
          Localizador de Empresas
        </p>
      </div>
      <CompanyInput />
    </div>
  );
};

export default Search;
