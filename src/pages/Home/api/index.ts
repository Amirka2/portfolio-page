import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import { Work } from "@entities/Work";
import { API_PATH } from "@shared";

const getRandomPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork/carousel`);

// TODO сменить фото, когда будут выбраны
const selectPhotos = ({ data }: AxiosResponse<Work[]>) => data;

export const useMainSliderPhotos = () => useQuery({
    queryKey: ['photos', 'main-slider'],
    queryFn: getRandomPhotos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
})