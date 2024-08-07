import styled from 'styled-components';

import { Color } from '@shared';

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;

  width: 100%;

  background: ${Color.White};

  z-index: 10000;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  width: fit-content;
  padding: 12px 16px;
`;

export const MainText = styled.h1`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  line-height: 24px;
  font-weight: 300;

  text-transform: uppercase;
`;
