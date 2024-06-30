import React from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { Line } from "@shared/ui";
import { NavMenu } from "@features/nav";
import { LanguageSwitcher } from "@features/LanguageSwitcher";

import * as SC from "./Header.styles";
import { useLocation } from "react-router-dom";

i18n.use(initReactI18next).init({ });

export const Header = () => {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <SC.Container>
      <SC.Header>
        <SC.Wrapper>
          <SC.TopLine>
            <SC.Placeholder />
            <SC.MainText>{t("Header.name")}</SC.MainText>
            <LanguageSwitcher hasChinese={location.pathname === '/about'}/>
          </SC.TopLine>
          <Line />
          <NavMenu />
        </SC.Wrapper>
      </SC.Header>
    </SC.Container>
  );
};
