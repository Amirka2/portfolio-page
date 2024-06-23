import React from "react";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { Container, Line, SubTitle, Text } from "@shared/ui";
import img from "@static/images/main_background.png";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

import * as SC from "./BioAbout.styles";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({ resources });

export const BioAbout = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SC.Wrapper>
        <SC.SideBlock>
          <SC.Image src={img} alt="portrait" title="portrait" />
        </SC.SideBlock>
        <SC.SideBlock>
          <SC.TextWrapper>
            <SubTitle>{t("name")}</SubTitle>
            <Line />
            <SC.TextList>
              <SC.TextListItem>
                <Text>{t("info.0")}</Text>
              </SC.TextListItem>
              <SC.TextListItem>
                <Text>{t("info.1")}</Text>
              </SC.TextListItem>
              <SC.TextListItem>
                <Text>{t("info.2")}</Text>
              </SC.TextListItem>
            </SC.TextList>
          </SC.TextWrapper>
        </SC.SideBlock>
      </SC.Wrapper>
    </Container>
  );
};
