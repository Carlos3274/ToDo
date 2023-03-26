import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  padding: 2.5rem 1.375rem;
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  @media (min-width: 600px) {
    padding: initial;
  }
`;

export const RegisterLink = styled(Link)`
  color: ${(props) => props.theme.colors.brand};
  font-weight: 600;
  align-self: center;
  text-decoration: none;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 600px) {
    min-width: 19.75rem;
    align-self: center;
  }
`;
