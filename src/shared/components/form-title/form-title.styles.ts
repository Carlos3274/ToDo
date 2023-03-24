import styled from 'styled-components';

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
