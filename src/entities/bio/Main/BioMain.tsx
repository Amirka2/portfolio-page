import React from "react";
import { Link } from "react-router-dom";

import img from "@static/images/main_photo.jpeg";
import { Color, Paths } from "@shared";
import { Button, Container, Line, SubTitle, Text } from "@shared/ui";
import { useTranslation } from "@shared/hooks";

import * as SC from "./BioMain.styles";

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
