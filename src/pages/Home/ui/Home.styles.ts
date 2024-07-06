import styled from "styled-components";

import { mediaQueries } from "@shared";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  gap: 120px;

  ${mediaQueries.gt.Desktop} {
    margin-top: -200px;
  }
`;
