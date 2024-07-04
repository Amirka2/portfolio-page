import React from "react";

import { Paths } from "@shared";
import { useTranslation } from "@shared/hooks";

import { DropdownMenu } from "./DropdownMenu";
import * as SC from "./NavMenu.styles";

export const NavMenu = () => {
  const { t } = useTranslation();

  return (
    <SC.Container>
      <SC.Link to={Paths.Main}>{t("Header.main")}</SC.Link>
      <SC.Link to={Paths.About}>{t("Header.about")}</SC.Link>
      <DropdownMenu />
      <SC.Link to={Paths.Publications}>{t("Header.publications")}</SC.Link>
      <SC.Link to={Paths.Events}>{t("Header.events")}</SC.Link>
      <SC.Link to={Paths.Contacts}>{t("Header.contacts")}</SC.Link>
    </SC.Container>
  );
};
