import React from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { Color } from "@shared";
import { ArrowIcon, Container } from "@shared/ui";
import { LanguageSwitcher } from "@features/LanguageSwitcher";

import { Nav } from "./Nav";
import { Contacts } from "./Contacts";
import * as SC from "./Footer.styles";

i18n.use(initReactI18next).init({ });

export const Footer = () => {
  const { t } = useTranslation();

  const handleGoTopClick = () => {
    window.scroll(0, 0);
  };

  return (
    <SC.Footer>
      <Container>
        <SC.Wrapper>
          <SC.MainInfo>
            <SC.ContactsWrapper>
              <Contacts />
            </SC.ContactsWrapper>
            <SC.NavigationWrapper>
              <Nav />
            </SC.NavigationWrapper>
          </SC.MainInfo>
          <SC.SubInfo>
            <SC.Caption>
              © {t("Footer.name")} — {new Date().getFullYear()}
            </SC.Caption>
            <LanguageSwitcher color={Color.White} />
          </SC.SubInfo>
          <SC.GoTop onClick={handleGoTopClick}>
            <ArrowIcon />
          </SC.GoTop>
        </SC.Wrapper>
      </Container>
    </SC.Footer>
  );
};
