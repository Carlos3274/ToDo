import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { AuthenticationFormInput, auth } from 'src/shared';
import { AuthenticationForm, AuthenticationHeader } from '../../components';

const LoginPage: React.FC = () => {
  const [CreateUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const form = useForm<AuthenticationFormInput>({
    mode: 'onChange',
    // resolver: yupResolver(),
  });

  // ESTOU NO MIN 13 DO vídeo FIREBASE

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
