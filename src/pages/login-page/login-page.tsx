import { FormTitle, Logo } from 'src/shared';
import Button from 'src/shared/components/button/button';
import { LoginForm } from './components';
import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  const RegisterLink = (
    <S.RegisterLink to="/">Não possui conta ainda?</S.RegisterLink>
  );

  return (
    <>
      <S.Header>
        <Logo />
        {RegisterLink}
      </S.Header>
      <S.ContentWrapper>
        <S.ContentContainer>
          <S.LogoWrapper>
            <Logo />
          </S.LogoWrapper>
          <S.FormWrapper>
            <FormTitle>Autenticação</FormTitle>
            <LoginForm />
            <Button>Entrar</Button>
            {RegisterLink}
          </S.FormWrapper>
        </S.ContentContainer>
      </S.ContentWrapper>
    </>
  );
};

export default LoginPage;
