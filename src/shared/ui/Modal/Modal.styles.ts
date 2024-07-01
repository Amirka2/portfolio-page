import styled from "styled-components";

import { Color } from "@shared";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(2px);

  z-index: 10000;
`;

export const Box = styled.div<{
  withOverlay: boolean;
}>`
  position: relative;

  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: ${Color.Gray};
  
  ${({ withOverlay }) => withOverlay && `
    width: 55%;
    height: 92%;
    
    background-color: #e1e1e1;
    border-radius: 20px;
  `}
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  overflow: hidden;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;

  width: 26px;
  height: 26px;

  background-color: transparent;
  border: none;

  color: ${Color.White};

  transform: scale(1.5);
  z-index: 10000;

  &:hover {
    color: ${Color.Black};
  }
`;
