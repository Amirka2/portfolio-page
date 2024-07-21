import { EventModel } from '@entities/Event';

import type { EventResponse } from '../api';

type MapperType = (data: EventResponse[]) => EventModel[];

export const mapResponseToEvents: MapperType = (data) => data.map((events) => events);
