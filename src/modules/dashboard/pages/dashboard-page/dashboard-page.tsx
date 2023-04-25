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
        <TaskCard
          title="Título da Task"
          status="Em atraso"
          description="Descrição da task"
          time="24 de Outubro, 10:15"
        />
        <TaskCard
          title="Título da Task"
          status="Para fazer"
          description="Descrição da task"
          time="24 de Outubro, 10:15"
        />
        <TaskCard
          title="Título da Task"
          status="Último dia"
          description="Descrição da task"
          time="24 de Outubro, 10:15"
        />
      </S.DashboardWrapper>
    </S.PageWrapper>
  );
};

export default DashboardPage;
