import { Logo } from 'src/shared';
import AuthenticationLink from '../authentication-link/authentication-link';
import * as S from './authentication-header.styles';

type Props = {
  isRegister?: boolean;
};

const AuthenticationHeader: React.FC<Props> = ({ isRegister }) => {
  return (
    <S.Header>
      <Logo />
      {isRegister ? (
        <AuthenticationLink to="/login" isHeader>
          Já possui uma conta?
        </AuthenticationLink>
      ) : (
        <AuthenticationLink to="/register" isHeader>
          Não possui uma conta?
        </AuthenticationLink>
      )}
    </S.Header>
  );
};

export default AuthenticationHeader;
