import { yupResolver } from '@hookform/resolvers/yup';
import { Alert } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  AuthenticationFormInput,
  Button,
  auth,
  loginValidationSchema,
} from 'src/shared';
import { handleError } from 'src/shared/core/errors';
import {
  AuthenticationForm,
  AuthenticationHeader,
  AuthenticationLink,
} from '../../components';
import * as S from './login-page.styles';
const LoginPage: React.FC = () => {
  const [SignInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const form = useForm<AuthenticationFormInput>({
    mode: 'all',
    resolver: yupResolver(loginValidationSchema),
  });

  const onSubmit: SubmitHandler<AuthenticationFormInput> = (data) => {
    SignInWithEmailAndPassword(data.email, data.senha);
  };

  return (
    <S.PageWrapper>
      <AuthenticationHeader />
      {error && <Alert variant="danger">{handleError(error)}</Alert>}

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
