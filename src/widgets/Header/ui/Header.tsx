import React from "react";

import { Line } from "@shared/ui";
import { NavMenu } from "@features/nav";
import { LanguageSwitcher } from "@features/LanguageSwitcher";

import * as SC from "./Header.styles";

export const Header = () => {
  return (
    <SC.Container>
      <SC.Header>
        <SC.Wrapper>
          <SC.TopLine>
            <SC.Placeholder />
            <SC.MainText>Катерина Дорохова</SC.MainText>
            <LanguageSwitcher />
          </SC.TopLine>
          <Line />
          <NavMenu />
        </SC.Wrapper>
      </SC.Header>
    </SC.Container>
  );
};
