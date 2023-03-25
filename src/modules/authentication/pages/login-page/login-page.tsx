import { BaseSyntheticEvent } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { FormProvider, useForm } from 'react-hook-form';
import { AuthenticationFormInput, auth } from 'src/shared';
import { AuthenticationForm, AuthenticationHeader } from '../../components';

const LoginPage: React.FC = () => {
  const [CreateUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const form = useForm<AuthenticationFormInput>({
    mode: 'onChange',
    // resolver: yupResolver(),
  });

  // const onSubmit: SubmitHandler<AuthenticationFormInput> = (data) => {
  //   setIsLoading(true);
  //   login(data.email, data.password).then(() => {
  //     setIsLoading(false);
  //   });
  // };
  //
  return (
    <>
      <AuthenticationHeader />
      <FormProvider {...form}>
        <AuthenticationForm
          onSubmit={function (
            data: AuthenticationFormInput,
            event?: BaseSyntheticEvent<object, any, any> | undefined
          ): unknown {
            throw new Error('Function not implemented.');
          }}
        />
      </FormProvider>
    </>
  );
};

export default LoginPage;
