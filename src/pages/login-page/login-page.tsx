import { Logo } from 'src/shared';
import Button from 'src/shared/components/button/button';
import { LoginForm } from './components';
import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  const RegisterLink = (
    <S.RegisterLink to="/">Não possui conta ainda?</S.RegisterLink>
  );

  return (
    <S.Wrapper>
      <S.Header>
        <Logo />
        {RegisterLink}
      </S.Header>
      <S.Container>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.FormWrapper>
          <S.Title>Autenticação</S.Title>
          <LoginForm />
          <Button>Entrar</Button>
          {RegisterLink}
        </S.FormWrapper>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginPage;
