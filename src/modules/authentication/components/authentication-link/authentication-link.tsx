import { forwardRef } from 'react';
import { LinkProps } from 'react-router-dom';
import * as S from './authentication-link.styles';

type Props = LinkProps &
  React.RefAttributes<HTMLAnchorElement> & {
    isHeader?: boolean;
  };

const AuthenticationLink = forwardRef<HTMLAnchorElement, Props>(
  ({ isHeader, ...rest }, ref) => (
    <S.AuthenticationAnchor
      {...rest}
      isheader={isHeader ? 'true' : undefined}
      ref={ref}
    />
  )
);

export default AuthenticationLink;
