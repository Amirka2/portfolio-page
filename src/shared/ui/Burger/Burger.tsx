import React, { ReactNode, useEffect, useState } from "react";

// importing css class for disabling scroll
import "./styles.css";
import * as SC from "./Burger.styles";
import { BurgerIcon } from "../Icons";

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
      {isOpen && (
        <SC.Wrapper>
          <SC.Links>{children}</SC.Links>
        </SC.Wrapper>
      )}
    </>
  );
};

export const Burger = Object.assign(BurgerMenu, {
  Link: SC.Link,
});
