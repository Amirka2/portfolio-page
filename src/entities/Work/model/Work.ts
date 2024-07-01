export type PhotoType = "VERTICAL" | "HORIZONTAL" | "SQUARE";
export type LanguageType = "EN" | "RU";

export interface DescriptionModel {
  language: LanguageType;
  description: string;
}

export interface Work {
  id: number;
  name: string;
  position: PhotoType;
  descriptions: DescriptionModel[];
}
