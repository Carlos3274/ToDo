import { TextInputProps } from 'src/shared/types';

const TextInput: React.FC<TextInputProps> = ({ placeholder, ...rest }) => {
  return <label placeholder={placeholder} {...rest} />;
};

export default TextInput;
