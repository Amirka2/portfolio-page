import type { LanguageType, LooseObject, Resources } from '@shared/types';

import type { PublicationModel } from '../model';

const preparePublicationByLanguage = (
  publications: PublicationModel[],
  language: LanguageType,
) => {
  const res: LooseObject = {};

  publications.forEach((publication) => {
    res[`${publication.id}`] = publication.descriptions.find(
      (d) => d.language === language,
    ).description;
  });

  return res;
};

export const preparePublicationsDescriptions = (publications: PublicationModel[]): Resources => {
  const ru = preparePublicationByLanguage(publications, 'RU');
  const en = preparePublicationByLanguage(publications, 'EN');

  return {
    ru,
    en,
  };
};
