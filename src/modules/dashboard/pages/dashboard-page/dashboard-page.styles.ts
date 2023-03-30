import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const PageHeader = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  min-width: 100vw;

  min-height: 3.75rem;
  background-color: ${(props) => props.theme.colors.primary};

  padding: 1.25rem 0.9375rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const DashboardWrapper = styled.div`
  background: ${(props) => props.theme.colors.background};
  flex: 1 1 auto;
`;

export const DashboardHeader = styled.div``;
