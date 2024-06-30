import { mediaQueries } from "@shared";
import styled from "styled-components";

export const DesktopHeader = styled.header`
  display: none;

  ${mediaQueries.gt.Desktop} {
    display: block;
  }
`;

export const MobileHeader = styled.header`
  ${mediaQueries.gt.Desktop} {
    display: none;
  }
`;
