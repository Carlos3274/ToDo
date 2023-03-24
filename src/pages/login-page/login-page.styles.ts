import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};

  min-height: 100vh;
`;

export const Container = styled.div`
  padding-top: 3.5rem;
  header {
    display: none;
  }

  @media (min-width: 600px) {
    max-width: 19.75rem;
    margin: auto;
  }
  margin-inline: 1.375rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.5625rem;

  @media (min-width: 600px) {
    display: none;
  }
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 1.375rem;
  line-height: 2rem;

  &::before {
    content: '';
    display: inline-block;
    width: 0.4375rem;
    height: 1.6875rem;
    background: ${(props) => props.theme.colors.brand};
    margin-right: 0.5rem;
  }
`;

export const RegisterLink = styled(Link)`
  color: ${(props) => props.theme.colors.brand};
  font-weight: 600;
  align-self: center;
  text-decoration: none;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Header = styled.header`
  display: none;

  @media (min-width: 600px) {
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 19px 32px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
