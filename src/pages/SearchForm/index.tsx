import React from "react";
import { Results, Search } from "components";
import styles from "./styles.module.scss";

const SearchForm: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Search />
      <Results />
    </div>
  );
};

export default SearchForm;
