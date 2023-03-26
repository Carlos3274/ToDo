import { Link } from 'react-router-dom';
import styled from 'styled-components';

type AuthenticationAnchorProps = {
  isHeader?: boolean;
};

export const AuthenticationAnchor = styled(Link)<AuthenticationAnchorProps>`
  color: ${(props) => props.theme.colors.brand};
  font-weight: 600;
  align-self: center;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.colors.brand};
    filter: brightness(1.3);
    transition: all 0.3s ease;
  }

  @media (min-width: 600px) {
    display: ${(props) => (props.isHeader ? 'block' : 'none')};
  }
`;
