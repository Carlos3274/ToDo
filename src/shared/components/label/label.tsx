import { ReactNode } from 'react';
import { FormLabelProps } from 'react-bootstrap';
import * as S from './label.styles';

export type LabelProps = FormLabelProps & {
  isRequired?: boolean;
  children?: ReactNode;
};

const Label: React.FC<LabelProps> = ({ isRequired, className, children }) => {
  return (
    <S.LabelWrapper
      className={isRequired ? [className, 'required'].join(' ') : className}
    >
      {children}
    </S.LabelWrapper>
  );
};

export default Label;
