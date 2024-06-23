import React, { useState } from "react";

import { Paths } from "@shared";

import * as SC from "./NavMenu.styles";
import { BurgerButton } from "./BurgerButton";
import { log } from "console";

interface LinksListProps {
  isOpen?: boolean;
}

const LinksList = ({ isOpen = true }: LinksListProps) => {
  return (
    <SC.Container isOpen={isOpen}>
      <SC.Link to={Paths.Main}>Главная</SC.Link>
      <SC.Link to={Paths.About}>Об авторе</SC.Link>
      <SC.Link to={Paths.Jobs}>Работы</SC.Link>
      <SC.Link to={Paths.Publications}>Публикации</SC.Link>
      <SC.Link to={Paths.Events}>События</SC.Link>
      <SC.Link to={Paths.Contacts}>Контакты</SC.Link>
    </SC.Container>
  );
};

export const NavMenu = () => {
  const [open, setOpen] = useState(false);

  console.log(open);

  return (
    <>
      <SC.MobileMenu>
        <BurgerButton open={open} setOpen={() => setOpen((prev) => !prev)} />
        <SC.MobileMenuContainer>
          <LinksList isOpen={open} />
        </SC.MobileMenuContainer>
      </SC.MobileMenu>
      <SC.DesktopMenu>
        <LinksList />
      </SC.DesktopMenu>
    </>
  );
};
