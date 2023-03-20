import { InputProps, LabelProps } from 'src/shared/types';
import Input from '../input/input';
import Label from '../label/label';

type Props = {
  labelProps: LabelProps;
  inputProps: InputProps;
};

const TextInput: React.FC<Props> = ({ labelProps, inputProps }) => {
  return (
    <>
      <Label {...labelProps} />
      <Input {...inputProps} />
    </>
  );
};

export default TextInput;
