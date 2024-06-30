import { mediaQueries } from "@shared";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Line = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${mediaQueries.gt.Desktop} {
    flex-direction: row;
  }
`;
