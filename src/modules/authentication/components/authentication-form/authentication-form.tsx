import { SubmitHandler, useFormContext } from 'react-hook-form';
import {
  AuthenticationFormId,
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
  const { handleSubmit, register, formState, watch } =
    useFormContext<AuthenticationFormInput>();

  const formValues = watch(['nome', 'email', 'senha', 'confirmarSenha']);

  const isRequired = (value: AuthenticationFormId): boolean | undefined => {
    return isRegister && formValues[value] === '';
  };

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
              isRequired={isRequired(AuthenticationFormId.nome)}
              error={formState.errors.nome?.message}
              {...register('nome')}
            />
          )}
          <TextInput
            label="E-mail"
            type="email"
            placeholder="exemplo@email.com"
            isRequired={isRequired(AuthenticationFormId.email)}
            error={formState.errors.email?.message}
            {...register('email')}
          />
          <TextInput
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            isRequired={isRequired(AuthenticationFormId.senha)}
            error={formState.errors.senha?.message}
            {...register('senha')}
          />
          {isRegister && (
            <TextInput
              label="Confirmar senha"
              type="password"
              placeholder="Confirme a senha"
              isRequired={isRequired(AuthenticationFormId.confirmarSenha)}
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
