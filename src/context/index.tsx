import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useState,
} from "react";

type CompanyType = {
  nome: string;
  cnpj: string;
  logradouro: string;
  complemento: string;
  cep: string;
  municipio: string;
  bairro: string;
  uf: string;
};

type PropsCompanyContext = {
  state: CompanyType;
  setState: Dispatch<SetStateAction<CompanyType>>;
};

const DEFAULT_VALUE = {
  state: {
    nome: "",
    cnpj: "",
    logradouro: "",
    complemento: "",
    cep: "",
    municipio: "",
    bairro: "",
    uf: "",
  },
  setState: () => {},
};

const CompanyContext = createContext<PropsCompanyContext>(DEFAULT_VALUE);

const CompanyContextProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <CompanyContext.Provider value={{ state, setState }}>
      {children}
    </CompanyContext.Provider>
  );
};

export { CompanyContextProvider };
export default CompanyContext;
