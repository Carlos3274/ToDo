import Logo from '../../logo/logo';
import * as S from './authentication-header.styles';

type Props = {
  isRegister?: boolean;
};

const AuthenticationHeader: React.FC<Props> = ({ isRegister }) => {
  return (
    <S.Header>
      <Logo />
      {isRegister ? (
        <S.RegisterLink to="/login">Já possui uma conta?</S.RegisterLink>
      ) : (
        <S.RegisterLink to="/register">Não possui uma conta?</S.RegisterLink>
      )}
    </S.Header>
  );
};

export default AuthenticationHeader;
