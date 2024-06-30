import React from "react";

import { TelegramIcon, WhatsappIcon } from "@shared/ui";
import { useTranslation } from "@shared/hooks";

import * as SC from "./Contacts.styles";

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
