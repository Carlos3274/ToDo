import { TfiMenuAlt } from 'react-icons/tfi';
import * as S from './task-card.styles';

const TaskCard: React.FC = () => {
  return (
    <S.TaskCardWrapper>
      <S.TaskCardStatusTitle>Em atraso</S.TaskCardStatusTitle>
      <S.CardDivider />

      <S.TaskDetailsContainer>
        <S.TaskDetailsWrapper>
          <S.TaskDetaisTitle>Título da Task</S.TaskDetaisTitle>
          <S.TaskDetailsDescription>Descrição da task</S.TaskDetailsDescription>
        </S.TaskDetailsWrapper>
      </S.TaskDetailsContainer>
      <div>
        <TfiMenuAlt fill="rgba(51, 51, 51, 0.4)" />
      </div>
    </S.TaskCardWrapper>
  );
};

export default TaskCard;
