import styled from "styled-components";

import { mediaQueries } from "@shared";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  ${mediaQueries.gt.Desktop} {
    flex-direction: row;
    gap: 32px;
  }
`;

export const Image = styled.img`
  width: 100%;

  ${mediaQueries.gt.Desktop} {
    width: 412px;
    max-height: 530px;
  }

  background-size: cover;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 5;
`;

