export const MESSAGE = {
   USER: {

      NAME_REQUIRED: "O nome é obrigatório.",
      NAME_LENGTH: "O nome deve conter no minimo 2 caractéries.",
      EMAIL_INVALID: "Email inválido. Por favor digite um email válido.",
      EMAIL_REQUIRED: "O email é um campo obrigatório.",
      ALREADY_EXISTS_EMAIL: "Email já está cadastrado no sistema.",
      ALREADY_EXISTS_USER_REGISTARED: "Já existe usuário cadastrado no sistema.",
      PASSWORD_REQUIRED: "A senha é obrigatória.",
      CONFIRM_PASSWORD_REQUIRED: "A confirmação de senha é obrigatória.",
      PASSWORD_LENGTH: "A senha deve conter no minimo 6 caractéries.",
      PASSWORD_MISMATCH: "As senhas não coeencidem.", 
      CREDENTIAL_INVALID: "Credenciais inválidas.",
      
   },
   LOG_ACTIONS:{
      USER_REGISTERED: (name: string)=> `Usuário ${name} se cadastrou no sistema.`,
      USER_LOGGED_IN: (name: string)=> `Usuário ${name} realizou login no sistema.`,
      USER_TRIED_TO_REGISTER: (name: string , email: string)=> `Tentativa de Registrar-se no sistema com nome: ${name} e ${email}.`,
      COMPANY_CREATED: (companyName: string ,userName: string)=> `Empresa ${companyName} foi criada no sistema por ${userName}.`,

   }
}