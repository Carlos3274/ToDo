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
import { useNavigate } from 'react-router-dom';

import { handleError } from 'src/shared/core/errors';
import { notifyError, notifySuccess } from '../../utils';
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
      notifySuccess('Cadastro Realizado');
      navigate('/login');
    }
  }, [navigate, user]);

  useEffect(() => {
    if (error) {
      notifyError(handleError(error));
    }
  }, [error]);

  return (
    <S.PageWrapper>
      <AuthenticationHeader isRegister />
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
