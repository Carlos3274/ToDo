import { TextInputProps } from 'src/shared/types';
import * as S from './text-input.styles';

const TextInput: React.FC<TextInputProps> = ({ label, ...rest }) => {
  return (
    <S.InputWrapper>
      <label>{label}</label>
      <input type="text" {...rest} />
    </S.InputWrapper>
  );
};

export default TextInput;
