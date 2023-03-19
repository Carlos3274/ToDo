import styled from 'styled-components';

export const Wrapper = styled.body`
  margin-inline: 1.375rem;
  margin-top: 3.5rem;
  margin-bottom: 9.8125rem;

  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};

  @media (min-width: 600px) {
    background: green;
  }
`;
