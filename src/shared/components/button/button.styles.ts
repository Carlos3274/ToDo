import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.625rem;
  background-color: ${(props) => props.theme.colors.brand};
  font-weight: 700;

  border: none;
  border-radius: 4px;

  &:focus {
    background: rgba(39, 196, 152, 0.5);
    color: rgba(233, 236, 239, 0.4);
  }
`;
