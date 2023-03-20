import { Form, Row } from 'react-bootstrap';

const LoginForm: React.FC = () => {
  return (
    <Form>
      <Row>
        <label>Email</label>
        <input type="email" placeholder="Digite seu email" />
      </Row>
    </Form>
  );
};

export default LoginForm;
