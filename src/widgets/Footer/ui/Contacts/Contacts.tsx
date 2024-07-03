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
          <SC.ContactLink
            href="tel:+7(921)39-79-888
"
          >
            +7(921)39-79-888
          </SC.ContactLink>
          <SC.ContactLink
            href="mailto:katerinadorohova@mail.ru
"
          >
            katerinadorohova@mail.ru
          </SC.ContactLink>
        </SC.TextLinks>
        <SC.SocialLinks>
          <SC.ContactButton
            href="https://t.me/+7(921)39-79-888
"
          >
            <TelegramIcon />
          </SC.ContactButton>
          <SC.ContactButton href="https://wa.me/+7(921)39-79-888">
            <WhatsappIcon />
          </SC.ContactButton>
        </SC.SocialLinks>
      </SC.Content>
    </SC.Contacts>
  );
};
