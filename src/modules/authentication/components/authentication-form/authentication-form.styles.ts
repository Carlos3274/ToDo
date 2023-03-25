import { Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 600px) {
    a {
      display: none;
    }
  }
`;

export const RegisterLink = styled(Link)`
  color: ${(props) => props.theme.colors.brand};
  font-weight: 600;
  align-self: center;
  text-decoration: none;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const ContentWrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};
`;

export const ContentContainer = styled.div`
  margin-inline: 1.375rem;

  header {
    display: none;
  }

  @media (min-width: 600px) {
    max-width: 19.75rem;
    margin: auto;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.5625rem;

  @media (min-width: 600px) {
    display: none;
  }
`;
