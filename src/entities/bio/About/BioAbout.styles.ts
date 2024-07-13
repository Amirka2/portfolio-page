import styled from "styled-components";

import { mediaQueries } from "@shared";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  ${mediaQueries.gt.Desktop} {
    flex-direction: row;
    gap: 64px;
  }
`;

export const SideBlock = styled.div`
  display: flex;
  align-items: center;

  ${mediaQueries.gt.Desktop} {
    width: 50%;
    min-height: 800px;
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  ${mediaQueries.gt.Desktop} {
    gap: 16px;
  }
`;

export const TextList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 22px;

  padding-left: 24px;
`;

export const TextListItem = styled.li`
  list-style-type: disc;
`;

export const Image = styled.img`
  width: 100%;
`;
