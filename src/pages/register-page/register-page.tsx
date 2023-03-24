import { AuthenticationForm, AuthenticationHeader } from 'src/shared';

const RegisterPage: React.FC = () => {
  return (
    <>
      <AuthenticationHeader isRegister />
      <AuthenticationForm isRegister />
    </>
  );
};

export default RegisterPage;
