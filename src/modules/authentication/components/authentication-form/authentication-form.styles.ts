import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  input {
    color: ${(props) => props.theme.colors.textSecondary};
  }

  @media (min-width: 600px) {
    a {
      display: none;
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const GeralContainer = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.textSecondary};

  header {
    display: none;
  }

  @media (min-width: 600px) {
    min-width: 19.75rem;
    margin-inline: auto;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.5625rem;

  @media (max-height: 600px) {
    margin-bottom: 2.5rem;
  }

  @media (min-width: 600px) {
    display: none;
  }
`;
