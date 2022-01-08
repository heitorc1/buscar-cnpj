import jsonp from "jsonp";

type CompanyType = {
  nome: string;
  uf: string;
  cnpj: string;
  bairro: string;
  logradouro: string;
  numero: string;
  cep: string;
  municipio: string;
  compĺemento: string;
};

function searchCNPJ(cnpj: string) {
  return new Promise<CompanyType>((resolve, reject) =>
    jsonp("https://www.receitaws.com.br/v1/cnpj/" + cnpj, (err, data) =>
      err ? reject(err) : resolve(data)
    )
  );
}

export { searchCNPJ };
