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
  padding-inline: 1.25rem;
  background: ${(props) => props.theme.colors.background};
  flex: 1 1 auto;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

export const DashboardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;
  padding: 1.25rem;

  align-items: center;

  h1 {
    margin: 0;

    font-weight: 600;
    font-size: 1.25rem;
    line-height: 1.875rem;
  }

  span {
    font-size: 0.875rem;
    line-height: 1.3125rem;
  }

  button {
    background: ${(props) => props.theme.colors.primary};
    font-weight: 700;
    color: ${(props) => props.theme.colors.textSecondary};
    padding: 0.5rem 1.75rem;

    border-radius: 0.25rem;
    outline: none;
    border: none;
  }
`;
