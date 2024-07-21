import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import { API_PATH } from '@shared';

import { Work } from '@entities/Work';

const getSliderPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork/carousel/`);

const selectPhotos = ({ data }: AxiosResponse<Work[]>) => data;

export const useMainSliderPhotos = () => useQuery({
  queryKey: ['photos', 'main-slider'],
  queryFn: getSliderPhotos,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  select: selectPhotos,
});
