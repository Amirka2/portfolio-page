import React from "react";
import { useTranslation } from "react-i18next";

import img from "@static/images/main_photo.jpeg";
import { Container, Line, SubTitle, Text } from "@shared/ui";

import * as SC from "./BioAbout.styles";

export const BioAbout = () => {
  const { t } = useTranslation();
  const info = t("info", { returnObjects: true }) as Array<string>;

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
              {info.map((infoEl) => (
                <SC.TextListItem>
                  <Text>{infoEl}</Text>
                </SC.TextListItem>
              ))}
            </SC.TextList>
          </SC.TextWrapper>
        </SC.SideBlock>
      </SC.Wrapper>
    </Container>
  );
};
