import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;

  input {
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.background};
    border-radius: 0.25rem;
    height: 2.375rem;
    padding: 0.5rem;

    &:focus-visible {
      border: 1px solid ${(props) => props.theme.colors.brand};
      border-color: ${(props) => props.theme.colors.brand};
      outline: none;
    }
  }
`;
