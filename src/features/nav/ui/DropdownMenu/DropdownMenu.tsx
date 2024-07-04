import React, { useRef } from "react";

import { Paths } from "@shared";
import { useTranslation } from "@shared/hooks";
import { Dropdown, MiniArrowIcon } from "@shared/ui";

import * as SC from "./DropdownMenu.styles";
import { MiniArrow } from "@shared/ui/Icons/MiniArrow";

export const DropdownMenu = () => {
  const { t } = useTranslation();

  return (
    <Dropdown>
      <Dropdown.Trigger>
        {({ triggerRef, onClick, close, isOpen }) => (
          <SC.Trigger
            onClick={(args) => {
              if (isOpen) {
                close();
              } else {
                onClick(args);
              }
            }}
            ref={triggerRef}
          >
            {t("Header.jobs")}
            <MiniArrowIcon direction="bottom"/>
          </SC.Trigger>
        )}
      </Dropdown.Trigger>
      <Dropdown.Menu>
        {({ position, portalRef, close, triggerRef }) => (
          <SC.Menu
            style={{ maxWidth: triggerRef.current.offsetWidth, ...position }}
            onClick={close}
            ref={portalRef}
          >
            <SC.LinkElement to={Paths.JobsScenery}>
              {t("Header.jobsSceneries")}
            </SC.LinkElement>
            <SC.LinkElement to={Paths.JobsStillLife}>
              {t("Header.jobsStillLifes")}
            </SC.LinkElement>
            <SC.LinkElement to={Paths.JobsArt}>
              {t("Header.jobsArtWorks")}
            </SC.LinkElement>
            <SC.LinkElement to={Paths.JobsStudy}>
              {t("Header.jobsStudyWorks")}
            </SC.LinkElement>
            <SC.LinkElement to={Paths.JobsGraphics}>
              {t("Header.jobsGraphics")}
            </SC.LinkElement>
          </SC.Menu>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};
