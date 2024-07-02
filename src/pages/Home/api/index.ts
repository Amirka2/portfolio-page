import { useQuery } from "@tanstack/react-query";
import axios, { AxiosResponse } from "axios";

import { mapWorksToPhotos, Work } from "@entities/Work";
import { API_PATH } from "@shared";

const getRandomPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork`);

// TODO сменить ендпоинт, добавить главную фотку на бэк
const selectPhotos = ({ data }: AxiosResponse<Work[]>) =>
    mapWorksToPhotos(data).slice(0, 5);

export const useMainSliderPhotos = () => useQuery({
    queryKey: ['photos', 'random'],
    queryFn: getRandomPhotos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
})