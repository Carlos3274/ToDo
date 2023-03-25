import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PageWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  height: 100vh;
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
  min-width: 19.75rem;
  margin-inline: auto;
  margin-top: 1.5rem;
  button {
    width: 100%;
  }
`;
