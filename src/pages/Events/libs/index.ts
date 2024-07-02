import { EventModel } from "@entities/Event";

import { EventResponse } from "../api";

type MapperType = (data: EventResponse[]) => EventModel[];

export const mapResponseToEvents: MapperType = (data) => data.map(events => events);