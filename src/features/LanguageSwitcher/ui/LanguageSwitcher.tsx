import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import * as SC from "./LanguageSwitcher.styles";

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const language = i18n.language;

  const handleChange = (locale: string) => {
    i18n.changeLanguage(locale);
  };

  const isActive = useCallback(
    (locale: string) => locale === language,
    [language]
  );

  return (
    <SC.Wrapper>
      <SC.Button onClick={() => handleChange("en")} isActive={isActive("en")}>
        EN
      </SC.Button>
      <SC.Button onClick={() => handleChange("ru")} isActive={isActive("ru")}>
        RU
      </SC.Button>
    </SC.Wrapper>
  );
};
