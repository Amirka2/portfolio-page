import React from "react";

import img from "@static/images/graphics.jpeg";
import { Color } from "@shared";
import {
  Container,
  Line,
  SubTitle,
  TelegramIcon,
  WhatsappIcon,
} from "@shared/ui";
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
              <SC.Link href="tel:899999999">+7(921) 39-79-888</SC.Link>
            </SC.Text>
            <SC.Text>
              {t("Contacts.email")}:&nbsp;
              <SC.Link href="mailto:ketrina@mail.ru">ketrina@mail.ru</SC.Link>
            </SC.Text>
            <SC.SocialLinks>
              <SC.ContactButton href="https://t.me/">
                <TelegramIcon color={Color.Black} width={34} height={28} />
              </SC.ContactButton>
              <SC.ContactButton href="/">
                <WhatsappIcon color={Color.Black} width={30} height={28} />
              </SC.ContactButton>
            </SC.SocialLinks>
          </SC.Info>
        </SC.Main>
      </SC.Wrapper>
    </Container>
  );
};
