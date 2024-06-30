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

export const Wrapper = styled.div`
  position: fixed;

  top: 0;
  right: 0;

  width: 90%;
  height: 100%;
  // Header height
  margin-top: 104px;

  background: ${Color.White};

  z-index: 1000000;
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
