import { LabelProps } from 'src/shared/types';

const Label: React.FC<LabelProps> = ({ ...rest }) => {
  return <label {...rest} />;
};

export default Label;
