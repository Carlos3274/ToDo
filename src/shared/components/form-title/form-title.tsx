import { FormTitleProps } from 'src/shared/types';
import * as S from './form-title.styles';

const FormTitle: React.FC<FormTitleProps> = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export default FormTitle;
