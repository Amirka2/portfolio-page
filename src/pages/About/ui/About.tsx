import React from "react";

import { BioAbout } from "@entities/Bio";
import { Container, Line, SubTitle, Text } from "@shared/ui";
import { useTranslation } from "@shared/hooks";

import * as SC from "./About.styles";

interface TextData {
  year: string;
  text: string;
}

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
