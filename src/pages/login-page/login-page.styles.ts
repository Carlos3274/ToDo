import styled from 'styled-components';

export const Wrapper = styled.html`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};

  padding-top: 3.5rem;
  min-height: 100vh;

  @media (min-width: 600px) {
    background: green;
  }
`;

export const Container = styled.div`
  margin-inline: 1.375rem;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.5625rem;
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
