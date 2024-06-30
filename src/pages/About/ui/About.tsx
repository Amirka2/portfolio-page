import React from "react";

import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { BioAbout } from "@entities/Bio";
import { Container, Line, SubTitle, Text } from "@shared/ui";

import * as SC from "./About.styles";

interface TextData {
  year: string;
  text: string;
}

i18n.use(initReactI18next).init({ });

export const About = () => {
  const { t } = useTranslation();

  const studyData = t("About.studyData", { returnObjects: true }) as Array<TextData>;
  const achievementsData = t("About.achievementsData", {
    returnObjects: true,
  }) as Array<TextData>;

  return (
    <SC.Wrapper>
      <BioAbout />
      <Container>
        <SC.InfoWrapper>
          <SubTitle>{t("About.study")}</SubTitle>
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
          <SubTitle>{t("About.achievements")}</SubTitle>
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
