export const TITLE = {
  TITLE_FIELDS_COMPANY: {
    TYPE_COMPANY: "Selecione o tipo, CNPJ ou CPF",
    DOCUMENT_CNPJ: "Digite os 14 digitos do CNPJ",
    DOCUMENT_CPF: "Digite os 11 digitos do CPF",
    STATE_REGISTRATION: "Digite a inscrição estadual",
    DOCUMENT_RG: "Digite o RG",
    SOCIAL_RASION: "Digite a razão social",
    NAME_USUÁRIO: "Digite o nome Completo",
    NAME_FANTASY: "Digite o nome fantasia",
  },

  TITLE_FIELDS_ADDRESS: {
    CEP: "Digite o CEP",
    ADDRESS: "Digite o endereço",
    NUMBER: "Digite o número",
    COMPLEMENT: "Digite o complemento",
    NEIGHBORHOOD: "Digite o bairro",
    CITY: "Digite a cidade",
    UF: "Selecione o estado",
  },

  TITLE_FIELDS_CONTACT: {
    PHONE: "Digite o telefone",
    EMAIL: "Digite um email valido",
    SITE: "Digite seu site. Ex: https://meusite.com.br",
    WHATSAPP: "Digite um numero de WhatsApp",
    INSTAGRAN:
      "Digite o endereço do seu Instagram. Ex: https://instagram.com/meuinstagran",
    FACEBOOK:
      "Digite o endereço do seu  Facebook. Ex: https://facebook.com/meufacebook",
  },

  TITLE_FIELDS_USER: {
    USER_EMAIL: "Digite seu email",
    USER_PASSWORD: "Digite sua senha.",
    USER_NAME: "Nome do usuário",
    USER_TYPE: "Selecione o nivel de acesso.",
    LENGTH_NAME: "O nome deve conter no minimo 2 Caractéries.",
    LENGTH_PASSWORD: "A senha deve conter no minimo 6 digitos.",
    CONFIRM_PASSWORD: "Confirme sua senha.",
    FORGOT_PASSWORD: "Redefinir senha",
    REMMEMBER: "Lembrar-me minhas credenciais",
    REGISTER: "Registrar uma conta",
  },

  OTHERS: {
    STATUS: `Ativo ou Inativo.`,
    FILTER_STATUS: (name: string) =>
      `Filtrar ${name}. Todos, ativos ou inativos.`,
    SEARCH: (name: string, minLength: number) =>
      `Digite o nome do ${name} para pesquisar. O nome da pesquisa deve ter no minimo ${minLength} caractéries.`,
    TITLE_MIN_MAX_LENGTH: (
      name: string,
      minLength: number,
      maxLength: number
    ) =>
      `O ${name} deve conter no minimo ${minLength} caractéries e no maximo ${maxLength}.`,
  },

  PRODUCT : {
      NAME_PRODUCT: ()=>"" ,
      SELECT_PRODUCT_PROMOTION: `Selecione o produto para promoção.`,
      SELECT_PRODUCT_TOP_SALE: `Selecione o produto que deseja adicionar a lista de mais vendido.`,
      TYPE_DISCONT: `Selecione o tipo de desconto que será aplicado`,
      VALUE_DISCONT_PRODUCT: `Selecione o valor do desconto.`,
      PORCENTAGEM_DISCONT_PRODUCT: `Selecione a porcentagem do desconto.`,

  }
};
