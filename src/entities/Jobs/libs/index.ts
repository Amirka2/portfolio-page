import type { LanguageType, LooseObject } from '@shared/types';

import type { Work } from '@entities/Work';

const prepareWorkByLanguage = (works: Work[], language: LanguageType) => {
  type NewType = LooseObject;

  const res: NewType = {};

  works.forEach((work) => {
    res[`${work.id}`] = work.descriptions.find(
      (d) => d.language === language,
    )?.description ?? '';
  });

  return res;
};

export const prepareWorksDescriptions = (works: Work[]) => {
  const ru = prepareWorkByLanguage(works, 'RU');
  const en = prepareWorkByLanguage(works, 'EN');

  return {
    ru,
    en,
  };
};

export const sortPhotos = (photos: Work[], count: number = 3) => {
  // generating indexes array
  const keys = Array.from(Array(count).keys());

  const resultArrayStructure: Work[][] = [];

  for (const _ of keys) {
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
