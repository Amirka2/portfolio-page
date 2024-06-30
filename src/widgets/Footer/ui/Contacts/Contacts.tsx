import React from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

import { TelegramIcon, WhatsappIcon } from "@shared/ui";

import * as SC from "./Contacts.styles";

i18n.use(initReactI18next).init({ });

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <SC.Contacts>
      <SC.Header>{t("Footer.contacts")}</SC.Header>
      <SC.Content>
        <SC.TextLinks>
          <SC.ContactLink href="tel:89999999">8999999999</SC.ContactLink>
          <SC.ContactLink href="mailto:katerina@mail.ru">
            katerina@mail.ru
          </SC.ContactLink>
        </SC.TextLinks>
        <SC.SocialLinks>
          <SC.ContactButton href="https://t.me/">
            <TelegramIcon />
          </SC.ContactButton>
          <SC.ContactButton href="/">
            <WhatsappIcon />
          </SC.ContactButton>
        </SC.SocialLinks>
      </SC.Content>
    </SC.Contacts>
  );
};
