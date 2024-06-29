import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import { Router } from "./Router";
import { GlobalStyles } from "./Styles";

const queryClient = new QueryClient();

i18next.init({
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export const App = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Router />
        <div id="modal-root" />
      </QueryClientProvider>
    </I18nextProvider>
  );
};
