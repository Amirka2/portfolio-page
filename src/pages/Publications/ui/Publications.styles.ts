import styled from 'styled-components';

import { mediaQueries } from '@shared';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${mediaQueries.gt.Desktop} {
    gap: 48px;
  }
`;
