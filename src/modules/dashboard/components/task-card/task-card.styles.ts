import styled from 'styled-components';

export const TaskCardWrapper = styled.div`
  background: #ffffff;
  border-radius: 0.625rem;
  padding: 0.5rem 1rem;

  span {
    font-family: 'Karla';
  }

  display: flex;
  flex-direction: column;
  gap: 0.3125rem;
  min-height: 7.25rem;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const TaskCardStatusTitle = styled.span`
  color: ${(props) => props.theme.colors.danger};
  font-weight: 500;
  line-height: 1.125rem;
  font-size: 1rem;
`;

export const CardDivider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.colors.primary};
  opacity: 10%;
`;

export const TaskDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  &::before {
    content: '';
    display: inline-block;
    width: 0.125rem;
    height: 2rem;
    background: ${(props) => props.theme.colors.danger};
    margin-right: 0.625rem;
  }
`;

export const TaskDetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TaskDetaisTitle = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 600;
  font-size: 1rem;
`;

export const TaskDetailsDescription = styled.span`
  color: ${(props) => props.theme.colors.textPrimary};
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 0.75rem;
  color: rgba(51, 51, 51, 0.4);
`;
