import styled from 'styled-components';

import { mediaQueries } from '@shared';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 32px;

  ${mediaQueries.gt.Desktop} {
    flex-direction: row;
    gap: 60px;
  }
`;

export const SideBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${mediaQueries.gt.Desktop} {
    gap: 48px;

    width: 50%;
  }
`;

export const TextsList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  max-width: 440px;

  ${mediaQueries.gt.Desktop} {
    gap: 42px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
