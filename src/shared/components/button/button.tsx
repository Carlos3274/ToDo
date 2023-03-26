import { Spinner } from 'react-bootstrap';
import { ButtonProps } from 'src/shared/types';
import * as S from './button.styles';

const Button: React.FC<ButtonProps> = ({ children, isLoading }) => {
  return (
    <S.Button>
      {isLoading ? <Spinner animation="border" variant="light" /> : children}
    </S.Button>
  );
};

export default Button;
