import { rgba } from 'polished';
import styled, { css } from 'styled-components';

type InputWrapperProps = {
  isInvalid: boolean;
  isDisabled: boolean;
  hasLeftIcon: boolean;
};

export const InputWrapper = styled.div<InputWrapperProps>`
  ${({ theme, isInvalid, isDisabled, hasLeftIcon }) => css`
    position: relative;
    padding: 0 !important;
    border: 2px solid ${theme.colors.background};
    border-radius: 0.3rem;
    background-color: ${theme.colors.background};
    transition: color 0.3s ease 0s, border-color 0.3s ease 0s,
      background-color 0.3s ease 0s;

    ${isDisabled &&
    css`
      border: 2px solid ${rgba(theme.colors.gray, 0.25)};
    `}

    ${isInvalid &&
    css`
      border: 2px solid ${rgba(theme.colors.danger, 0.25)};
    `}

    input, textarea {
      color: ${theme.colors.textPrimary} !important;
      padding-left: ${hasLeftIcon ? '2.2rem' : '0.75rem'};
      background-color: ${isDisabled
        ? theme.colors.backgroundInputDisabled
        : theme.colors.background} !important;
      border: none;
      cursor: text;

      ${isDisabled &&
      css`
        cursor: not-allowed;
      `}

      &.form-control.is-invalid {
        background: none;
        background-color: ${theme.colors.backgroundInput};
        border-color: ${theme.colors.borderInput};
        padding-right: 0.75em;
      }

      &::placeholder {
        color: ${rgba(theme.colors.textPrimary, 0.75)};
      }
    }

    svg {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(70%, -50%);
      color: ${isInvalid
        ? rgba(theme.colors.danger, 0.75)
        : rgba(theme.colors.textPrimary, 0.5)};
      font-size: 1rem;
    }

    &:focus-within {
      box-shadow: none;
      border: 2px solid
        ${isInvalid ? theme.colors.danger : theme.colors.primary};
      border-radius: 0.3rem;

      input,
      textarea {
        &:focus {
          box-shadow: none;
          border: none;
          background-color: ${theme.colors.backgroundInput};
        }
      }

      svg {
        color: ${isInvalid ? theme.colors.danger : theme.colors.primary};
      }
    }
  `}
`;
