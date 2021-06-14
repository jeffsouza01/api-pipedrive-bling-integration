interface IPedido {
  desconto: string;
  observacoes: string;
  observacaointerna: string;
  data: Date;
  numero: string;
  numeroOrdemCompra: string;
  vendedor: string;
  valorfrete: string; // 15.00,
  totalprodutos: string; // 16.80,
  totalvenda: string; // 21.80,
  situacao: string; // Em aberto,
  tipoIntegracao: string; // "Api",
  cliente: {
    id: string; // "13045936561",
    nome: string; // "LinkAPI Software",
    cnpj: string; // "",
    ie: string; // "",
    rg: string; // "",
    endereco: string; // "Avenida Brigadeiro Faria Lima",
    numero: string; // "500",
    complemento: string; // "",
    cidade: string; // "São Paulo",
    bairro: string; // "Pinheiros",
    cep: string; // "05426-100",
    uf: string; // "SP",
    email: string; // "linkapi@teste.com.br",
    celular: string; // "",
    fone: string; // "11981153376"
  };
  itens: [
    {
      item: {
        codigo: null;
        descricao: string; // "Caneta 001";
        quantidade: string; // "10.0000";
        valorunidade: string; // "1.6800000000";
        precocusto: boolean;
        descontoItem: string; // "0.00";
        un: string; // "Pc";
        pesoBruto: boolean;
        largura: boolean;
        altura: boolean;
        profundidade: boolean;
        descricaoDetalhada: string; // "";
        unidadeMedida: string; // "m";
        gtin: boolean;
      };
    }
  ];
}
