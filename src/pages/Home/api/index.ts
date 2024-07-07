import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import { Work } from "@entities/Work";
import { API_PATH } from "@shared";

const getRandomPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork`);

// TODO сменить фото, когда будут выбраны
const selectPhotos = ({ data }: AxiosResponse<Work[]>) =>
    data.slice(1, 5);

export const useMainSliderPhotos = () => useQuery({
    queryKey: ['photos', 'random'],
    queryFn: getRandomPhotos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
})