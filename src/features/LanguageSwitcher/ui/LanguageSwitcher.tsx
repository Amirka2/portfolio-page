import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";

import { Color } from "@shared";

import * as SC from "./LanguageSwitcher.styles";

interface LanguageSwitcherProps {
  hasChinese?: boolean;
  color?: string;
}

export const LanguageSwitcher = ({
  color = Color.Black,
  hasChinese,
}: LanguageSwitcherProps) => {
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
      <SC.Button
        onClick={() => handleChange("en")}
        isActive={isActive("en")}
        color={color}
      >
        EN
      </SC.Button>
      <SC.Button
        onClick={() => handleChange("ru")}
        isActive={isActive("ru")}
        color={color}
      >
        RU
      </SC.Button>
      {hasChinese && (
        <SC.Button
          onClick={() => handleChange("cn")}
          isActive={isActive("cn")}
          color={color}
        >
          CN
        </SC.Button>
      )}
    </SC.Wrapper>
  );
};
