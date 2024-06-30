import styled from "styled-components";

import { mediaQueries } from "@shared";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  margin-top: 104px;

  ${mediaQueries.gt.Desktop} {
    gap: 64px;

    margin-top: 200px;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 32px;

  ${mediaQueries.gt.Desktop} {
    gap: 16px;

    margin-bottom: 64px;
}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
