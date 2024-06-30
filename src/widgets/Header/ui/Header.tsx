import React from "react";

import { Desktop } from "./Desktop";
import * as SC from "./Header.styles";

export const Header = () => {
  return (
    <>
      <SC.DesktopHeader>
        <Desktop />
      </SC.DesktopHeader>
    </>
  );
};
