import styled, { css } from 'styled-components';

type InputWrapperProps = {
  isRequired?: boolean;
  error?: string;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 0.1875rem;

  input {
    background: ${(props) => props.theme.colors.primary};
    border: 1px solid ${(props) => props.theme.colors.background};
    border-radius: 0.25rem;
    height: 2.375rem;
    padding: 0.5rem;
  }

  &:focus-visible {
    border: 1px solid ${(props) => props.theme.colors.brand};
    border-color: ${(props) => props.theme.colors.brand};
    outline: none;
  }

  label:after {
    ${(props) =>
      props.isRequired &&
      css`
        content: ' *';
        color: ${(props) => props.theme.colors.danger};
        font-size: 1rem;
      `}
  }

  span {
    margin-top: 0.5rem;
    font-size: 0.95rem;
    color: ${(props) => props.theme.colors.danger};
  }
`;
