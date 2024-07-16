import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Work } from "@entities/Work";
import { API_PATH } from "@shared";

import { selectPhotos } from "../../libs";

const SCENERY_ID = 3;

const getSceneryPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork/?category_id=${SCENERY_ID}`);

export const useSceneries = () => useQuery({
    queryKey: ['photos', 'scenery'],
    queryFn: getSceneryPhotos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
})