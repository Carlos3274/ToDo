import { SubmitHandler, useFormContext } from 'react-hook-form';
import {
  AuthenticationFormInput,
  FormTitle,
  Logo,
  TextInput,
} from 'src/shared';
import Button from 'src/shared/components/button/button';
import * as S from './authentication-form.styles';

type Props = {
  isRegister?: boolean;
  onSubmit: SubmitHandler<AuthenticationFormInput>;
};

const AuthenticationForm: React.FC<Props> = ({ isRegister, onSubmit }) => {
  const { handleSubmit, register, formState } =
    useFormContext<AuthenticationFormInput>();

  return (
    <S.ContentWrapper>
      <S.ContentContainer>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.FormWrapper onSubmit={handleSubmit(onSubmit)}>
          <FormTitle>{isRegister ? 'Nova Conta' : 'Autenticação'}</FormTitle>
          <S.InputContainer>
            {isRegister && (
              <TextInput
                label="Nome"
                type="text"
                placeholder="Digite seu nome"
                isRequired={isRegister && true}
                error={formState.errors.nome?.message}
                {...register('nome')}
              />
            )}
            <TextInput
              label="E-mail"
              type="email"
              placeholder="exemplo@email.com"
              isRequired={isRegister && true}
              error={formState.errors.email?.message}
              {...register('email')}
            />
            <TextInput
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              isRequired={isRegister && true}
              error={formState.errors.senha?.message}
              {...register('senha')}
            />
            {isRegister && (
              <TextInput
                label="Confirmar senha"
                type="password"
                placeholder="Confirme a senha"
                isRequired={isRegister && true}
                error={formState.errors.confirmarSenha?.message}
                {...register('confirmarSenha')}
              />
            )}
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
