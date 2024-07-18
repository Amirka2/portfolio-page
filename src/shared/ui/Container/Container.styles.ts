import styled from 'styled-components';

import { mediaQueries } from '@shared/constants';

export const Container = styled.div`
  width: 100%;
  max-width: 343px;

  margin: 0 auto;

  ${mediaQueries.gt.Desktop} {
    max-width: 1280px;
  }
`;
