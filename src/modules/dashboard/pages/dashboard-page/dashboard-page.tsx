import { FiMenu as MenuIcon } from 'react-icons/fi';
import { MobileLogoIcon } from 'src/shared';
import * as S from './dashboard-page.styles';

const DashboardPage: React.FC = () => {
  return (
    <S.PageWrapper>
      <S.PageHeader>
        <MenuIcon size={24} />
        <MobileLogoIcon />
      </S.PageHeader>
      <S.DashboardWrapper />
    </S.PageWrapper>
  );
};

export default DashboardPage;
