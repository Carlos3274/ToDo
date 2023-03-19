import { LogoIcon } from './logo-icon';
import * as S from './logo.styles';

const Logo: React.FC = () => {
  return (
    <S.Title>
      <LogoIcon />

      <S.TitleTo>To</S.TitleTo>
      <S.TitleDo>Do</S.TitleDo>
    </S.Title>
  );
};

export default Logo;
