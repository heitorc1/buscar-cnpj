import React from "react";
import Results from "../../components/Results";
import Search from "../../components/Search";
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
