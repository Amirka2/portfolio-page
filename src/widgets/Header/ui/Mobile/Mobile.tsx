import React from "react";
import { useLocation } from "react-router-dom";

import { Paths } from "@shared";
import { Burger, Container } from "@shared/ui";
import { useTranslation } from "@shared/hooks";

import * as SC from "./Mobile.styles";

export const Mobile = () => {
  const { t } = useTranslation();
  const { pathname } = useLocation();

  return (
    <Container>
      <SC.Header>
        <SC.Wrapper>
          <SC.MainText>{t("Header.name")}</SC.MainText>
          <Burger>
            <Burger.Link to={Paths.Main} isActive={Paths.Main === pathname}>
              {t("Header.main")}
            </Burger.Link>
            <Burger.Link to={Paths.About} isActive={Paths.About === pathname}>
              {t("Header.about")}
            </Burger.Link>
            <Burger.Link
              to={Paths.JobsScenery}
              isActive={Paths.JobsScenery === pathname}
            >
              {t("Header.jobsSceneries")}
            </Burger.Link>
            <Burger.Link
              to={Paths.JobsStillLife}
              isActive={Paths.JobsStillLife === pathname}
            >
              {t("Header.jobsStillLifes")}
            </Burger.Link>
            <Burger.Link
              to={Paths.JobsArt}
              isActive={Paths.JobsArt === pathname}
            >
              {t("Header.jobsArtWorks")}
            </Burger.Link>
            <Burger.Link
              to={Paths.JobsStudy}
              isActive={Paths.JobsStudy === pathname}
            >
              {t("Header.jobsStudyWorks")}
            </Burger.Link>
            <Burger.Link
              to={Paths.JobsGraphics}
              isActive={Paths.JobsGraphics === pathname}
            >
              {t("Header.jobsGraphics")}
            </Burger.Link>
            <Burger.Link
              to={Paths.Publications}
              isActive={Paths.Publications === pathname}
            >
              {t("Header.publications")}
            </Burger.Link>
            <Burger.Link to={Paths.Events} isActive={Paths.Events === pathname}>
              {t("Header.events")}
            </Burger.Link>
            <Burger.Link
              to={Paths.Contacts}
              isActive={Paths.Contacts === pathname}
            >
              {t("Header.contacts")}
            </Burger.Link>
          </Burger>
        </SC.Wrapper>
      </SC.Header>
    </Container>
  );
};
