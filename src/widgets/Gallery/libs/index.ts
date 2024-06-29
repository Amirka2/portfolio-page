import { SortedPhotos } from "../types";

export const sortPhotos = (photos: Array<string>) =>
  photos.reduce<SortedPhotos>(
    (acc, photo, curI) => {
      if (curI % 3 === 0) {
        acc.first.push(photo);
      } else if (curI % 3 === 1) {
        acc.second.push(photo);
      } else if (curI % 3 === 2) {
        acc.third.push(photo);
      }

      return acc;
    },
    {
      first: [],
      second: [],
      third: [],
    }
  );
