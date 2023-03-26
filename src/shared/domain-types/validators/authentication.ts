import * as yup from 'yup';

export const loginValidationSchema = yup.object({
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

export const registerValidationSchema = yup.object().shape({
  nome: yup
    .string()
    .required('O campo é obrigatório')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  email: yup
    .string()
    .required('O campo é obrigatório')
    .email('Insira um email válido')
    .max(80, 'O campo atingiu o limite máximo de 80 caracteres'),
  senha: yup
    .string()
    .required('O campo é obrigatório')
    .min(5, 'O campo deve possuir no mínimo 8 caracteres'),
  confirmacaoSenha: yup
    .string()
    .required('O campo é obrigatório')
    .oneOf([yup.ref('senha'), ''], 'As senhas devem coincidir'),
});
