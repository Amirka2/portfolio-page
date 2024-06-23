import React from "react";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { BioAbout } from "@entities/Bio";
import { Container, Line, SubTitle, Text } from "@shared/ui";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";
import translationCN from "./locales/cn/translation.json";

import * as SC from "./About.styles";

interface TextData {
  year: string;
  text: string;
}

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  cn: {
    translation: translationCN,
  },
};

i18n.use(initReactI18next).init({ resources });

export const About = () => {
  const { t } = useTranslation();

  const studyData = t("studyData", { returnObjects: true }) as Array<TextData>;
  const achievementsData = t("achievementsData", {
    returnObjects: true,
  }) as Array<TextData>;

  return (
    <SC.Wrapper>
      <BioAbout />
      <Container>
        <SC.InfoWrapper>
          <SubTitle>{t("study")}</SubTitle>
          <Line />
          <SC.TextWrapper>
            {studyData.map((studyEl) => (
              <Text>
                <b>{studyEl.year}</b>
                &nbsp;-&nbsp; 
                {studyEl.text}
              </Text>
            ))}
          </SC.TextWrapper>
        </SC.InfoWrapper>

        <SC.InfoWrapper>
          <SubTitle>{t("achievements")}</SubTitle>
          <Line />
          <SC.TextWrapper>
            {achievementsData.map((achievementEl) => (
              <Text>
                <b>{achievementEl.year}</b>
                &nbsp;-&nbsp; 
                {achievementEl.text}
              </Text>
            ))}
          </SC.TextWrapper>
        </SC.InfoWrapper>
      </Container>
    </SC.Wrapper>
  );
};
