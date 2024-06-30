import React from "react";
import { useLocation } from "react-router-dom";

import { Line } from "@shared/ui";
import { useTranslation } from "@shared/hooks";
import { NavMenu } from "@features/nav";
import { LanguageSwitcher } from "@features/LanguageSwitcher";

import * as SC from "./Desktop.styles";

export const Desktop = () => {
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
