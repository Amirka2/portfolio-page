import type { LanguageType, LooseObject, Resources } from "@shared/types";

import type { EventModel } from "../model";

const prepareEventByLanguage = (
  publications: EventModel[],
  language: LanguageType
) => {
  const res: LooseObject = {};

  publications.forEach((publication) => {
    res[`${publication.id}`] = publication.descriptions.find(
      (d) => d.language == language
    ).description;
  });

  return res;
};

export const prepareEventsDescriptions = (publications: EventModel[]): Resources => {
  const ru = prepareEventByLanguage(publications, "RU");
  const en = prepareEventByLanguage(publications, "EN");

  return {
    ru,
    en,
  };
};
