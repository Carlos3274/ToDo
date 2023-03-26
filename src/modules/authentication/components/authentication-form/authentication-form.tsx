import { SubmitHandler, useFormContext } from 'react-hook-form';
import {
  AuthenticationFormInput,
  FormTitle,
  Logo,
  TextInput,
} from 'src/shared';
import * as S from './authentication-form.styles';

type Props = {
  isRegister?: boolean;
  onSubmit: SubmitHandler<AuthenticationFormInput>;
  id: string;
};

const AuthenticationForm: React.FC<Props> = ({ isRegister, onSubmit, id }) => {
  const { handleSubmit, register, formState } =
    useFormContext<AuthenticationFormInput>();

  return (
    <S.GeralContainer>
      <S.LogoWrapper>
        <Logo />
      </S.LogoWrapper>
      <S.FormWrapper onSubmit={handleSubmit(onSubmit)} id={id}>
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
      </S.FormWrapper>
    </S.GeralContainer>
  );
};

export default AuthenticationForm;
