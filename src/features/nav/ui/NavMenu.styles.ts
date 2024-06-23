import { rgba } from "polished";
import { Link as ReactLink } from "react-router-dom";
import styled from "styled-components";

import { Color, mediaQueries } from "@shared";

export const MobileMenu = styled.div`
  display: block;

  ${mediaQueries.gt.Desktop} {
    display: none;
  }
`;

export const MobileMenuContainer = styled.div`
  position: absolute;
  top: 80px;
  right: 0;

  background: ${rgba(Color.White, .7)};
`;

export const DesktopMenu = styled.div`
  display: none;

  ${mediaQueries.gt.Desktop} {
    display: block;
  }
`;

export const Container = styled.nav<{
    isOpen: boolean;
}>`
  flex-direction: column;
  align-items: center;

  ${mediaQueries.gt.Desktop} {
    flex-direction: row;
  }

  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
`;

export const Link = styled(ReactLink)`
  padding: 28px 52px;

  text-decoration: none;

  color: ${Color.Black};
  font-family: Roboto, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;

  &:hover {
    background: ${rgba(Color.Black, 0.1)};
  }
`;
