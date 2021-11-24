import React from "react";
import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

import Card from "../Card";

const Results: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon icon={faChevronLeft} />
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <FontAwesomeIcon icon={faChevronRight} />
    </div>
  );
};

export default Results;
