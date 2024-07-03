import React from "react";

import img from "@static/images/graphics.jpeg";

import { Color } from "@shared";
import { Container, Line, SubTitle } from "@shared/ui";
import { useTranslation } from "@shared/hooks";

import * as SC from "./Contacts.styles";

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <SC.Wrapper>
        <SC.Main>
          <SC.Image src={img} alt="contacts image" />
          <SC.Info>
            <SubTitle>{t("Contacts.name")}</SubTitle>
            <Line />
            <strong>{t("Contacts.caption")}</strong>
            <SC.Text>
              {t("Contacts.phone")}:&nbsp;
              <SC.Link
                href="tel:+7(921)39-79-888"
              >
                +7(921)39-79-888
              </SC.Link>
            </SC.Text>
            <SC.Text>
              {t("Contacts.email")}:&nbsp;
              <SC.Link href="mailto:katerinadorohova@mail.ru">
                katerinadorohova@mail.ru
              </SC.Link>
            </SC.Text>
            <SC.SocialLinks>
              <SC.ContactButton
                href="https://t.me/+7(921)39-79-888"
              >
                <SC.Telegram color={Color.Black} />
              </SC.ContactButton>
              <SC.ContactButton href="https://wa.me/+7(921)39-79-888">
                <SC.Whatsapp color={Color.Black} />
              </SC.ContactButton>
            </SC.SocialLinks>
          </SC.Info>
        </SC.Main>
      </SC.Wrapper>
    </Container>
  );
};
