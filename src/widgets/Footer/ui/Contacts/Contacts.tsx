import React from 'react';

import { TelegramIcon, WhatsappIcon } from '@shared/ui';

import * as SC from './Contacts.styles';

export const Contacts = () => {
    return (
      <SC.Contacts>
      <SC.Header>Контакты</SC.Header>
      <SC.ContactLink href="tel:89999999">8999999999</SC.ContactLink>
      <SC.ContactLink href="mailto:katerina@mail.ru">
        katerina@mail.ru
      </SC.ContactLink>
      <SC.ContactButton href="https://t.me/">
        <TelegramIcon />
      </SC.ContactButton>
      <SC.ContactButton href="/">
        <WhatsappIcon />
      </SC.ContactButton>
    </SC.Contacts>
    );
};