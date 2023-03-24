import { useForm } from 'react-hook-form';
import { AuthenticationFormInput } from 'src/shared';
import { AuthenticationForm, AuthenticationHeader } from '../../components';

const LoginPage: React.FC = () => {
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

  return (
    <>
      <AuthenticationHeader />
      <AuthenticationForm />
    </>
  );
};

export default LoginPage;
