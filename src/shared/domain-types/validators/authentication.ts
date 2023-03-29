import * as yup from 'yup';

export const authenticationValidationSchema = yup.object({
  email: yup
    .string()
    .required('O campo é obrigatório')
    .email('Insira um email válido')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  senha: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
});

export const registerValidationSchema = authenticationValidationSchema.shape({
  nome: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  confirmarSenha: yup
    .string()
    .required('O campo é obrigatório')
    .oneOf([yup.ref('senha'), ''], 'As senhas devem coincidir'),
});
