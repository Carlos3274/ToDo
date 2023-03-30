import styled from 'styled-components';
import { LogoIcon } from './logo-icon';

export const MobileLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.25rem;
`;

export const MobileCheckIcon = styled(LogoIcon)`
  fill: ${(props) => props.theme.colors.textSecondary};
  width: 15.75px;
  height: 13.81px;
`;

export const LogoTitle = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.875rem;
`;
