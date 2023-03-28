import { AuthError } from 'firebase/auth';

export const handleError = (error: AuthError) => {
  switch (error.code) {
    case 'auth/email-already-in-use':
      return 'E-mail já está em uso';
    case 'auth/wrong-password':
      return 'Senha incorreta';
    case 'auth/user-not-found':
      return 'Usuário não encontrado';
    default:
      return 'Algo de errado aconteceu';
  }
};
