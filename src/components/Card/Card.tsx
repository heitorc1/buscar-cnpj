import React, { useContext } from "react";
import CompanyContext from "../../context";
import jsonp from "jsonp";
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
    const formattedCNPJ = cnpj
      .split(".")
      .join("")
      .split("/")
      .join("")
      .split("-")
      .join("");

    jsonp(
      "https://www.receitaws.com.br/v1/cnpj/" + formattedCNPJ,
      (err, data) => {
        if (err) {
          console.error(err.message);
        } else {
          setState({
            nome: data.nome,
            cnpj: data.cnpj,
            logradouro: data.logradouro,
            complemento: data.complemento,
            bairro: data.bairro,
            cep: data.cep,
            municipio: data.municipio,
            uf: data.uf,
          });
        }
      }
    );
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
