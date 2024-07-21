import type { LanguageType, PhotoRatioType } from '@shared/types';

export interface EventDescription {
  language: LanguageType;
  description: string;
}

export interface EventModel {
  id: number;
  name: string;
  position: PhotoRatioType;
  descriptions: EventDescription[];
}
