import styled from 'styled-components';

import { mediaQueries } from '@shared/constants';

export const PhotoContainer = styled.div<{
  photo?: string;
}>`
  position: relative;
  // нужно для центрирования фото в слайде
  display: flex !important;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  height: calc(100vh - 50px);

  background: url(${({ photo }) => Boolean(photo) && photo});
  backdrop-filter: blur(10px);

  ${mediaQueries.gt.Desktop} {
    justify-content: flex-start;
  }
`;
