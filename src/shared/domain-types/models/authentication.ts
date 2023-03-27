export type AuthenticationFormInput = {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
};

export enum AuthenticationFormId {
  'nome' = 0,
  'email',
  'senha',
  'confirmarSenha',
}
