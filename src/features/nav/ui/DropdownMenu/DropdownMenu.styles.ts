import { Link } from "react-router-dom";
import { rgba } from "polished";
import styled from "styled-components";

import { Color } from "@shared";

const ItemStyles = `
  padding: 22px 52px;

  text-decoration: none;

  color: ${Color.Black};
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }`;

export const Trigger = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;

  background: transparent;
  border: none;

  ${ItemStyles};
`;

export const Menu = styled.div`
  position: fixed;

  display: flex;
  flex-direction: column;

  background: ${rgba(Color.White, 0.7)};
`;

export const LinkElement = styled(Link)`
  ${ItemStyles};

  padding: 22px 8px;
`;
