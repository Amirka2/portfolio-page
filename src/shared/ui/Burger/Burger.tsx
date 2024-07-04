import React, { ReactNode, useEffect, useState } from "react";

// importing css class for disabling scroll
import "./styles.css";
import * as SC from "./Burger.styles";
import { BurgerIcon, CrossIcon } from "../Icons";
import { LanguageSwitcher } from "@features/LanguageSwitcher";
import { createPortal } from "react-dom";

interface BurgerProps {
  children: ReactNode;
}

const BurgerMenu = ({ children }: BurgerProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("stop-scrolling");
    } else {
      document.body.classList.remove("stop-scrolling");
    }
  }, [isOpen]);

  return (
    <>
      <SC.Button onClick={handleClick}>
        <BurgerIcon />
      </SC.Button>
      {createPortal(
        <SC.Wrapper isOpen={isOpen}>
          <SC.CrossButton onClick={handleClick}>
            <CrossIcon />
          </SC.CrossButton>
          <SC.Links onClick={handleClick}>{children}</SC.Links>
          <SC.SwitcherWrapper>
            <LanguageSwitcher />
          </SC.SwitcherWrapper>
        </SC.Wrapper>,
        document.body
      )}
    </>
  );
};

export const Burger = Object.assign(BurgerMenu, {
  Link: SC.Link,
});
