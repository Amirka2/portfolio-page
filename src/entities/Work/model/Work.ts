import type { LanguageType, PhotoRatioType } from '@shared/types';

export interface WorkDescription {
  language: LanguageType;
  description: string;
}

export interface WorkModel {
  id: number;
  name: string;
  position: PhotoRatioType;
  descriptions: WorkDescription[];
}
