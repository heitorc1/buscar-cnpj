import React from "react";
import styled from "styled-components";
import { Wrapper, ReturnArrowStyle } from "./NotFound.styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWindowClose,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

const ReturnArrow = styled(FontAwesomeIcon)`
  ${ReturnArrowStyle}
`;

const NotFound: React.FC = () => {
  return (
    <Wrapper>
      <Link to="/">
        <ReturnArrow icon={faArrowCircleLeft} size="3x" color="white" />
      </Link>

      <FontAwesomeIcon icon={faWindowClose} size="5x" color="white" />
      <Typography variant="h1" color="secondary">
        Endereço não encontrado
      </Typography>
    </Wrapper>
  );
};

export { NotFound };
