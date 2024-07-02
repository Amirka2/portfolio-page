import i18next from "i18next";

import type { Resources } from "@shared/types";

export const setResources = (data: Resources, key: string) => {
  const resources = {
    ru: {
      [key]: data.ru,
    },
    en: {
      [key]: data.en,
    },
  };

  i18next.addResourceBundle("ru", "translation", resources.ru, true, true);
  i18next.addResourceBundle("en", "translation", resources.en, true, true);
};
