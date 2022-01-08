import React, { useContext } from "react";
import CompanyContext from "context";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Wrapper, LinkStyle, Fields, Values, Label } from "./Card.styles";

const LinkTypo = styled(Link)`
  ${LinkStyle}
`;

type CompanyType = {
  razao_social: string;
  cnpj: string;
  logradouro: string;
};

const Card: React.FC<CompanyType> = ({ razao_social, cnpj, logradouro }) => {
  const { setState } = useContext(CompanyContext);

  const handleClick = () => {
    const storage = JSON.parse(localStorage.getItem("company") || "[]");
    for (let value of storage) {
      if (value.cnpj === cnpj) {
        setState({
          nome: value.nome,
          cnpj: value.cnpj,
          logradouro: value.logradouro,
          complemento: value.complemento,
          bairro: value.bairro,
          cep: value.cep,
          municipio: value.municipio,
          uf: value.uf,
        });
        break;
      }
    }
  };

  return (
    <Wrapper>
      <LinkTypo to="/map" onClick={handleClick}>
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
      </LinkTypo>
    </Wrapper>
  );
};

export { Card };
