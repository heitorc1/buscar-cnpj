type CompanyType = {
  nome: string;
  uf: string;
  cnpj: string;
  bairro: string;
  logradouro: string;
  numero: string;
  cep: string;
  municipio: string;
};

const handleLocalStorage = (item: CompanyType) => {
  let companies = [];
  if (!localStorage.getItem("company")) {
    companies.push(item);
    localStorage.setItem("company", JSON.stringify(companies));
  } else {
    companies = JSON.parse(localStorage.getItem("company") || "{}");
    companies.push(item);
    localStorage.setItem("company", JSON.stringify(companies));
  }
};

export { handleLocalStorage };
