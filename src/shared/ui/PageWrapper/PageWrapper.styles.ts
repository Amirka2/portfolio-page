import styled from "styled-components";

import { mediaQueries } from "@shared/constants";

export const Wrapper = styled.div`
  margin-top: 104px;

  ${mediaQueries.gt.Desktop} {
    margin-top: 200px;
  }
`;
