import styled from 'styled-components';

export const Button = styled.button`
  color: ${(props) => props.theme.colors.textSecondary};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.625rem;
  background-color: ${(props) => props.theme.colors.brand};
  font-weight: 600;

  border: none;
  border-radius: 4px;
  width: 100%;

  &:hover {
    filter: brightness(1.2);
    transition: all 0.3s ease;
  }

  &:disabled {
    background: ${(props) => props.theme.colors.brand};
    color: ${(props) => props.theme.colors.background};
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
