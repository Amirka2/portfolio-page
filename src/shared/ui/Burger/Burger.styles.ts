import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

import { Color } from "@shared/constants";

export const Button = styled.button`
  width: 36px;
  height: 36px;

  padding: 8px;
  border: none;
  background: transparent;
`;

export const CrossButton = styled(Button)`
  position: absolute;

  top: 12px;
  right: 16px;
`;

export const Wrapper = styled.div<{
  isOpen?: boolean;
}>`
  position: fixed;

  top: 0;
  right: 0;

  width: 90%;
  max-width: 400px;
  height: 100%;
  padding-top: 60px;

  background: ${Color.White};
  transform: translateX(100%);

  z-index: 1000000;

  ${({isOpen}) => isOpen && `
    transform: translateX(0);
  `}

  transition: transform 300ms;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Link = styled(ReactLink)<{
  isActive?: boolean;
}>`
  display: flex;
  align-items: center;

  padding: 16px 32px;

  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.Black};

  ${({ isActive }) => isActive && `
    color: ${Color.Gray};
  `}
`;

export const SwitcherWrapper = styled.div`
  position: absolute;

  bottom: calc(28px + 60px);
  right: 16px;
`;