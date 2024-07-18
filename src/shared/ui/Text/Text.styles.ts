import styled from 'styled-components';

import { mediaQueries } from '@shared/constants';

export const Text = styled.p`
    font-size: 20px;
    line-height: 1.2;
    font-weight: 300;

    ${mediaQueries.gt.Desktop} {
    font-size: 24px;
  }
`;
