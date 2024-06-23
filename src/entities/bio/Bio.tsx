import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import img from "@static/images/main_background.png";
import { Color, Paths } from "@shared";
import { Button, Container, Line, SubTitle, Text } from "@shared/ui";

import translationEN from "./locales/en/translation.json";
import translationRU from "./locales/ru/translation.json";

import * as SC from "./Bio.styles";

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
};

i18n.use(initReactI18next).init({ resources });

export const Bio = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SC.Wrapper>
        <SC.SideBlock>
          <SubTitle>{t("name")}</SubTitle>
          <SC.TextsList>
            <Text>
              {t("info.0")}
            </Text>
            <Line />
            <Text>
              {t("info.1")}
            </Text>
            <Line />
            <Text>
              {t("info.2")}
            </Text>
            <Link to={Paths.About}>
              <Button size="M" color={Color.Haki}>
                {t("about")}
              </Button>
            </Link>
          </SC.TextsList>
        </SC.SideBlock>
        <SC.SideBlock>
          <SC.Image src={img} alt="portrait" title="portrait" />
        </SC.SideBlock>
      </SC.Wrapper>
    </Container>
  );
};
