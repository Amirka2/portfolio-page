import { useQuery } from '@tanstack/react-query';
import axios, { AxiosResponse } from 'axios';

import { API_PATH } from '@shared';

import { mapResponseToEvents as mapResponseToEvents } from '../libs';

import type{ EventResponse } from './types';

const EVENTS_ID = 7;

const getEvents = () => axios.get<EventResponse[]>(`${API_PATH}/artwork/?category_id=${EVENTS_ID}`);

export const useEvents = () => useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
});

export const selectPhotos = ({ data }: AxiosResponse<EventResponse[]>) => mapResponseToEvents(data);

export type { EventDescription, EventResponse } from './types';