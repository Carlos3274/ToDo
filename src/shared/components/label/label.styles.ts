import styled from 'styled-components';

export const LabelWrapper = styled.div`
  margin-bottom: 0.3rem;
  font-size: 1rem;

  &.required {
    &:after {
      content: ' *';
      color: ${(props) => props.theme.colors.danger};
      font-size: 1rem;
    }
  }
`;

export const IconWrapper = styled.span`
  margin-left: 4px;

  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.primary};
  }
`;
