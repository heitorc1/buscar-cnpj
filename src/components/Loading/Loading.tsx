import React from "react";
import { Wrapper } from "./Loading.styles";
import CircularProgress from "@mui/material/CircularProgress";

const Loading: React.FC = () => {
  return (
    <Wrapper>
      <CircularProgress color="secondary" size="10rem" />
    </Wrapper>
  );
};

export { Loading };
