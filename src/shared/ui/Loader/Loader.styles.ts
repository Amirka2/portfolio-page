import styled, { keyframes } from 'styled-components';

import { mediaQueries } from '@shared/constants';

import { SpinnerIcon } from '../Icons';

const Keyframes = keyframes`
  from {
    rotate: 0deg;
  }
  to {
    rotate: 360deg;
  }
`;

export const Wrapper = styled.div`
  min-height: 320px;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled(SpinnerIcon)`
  width: 36px;
  height: 36px;

  ${mediaQueries.gt.Desktop} {
    width: 80px;
    height: 80px;
  }

  animation: ${Keyframes} 800ms infinite ease-in-out;
`;
