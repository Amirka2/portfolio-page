export type LanguageType = "EN" | "RU";

export type PhotoRatioType = "VERTICAL" | "HORIZONTAL" | "SQUARE";

export interface LooseObject {
  [key: string]: string;
}

export interface Resources {
  ru: LooseObject;
  en: LooseObject;
}
