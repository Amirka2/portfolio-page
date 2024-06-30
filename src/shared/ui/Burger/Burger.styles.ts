import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

import { Color } from "@shared/constants";

export const Button = styled.button`
  width: 40px;
  height: 40px;

  padding: 8px;
  border: none;
  background: transparent;
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
  margin-top: 104px;

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

export const Link = styled(ReactLink)`
  display: flex;
  align-items: center;

  padding: 16px 32px;

  font-family: 'Roboto', sans-serif;
  text-decoration: none;
  font-size: 20px;
  line-height: 24px;
  color: ${Color.Black};
`;
