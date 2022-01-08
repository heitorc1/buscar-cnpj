import React from "react";
import { Wrapper, Title, TitleText, IconStyle } from "./Search.styles";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { CompanyInput } from "components";

const Icon = styled(FontAwesomeIcon)`
  ${IconStyle}
`;

const Search: React.FC = () => {
  return (
    <Wrapper>
      <Title>
        <TitleText>
          <Icon icon={faBuilding} /> Localizador de Empresas
        </TitleText>
      </Title>
      <CompanyInput />
    </Wrapper>
  );
};

export { Search };
