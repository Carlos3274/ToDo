import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  AuthenticationFormInput,
  Button,
  auth,
  loginValidationSchema,
} from 'src/shared';
import { AuthErrorHandler } from 'src/shared/core/errors';
import {
  AuthenticationForm,
  AuthenticationHeader,
  AuthenticationLink,
} from '../../components';
import { notifyError, notifySuccess } from '../../utils';
import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  const [SignInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const form = useForm<AuthenticationFormInput>({
    mode: 'onChange',
    resolver: yupResolver(loginValidationSchema),
  });

  useEffect(() => {
    if (error) {
      notifyError(AuthErrorHandler.handleError(error));
    }
  }, [error]);

  useEffect(() => {
    if (user) {
      notifySuccess('Usuário Logado');
    }
  }, [user]);

  const onSubmit: SubmitHandler<AuthenticationFormInput> = (data) => {
    SignInWithEmailAndPassword(data.email, data.senha);
  };

  return (
    <S.PageWrapper>
      <AuthenticationHeader />
      <S.ContentContainer>
        <FormProvider {...form}>
          <AuthenticationForm id="login" onSubmit={onSubmit} />
        </FormProvider>
        <S.ButtonContainer>
          <Button
            type="submit"
            form="login"
            isLoading={loading}
            disabled={!form.formState.isValid}
          >
            Entrar
          </Button>
          <AuthenticationLink to="/register">
            Não possui uma conta?
          </AuthenticationLink>
        </S.ButtonContainer>
      </S.ContentContainer>
    </S.PageWrapper>
  );
};

export default LoginPage;
