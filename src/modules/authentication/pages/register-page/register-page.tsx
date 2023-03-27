import { yupResolver } from '@hookform/resolvers/yup';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import {
  AuthenticationFormInput,
  Button,
  auth,
  registerValidationSchema,
} from 'src/shared';
import {
  AuthenticationForm,
  AuthenticationHeader,
  AuthenticationLink,
} from '../../components';

import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import { handleError } from 'src/shared/core/errors';
import * as S from './register-page.styles';

const RegisterPage: React.FC = () => {
  const [CreateUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();
  const form = useForm<AuthenticationFormInput>({
    mode: 'all',
    resolver: yupResolver(registerValidationSchema),
  });

  const onSubmit: SubmitHandler<AuthenticationFormInput> = (data) => {
    CreateUserWithEmailAndPassword(data.email, data.senha);
  };

  useEffect(() => {
    if (user) {
      navigate('/login');
    }
  }, [navigate, user]);

  return (
    <S.PageWrapper>
      <AuthenticationHeader isRegister />
      {error && <Alert variant="danger">{handleError(error)}</Alert>}
      <S.ContentContainer>
        <FormProvider {...form}>
          <AuthenticationForm id="register" isRegister onSubmit={onSubmit} />
        </FormProvider>
        <S.ButtonContainer>
          <Button
            form="register"
            type="submit"
            isLoading={loading}
            disabled={!form.formState.isValid}
          >
            Cadastrar-se
          </Button>
          <AuthenticationLink to="/login">
            Já possui uma conta?
          </AuthenticationLink>
        </S.ButtonContainer>
      </S.ContentContainer>
    </S.PageWrapper>
  );
};

export default RegisterPage;
