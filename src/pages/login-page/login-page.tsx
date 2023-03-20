import { Logo } from 'src/shared';
import { LoginForm } from './components';
import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.FormWrapper>
          <S.Title>Autenticação</S.Title>
          <LoginForm />
        </S.FormWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginPage;
