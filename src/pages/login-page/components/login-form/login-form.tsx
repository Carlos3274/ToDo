import { TextInput } from 'src/shared';
import * as S from './login-form.styles';
const LoginForm: React.FC = () => {
  return (
    <S.FormWrapper>
      <TextInput label="E-mail" type="email" />
      <TextInput label="Senha" type="password" />
    </S.FormWrapper>
  );
};

export default LoginForm;
