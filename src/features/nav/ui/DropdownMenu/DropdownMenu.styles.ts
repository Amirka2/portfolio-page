import { Link } from "react-router-dom";
import { rgba } from "polished";
import styled from "styled-components";

import { Color } from "@shared";

const ItemStyles = `
  padding: 28px 52px;

  text-decoration: none;

  color: ${Color.Black};
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;

  &:hover {
    background: ${rgba(Color.Black, 0.1)};
  }`;

export const Trigger = styled.button`
  background: transparent;
  border: none;

  ${ItemStyles};
`;

export const Menu = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;
  
  background: ${rgba(Color.White, .7)};
`;

export const LinkElement = styled(Link)`
  ${ItemStyles};

  padding: 28px 8px;
`;