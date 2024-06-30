import React from "react";

import { Paths } from "@shared";
import { Burger, Container } from "@shared/ui";
import { useTranslation } from "@shared/hooks";

import * as SC from "./Mobile.styles";

export const Mobile = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SC.Header>
        <SC.Wrapper>
          <SC.MainText>{t("Header.name")}</SC.MainText>
          <Burger>
            <Burger.Link to={Paths.Main}>{t("Header.main")}</Burger.Link>
            <Burger.Link to={Paths.About}>{t("Header.about")}</Burger.Link>
            <Burger.Link to={Paths.JobsScenery}>{t("Header.jobsSceneries")}</Burger.Link>
            <Burger.Link to={Paths.JobsStillLife}>{t("Header.jobsStillLifes")}</Burger.Link>
            <Burger.Link to={Paths.JobsArt}>{t("Header.jobsArtWorks")}</Burger.Link>
            <Burger.Link to={Paths.JobsStudy}>{t("Header.jobsStudyWorks")}</Burger.Link>
            <Burger.Link to={Paths.JobsGraphics}>{t("Header.jobsGraphics")}</Burger.Link>
            <Burger.Link to={Paths.Publications}>
              {t("Header.publications")}
            </Burger.Link>
            <Burger.Link to={Paths.Events}>{t("Header.events")}</Burger.Link>
            <Burger.Link to={Paths.Contacts}>
              {t("Header.contacts")}
            </Burger.Link>
          </Burger>
        </SC.Wrapper>
      </SC.Header>
    </Container>
  );
};
