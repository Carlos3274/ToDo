import { Form, Row } from 'react-bootstrap';
import TextInput from 'src/shared/components/text-input/text-input';

const LoginForm: React.FC = () => {
  return (
    <Form>
      <Row>
        <TextInput label="E-mail" />
        <TextInput label="Senha" />
      </Row>
    </Form>
  );
};

export default LoginForm;
