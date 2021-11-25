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
      <FontAwesomeIcon icon={faChevronLeft} color="white" size="2x" />
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <FontAwesomeIcon icon={faChevronRight} color="white" size="2x" />
    </div>
  );
};

export default Results;
