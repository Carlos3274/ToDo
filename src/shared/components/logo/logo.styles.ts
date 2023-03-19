import styled from 'styled-components';

export const Title = styled.h1`
  display: flex;
  align-items: center;

  font-weight: 600;
  font-size: 1.75rem;
  line-height: 2.625rem;
  text-transform: uppercase;
`;

export const TitleTo = styled.span`
  margin-left: 0.25rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;
export const TitleDo = styled.span`
  color: ${(props) => props.theme.colors.brand};
`;
