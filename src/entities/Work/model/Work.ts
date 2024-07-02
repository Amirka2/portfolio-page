export type PhotoRatioType = "VERTICAL" | "HORIZONTAL" | "SQUARE";
export type LanguageType = "EN" | "RU";

export interface Description {
  language: LanguageType;
  description: string;
}

export interface Work {
  id: number;
  name: string;
  position: PhotoRatioType;
  descriptions: Description[];
}
