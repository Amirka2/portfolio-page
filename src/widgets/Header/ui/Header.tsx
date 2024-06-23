import React from "react";

import { LanguageSwitcher } from "@features/LanguageSwitcher";

import * as SC from "./Header.styles";
import { NavMenu } from "@features/nav";

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
          <SC.SLine />
          <NavMenu />
        </SC.Wrapper>
      </SC.Header>
    </SC.Container>
  );
};
