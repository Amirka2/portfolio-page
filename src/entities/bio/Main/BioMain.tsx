import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import img from "@static/images/main_photo.jpeg";
import { Color, Paths } from "@shared";
import { Button, Container, Line, SubTitle, Text } from "@shared/ui";

import * as SC from "./BioMain.styles";


i18n.use(initReactI18next).init({ });

export const BioMain = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SC.Wrapper>
        <SC.SideBlock>
          <SubTitle>{t("Main.name")}</SubTitle>
          <SC.TextsList>
            <Text>
              {t("Main.info.0")}
            </Text>
            <Line />
            <Text>
              {t("Main.info.1")}
            </Text>
            <Line />
            <Text>
              {t("Main.info.2")}
            </Text>
            <Link to={Paths.About}>
              <Button size="M" color={Color.Haki}>
                {t("Main.about")}
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
