import { FiMenu as MenuIcon } from 'react-icons/fi';
import { MobileLogoIcon } from 'src/shared';
import { TaskCard } from '../../components';
import * as S from './dashboard-page.styles';

const DashboardPage: React.FC = () => {
  return (
    <S.PageWrapper>
      <S.PageHeader>
        <MenuIcon size={24} />
        <MobileLogoIcon />
      </S.PageHeader>
      <S.DashboardWrapper>
        <S.DashboardHeader>
          <h1>Tarefas</h1>
          <span>Página para gerenciamento de tarefas</span>
          <button>Novo</button>
        </S.DashboardHeader>
        <TaskCard />
      </S.DashboardWrapper>
    </S.PageWrapper>
  );
};

export default DashboardPage;
