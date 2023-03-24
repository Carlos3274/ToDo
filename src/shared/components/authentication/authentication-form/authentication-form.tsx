import { FormTitle, Logo, TextInput } from 'src/shared';
import Button from 'src/shared/components/button/button';
import * as S from './authentication-form.styles';

type Props = {
  isRegister?: boolean;
};
const AuthenticationForm: React.FC<Props> = ({ isRegister }) => {
  return (
    <S.ContentWrapper>
      <S.ContentContainer>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.FormWrapper>
          <FormTitle>Autenticação</FormTitle>
          <S.InputContainer>
            {isRegister && <TextInput label="Nome" type="text" />}
            <TextInput label="E-mail" type="email" />
            <TextInput label="Senha" type="password" />
            {isRegister && <TextInput label="Nome" type="text" />}
          </S.InputContainer>
          <Button>Entrar</Button>
          {isRegister ? (
            <S.RegisterLink to="/login">Já possui uma conta?</S.RegisterLink>
          ) : (
            <S.RegisterLink to="/register">
              Não possui uma conta?
            </S.RegisterLink>
          )}
        </S.FormWrapper>
      </S.ContentContainer>
    </S.ContentWrapper>
  );
};

export default AuthenticationForm;
