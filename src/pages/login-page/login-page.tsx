import { Logo } from 'src/shared';
import * as S from './login-page.styles';

const LoginPage: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.LogoWrapper>
          <Logo />
        </S.LogoWrapper>
        <S.Title>Autenticação</S.Title>
      </S.Container>
    </S.Wrapper>
  );
};

export default LoginPage;
