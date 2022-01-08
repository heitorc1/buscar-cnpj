import React from "react";
import { Results, Search } from "components";
import { Wrapper } from "./SearchForm.styles";

const SearchForm: React.FC = () => {
  return (
    <Wrapper>
      <Search />
      <Results />
    </Wrapper>
  );
};

export default SearchForm;
