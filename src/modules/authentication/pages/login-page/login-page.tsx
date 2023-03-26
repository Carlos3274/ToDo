import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AuthenticationFormInput, Button, auth } from 'src/shared';

import { AuthenticationForm, AuthenticationHeader } from '../../components';
import * as S from './login-page.styles';
const LoginPage: React.FC = () => {
  const [SignInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const form = useForm<AuthenticationFormInput>({
    mode: 'onChange',
    // resolver: yupResolver(),
  });

  const onSubmit: SubmitHandler<AuthenticationFormInput> = (data) => {
    SignInWithEmailAndPassword(data.email, data.senha);
  };

  return (
    <S.PageWrapper>
      <AuthenticationHeader />
      <FormProvider {...form}>
        <AuthenticationForm id="login" onSubmit={onSubmit} />
      </FormProvider>
      <S.ButtonContainer>
        <Button type="submit" form="login" isLoading={loading}>
          Entrar
        </Button>
        <S.RegisterLink to="/register">Não possui uma conta?</S.RegisterLink>
      </S.ButtonContainer>
    </S.PageWrapper>
  );
};

export default LoginPage;
