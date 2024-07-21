import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

import { API_PATH } from '@shared';

import { Work } from '@entities/Work';

import { selectPhotos } from '../../libs';

const GRAPHICS_ID = 4;

const getGraphicsPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork/?category_id=${GRAPHICS_ID}`);

export const useGraphics = () => useQuery({
  queryKey: ['photos', 'graphics'],
  queryFn: getGraphicsPhotos,
  refetchOnMount: false,
  refetchOnWindowFocus: false,
  select: selectPhotos,
});
