import MobileIcon from './mobile-icon';
import * as S from './mobile.logo.styles';
const MobileLogo: React.FC = () => {
  return (
    <S.MobileLogoWrapper>
      <MobileIcon />
      <S.LogoTitle>TODO</S.LogoTitle>
    </S.MobileLogoWrapper>
  );
};

export default MobileLogo;
