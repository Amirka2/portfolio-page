import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import { API_PATH } from "@shared";
import { mapWorksToPhotos, Work } from "@entities/Work";

const SCENERY_ID = 4;

const getSceneryPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork?category_id=${SCENERY_ID}`);

const selectPhotos = ({ data }: AxiosResponse<Work[]>) => mapWorksToPhotos(data);

export const useSceneries = () => useQuery({
    queryKey: ['photos', 'scenery'],
    queryFn: getSceneryPhotos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
})