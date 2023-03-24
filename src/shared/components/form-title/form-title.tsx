import * as S from './form-title.styles';

export type FormTitleProps = {
  children: string;
};

const FormTitle: React.FC<FormTitleProps> = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export default FormTitle;
