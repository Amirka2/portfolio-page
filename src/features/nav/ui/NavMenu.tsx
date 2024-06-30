import React from 'react';
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import {Paths} from "@shared";

import * as SC from './NavMenu.styles';

i18n.use(initReactI18next).init({ });

export const NavMenu = () => {
  const { t } = useTranslation();

  return (
    <SC.Container>
      <SC.Link to={Paths.Main}>
        {t("Header.main")}
      </SC.Link>
      <SC.Link to={Paths.About}>
      {t("Header.about")}
      </SC.Link>
      <SC.Link to={Paths.Jobs}>
      {t("Header.jobs")}
      </SC.Link>
      <SC.Link to={Paths.Publications}>
      {t("Header.publications")}
      </SC.Link>
      <SC.Link to={Paths.Events}>
      {t("Header.events")}
      </SC.Link>
      <SC.Link to={Paths.Contacts}>
      {t("Header.contacts")}
      </SC.Link>
    </SC.Container>
  );
};
