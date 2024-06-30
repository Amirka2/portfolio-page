import React from "react";

import { Mobile } from "./Mobile";
import { Desktop } from "./Desktop";
import * as SC from "./Header.styles";

export const Header = () => {
  return (
    <>
      <SC.MobileHeader>
        <Mobile />
      </SC.MobileHeader>
      <SC.DesktopHeader>
        <Desktop />
      </SC.DesktopHeader>
    </>
  );
};
