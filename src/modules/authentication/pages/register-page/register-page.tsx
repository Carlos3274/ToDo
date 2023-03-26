import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { AuthenticationFormInput, auth } from 'src/shared';
import { Button } from 'src/shared/components/button/button.styles';
import { AuthenticationForm, AuthenticationHeader } from '../../components';
import * as S from './register-page.styles';
const RegisterPage: React.FC = () => {
  const [CreateUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const form = useForm<AuthenticationFormInput>({
    mode: 'onChange',
    // resolver: yupResolver(),
  });

  const onSubmit: SubmitHandler<AuthenticationFormInput> = (data) => {
    console.log('caiu');
    console.log(data);
    CreateUserWithEmailAndPassword(data.email, data.senha);
  };

  return (
    <S.PageWrapper>
      <AuthenticationHeader isRegister />
      <FormProvider {...form}>
        <AuthenticationForm id="register" isRegister onSubmit={onSubmit} />
      </FormProvider>
      <S.ButtonContainer>
        <Button form="register" type="submit">
          Cadastrar-se
        </Button>
        <S.RegisterLink to="/login">Já possui uma conta?</S.RegisterLink>
      </S.ButtonContainer>
    </S.PageWrapper>
  );
};

export default RegisterPage;
