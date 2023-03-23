import * as S from './button.styles';

type ButtonProps = {
  children: string;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;
