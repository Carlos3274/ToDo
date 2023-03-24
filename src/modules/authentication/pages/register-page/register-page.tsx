import { AuthenticationForm, AuthenticationHeader } from '../../components';

const RegisterPage: React.FC = () => {
  return (
    <>
      <AuthenticationHeader isRegister />
      <AuthenticationForm isRegister />
    </>
  );
};

export default RegisterPage;
