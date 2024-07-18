import translationCN from '@static/locales/cn/translation.json';
import translationEN from '@static/locales/en/translation.json';
import translationRU from '@static/locales/ru/translation.json';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import i18next from 'i18next';
import React from 'react';
import { I18nextProvider } from 'react-i18next';

import { Router } from './Router';
import { GlobalStyles } from './Styles';

const queryClient = new QueryClient();

const resources = {
  en: {
    translation: translationEN,
  },
  ru: {
    translation: translationRU,
  },
  cn: {
    translation: translationCN,
  },
};

i18next.init({
  lng: 'ru',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources,
});

export const App = () => (
  <I18nextProvider i18n={i18next}>
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
      <div id="modal-root" />
    </QueryClientProvider>
  </I18nextProvider>
);
