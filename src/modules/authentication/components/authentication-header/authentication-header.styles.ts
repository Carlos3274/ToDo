import styled from 'styled-components';

export const Header = styled.header`
  display: none;

  @media (min-width: 600px) {
    /* margin-bottom: 4.875rem; */
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 1.1875rem 2rem;
    width: 100%;
    background-color: ${(props) => props.theme.colors.secondary};
  }
`;
