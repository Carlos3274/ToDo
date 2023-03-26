import { forwardRef } from 'react';
import { LinkProps } from 'react-router-dom';
import * as S from './authentication-link.styles';

type Props = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isHeader?: boolean;
  };

const AuthenticationLink = forwardRef<HTMLAnchorElement, Props>(
  ({ ...rest }, ref) => <S.AuthenticationAnchor {...rest} ref={ref} />
);

export default AuthenticationLink;
