import i18next from "i18next";

import type { LanguageType, Work } from "@entities/Work";

interface LooseObject {
  [key: string]: string;
}

interface Resources {
    ru: LooseObject;
    en: LooseObject;
}

export const setResources = (data: Resources, category: string) => {
  const resources = {
    ru: {
      [category]: data.ru,
    },
    en: {
      [category]: data.en,
    },
  };

  i18next.addResourceBundle('ru', 'translation', resources.ru, true, true);
  i18next.addResourceBundle('en', 'translation', resources.en, true, true);
};

const prepareWorkByLanguage = (works: Work[], language: LanguageType) => {
  const res: LooseObject = {};

  works.forEach((work) => {
    res[`${work.id}`] = work.descriptions.find(
      (d) => d.language == language
    ).description;
  });

  return res;
};

export const prepareWorksDescriptions = (works: Work[]) => {
  const ru = prepareWorkByLanguage(works, "RU");
  const en = prepareWorkByLanguage(works, "EN");

  return {
    ru,
    en
  };
};

export const sortPhotos = (photos: Work[], count: number = 3) => {
    // generating indexes array
    const keys = Array.from(Array(count).keys());
  
    const resultArrayStructure: Array<Work[]> = [];
  
    for (const el of keys) {
      resultArrayStructure.push([]);
    }
  
    return photos.reduce((acc, photo, curI) => {
      for (const i of keys) {
        if (curI % count === i) {
          acc[i].push(photo);
        }
      }
  
      return acc;
    }, resultArrayStructure);
  };