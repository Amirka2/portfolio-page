import styled from "styled-components";

import { Color, mediaQueries } from "@shared";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;

  margin-top: 16px;
  padding: 24px 0;
  width: 100%;

  background: ${Color.Haki};

  ${mediaQueries.gt.Desktop} {
    margin-top: 64px;
  }
`;

export const Wrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  gap: 32px;
`;

export const MainInfo = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;

  ${mediaQueries.gt.Desktop} {
    flex-direction: row;
  }
`;

export const ContactsWrapper = styled.div`
  ${mediaQueries.gt.Desktop} {
    flex-grow: 2;
  }
`;

export const NavigationWrapper = styled.div`
  ${mediaQueries.gt.Desktop} {
    flex-grow: 1.5;
  }
`;

export const SubInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const Caption = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: ${Color.HakiWhite};
`;

export const GoTop = styled.button`
  position: absolute;
  top: 50%;
  right: 0;

  width: 50px;
  height: 50px;
  background-color: ${Color.White};

  border-radius: 50%;
  border: none;

  transform: translateY(-50%);
`;
