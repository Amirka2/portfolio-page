import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Work } from "@entities/Work";
import { API_PATH } from "@shared";

import { selectPhotos } from "../../libs";

const STILL_LIFE_ID = 2;

const getStillLifePhotos = () => axios.get<Work[]>(`${API_PATH}/artwork/?category_id=${STILL_LIFE_ID}`);

export const useStillLifes = () => useQuery({
    queryKey: ['photos', 'still-life'],
    queryFn: getStillLifePhotos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
})