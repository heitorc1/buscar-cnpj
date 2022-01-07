import React from "react";
import {
  Wrapper,
  Fields,
  Values,
  Label,
  IconStyles,
} from "./MapTextBox.styles";
import styled from "styled-components";

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleLeft } from "@fortawesome/free-solid-svg-icons";

const Icon = styled(FontAwesomeIcon)`
  ${IconStyles}
`;

type CompanyType = {
  razao_social: string;
  cnpj: string;
  logradouro: string;
};

const MapTextBox: React.FC<CompanyType> = ({
  razao_social,
  cnpj,
  logradouro,
}) => {
  return (
    <Wrapper>
      <Link to="/">
        <Icon icon={faArrowCircleLeft} size="2x" color="black" />
      </Link>
      <Fields>
        <Values variant="h4">{razao_social}</Values>
        <Label variant="h4">Razão social</Label>
      </Fields>
      <Fields>
        <Values variant="h4">{cnpj}</Values>
        <Label variant="h4">CNPJ</Label>
      </Fields>
      <Fields>
        <Values variant="h4">{logradouro}</Values>
        <Label variant="h4">Endereço</Label>
      </Fields>
    </Wrapper>
  );
};

export { MapTextBox };
