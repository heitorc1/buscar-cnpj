import React from "react";
import styles from "./styles.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";

import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <Link to="/">
        <FontAwesomeIcon
          icon={faArrowCircleLeft}
          size="3x"
          className={styles.icon}
          color="white"
        />
      </Link>

      <FontAwesomeIcon icon={faWindowClose} size="5x" color="white" />
      <Typography variant="h1" color="secondary">
        Endereço não encontrado
      </Typography>
    </div>
  );
};

export default NotFound;
