import { forwardRef } from 'react';
import { Spinner } from 'react-bootstrap';
import { ButtonProps } from 'src/shared/types';
import * as S from './button.styles';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, isLoading, ...rest }, ref) => (
    <S.Button {...rest} ref={ref}>
      {isLoading ? (
        <Spinner animation="border" variant="light" size="sm" />
      ) : (
        children
      )}
    </S.Button>
  )
);

export default Button;
