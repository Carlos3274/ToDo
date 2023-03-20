import { TextInputProps } from 'src/shared/types';

const TextInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return <label {...rest} />;
};

export default TextInput;
