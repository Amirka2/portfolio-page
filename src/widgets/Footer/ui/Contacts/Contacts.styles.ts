import styled from "styled-components";
import { rgba } from "polished";

import { Color } from "@shared";

export const Header = styled.h5`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${Color.White};

  margin-bottom: 24px;
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContactLink = styled.a`
  text-decoration: none;

  color: ${Color.HakiWhite};
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;

  &:hover {
    color: ${rgba(Color.White, 0.8)};
  }
`;

export const ContactButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;

  background: transparent;

  border-radius: 50%;
  border: 1px solid ${Color.HakiWhite};

  &:hover {
    filter: brightness(1.5);
  }
`;
