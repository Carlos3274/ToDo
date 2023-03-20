import { InputProps } from 'src/shared/types';

const Input: React.FC<InputProps> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default Input;
