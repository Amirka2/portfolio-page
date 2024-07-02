import { ASSET_PATH } from "@shared/constants";

export const getPhotoPath = (name: string) => {
  return `${ASSET_PATH}/${name}`;
};
