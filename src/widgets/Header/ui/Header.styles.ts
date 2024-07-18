import styled from 'styled-components';

import { mediaQueries } from '@shared';

export const DesktopHeader = styled.header`
  display: none;

  ${mediaQueries.gt.Desktop} {
    display: block;
  }
`;

export const MobileHeader = styled.header`
  ${mediaQueries.gt.Desktop} {
    display: none;
  }
`;
