import React from "react";
import styles from "./styles.module.scss";
import CircularProgress from "@mui/material/CircularProgress";

const Loading: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <CircularProgress color="secondary" size="10rem" />
    </div>
  );
};

export default Loading;
