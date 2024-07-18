import styled from 'styled-components';

import { mediaQueries } from '@shared';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${mediaQueries.gt.Desktop} {
    gap: 100px;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${mediaQueries.gt.Desktop} {
    flex-direction: row;
  }
`;
