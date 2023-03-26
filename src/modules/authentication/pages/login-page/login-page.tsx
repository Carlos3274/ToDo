import { BaseSyntheticEvent } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormProvider, useForm } from 'react-hook-form';
import { AuthenticationFormInput, auth } from 'src/shared';
import { Button } from 'src/shared/components/button/button.styles';
import { AuthenticationForm, AuthenticationHeader } from '../../components';
import * as S from './login-page.styles';
const LoginPage: React.FC = () => {
  const [CreateUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const form = useForm<AuthenticationFormInput>({
    mode: 'onChange',
    // resolver: yupResolver(),
  });

  // const onSubmit: SubmitHandler<AuthenticationFormInput> = (data) => {

  // };

  return (
    <S.PageWrapper>
      <AuthenticationHeader />
      <FormProvider {...form}>
        <AuthenticationForm
          id="login"
          onSubmit={function (
            data: AuthenticationFormInput,
            event?: BaseSyntheticEvent<object, any, any> | undefined
          ): unknown {
            throw new Error('Function not implemented.');
          }}
        />
      </FormProvider>
      <S.ButtonContainer>
        <Button type="submit">Entrar</Button>
        <S.RegisterLink to="/register">Não possui uma conta?</S.RegisterLink>
      </S.ButtonContainer>
    </S.PageWrapper>
  );
};

export default LoginPage;
