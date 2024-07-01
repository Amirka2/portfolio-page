import { Work } from "@entities/Work";
import { AxiosResponse } from "axios";

export const generateArray = (array: any[], capacity: number) => {
  let i = 0;
  const res = [];

  while (i < capacity) {
    const rnd = Math.random();
    const index = Math.floor(rnd * array.length);

    res.push(array[index]);

    i++;
  }

  return res;
};

export const selectPhotos = ({ data }: AxiosResponse<Work[]>) => data;
