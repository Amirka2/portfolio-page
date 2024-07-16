import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import { API_PATH } from '@shared';

import { PublicationResponse } from './types';
import { mapResponseToPublication } from '../libs';

const PUBLICATIONS_ID = 6;

const getPublications = () => axios.get<PublicationResponse[]>(`${API_PATH}/artwork/?category_id=${PUBLICATIONS_ID}`);

export const usePublications = () => useQuery({
    queryKey: ['publications'],
    queryFn: getPublications,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
});

export const selectPhotos = ({ data }: AxiosResponse<PublicationResponse[]>) => mapResponseToPublication(data);

export type { PublicationDescription, PublicationResponse } from './types';