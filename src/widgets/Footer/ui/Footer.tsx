import React from "react";

import { Color } from "@shared";
import { ArrowIcon, Container } from "@shared/ui";
import { LanguageSwitcher } from "@features/LanguageSwitcher";

import { Nav } from "./Nav";
import { Contacts } from "./Contacts";
import * as SC from "./Footer.styles";

export const Footer = () => {
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
              © Ekaterina Dorokhova — {new Date().getFullYear()}
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
