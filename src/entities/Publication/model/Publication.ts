import type { LanguageType, PhotoRatioType } from '@shared/types';

export interface PublicationDescription {
  language: LanguageType;
  description: string;
}

export interface PublicationModel {
  id: number;
  name: string;
  position: PhotoRatioType;
  descriptions: PublicationDescription[];
}
