import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  display: none;

  @media (min-width: 600px) {
    margin-bottom: 4.875rem;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 19px 32px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;

export const RegisterLink = styled(Link)`
  color: ${(props) => props.theme.colors.brand};
  font-weight: 600;
  align-self: center;
  text-decoration: none;
`;
