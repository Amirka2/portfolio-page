import styled from "styled-components";

import { mediaQueries } from "@shared/constants";

export const SubTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2;

  ${mediaQueries.gt.Desktop} {
    font-size: 36px;
  }
`;
