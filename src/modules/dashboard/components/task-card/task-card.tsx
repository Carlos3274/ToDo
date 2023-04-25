import { MdOutlineWatchLater } from 'react-icons/md';
import { TfiMenuAlt } from 'react-icons/tfi';
import * as S from './task-card.styles';

export type TaskStatus = 'Em atraso' | 'Último dia' | 'Para fazer';

type TaskProps = {
  status: TaskStatus;
  title: string;
  description: string;
  time: string;
};

const TaskCard: React.FC<TaskProps> = ({
  status,
  title,
  description,
  time,
}) => {
  return (
    <S.TaskCardWrapper>
      <S.TaskCardStatus status={status}>{status}</S.TaskCardStatus>
      <S.CardDivider />

      <S.TaskDetailsContainer status={status}>
        <S.TaskDetailsWrapper>
          <S.TaskDetaisTitle>{title}</S.TaskDetaisTitle>
          <S.TaskDetailsDescription>{description}</S.TaskDetailsDescription>
        </S.TaskDetailsWrapper>
      </S.TaskDetailsContainer>
      <S.TaskFooter>
        <span>
          <TfiMenuAlt fill="rgba(51, 51, 51, 0.4)" />
          Tarefas
        </span>

        <span>
          <MdOutlineWatchLater fill="rgba(51, 51, 51, 0.4)" size={16} />
          {time}
        </span>
      </S.TaskFooter>
    </S.TaskCardWrapper>
  );
};

export default TaskCard;
