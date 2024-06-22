import { Link as BaseLink } from "react-router-dom";
import { rgba } from "polished";
import styled from "styled-components";

import { Color } from "@shared";

export const Link = styled(BaseLink)`
  width: 100%;
  text-decoration: none;

  &:hover {
    filter: opacity(.9);
  }
`;

export const Wrapper = styled.div<{
  img: string;
}>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  height: 400px;

  background: url(${({ img }) => img});
  background-size: cover;
`;

export const Shadow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 148px;

  background: ${rgba(Color.Black, 0.5)};
`;

export const Text = styled.span`
  color: ${Color.White};
  // TODO add font
  font-family: Roboto, sans-serif;
  font-size: 36px;
  font-weight: 400;
  line-height: 42.19px;
  text-align: center;
`;
