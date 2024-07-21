import { PublicationModel } from '@entities/Publication';

import type { PublicationResponse } from '../api';

type MapperType = (data: PublicationResponse[]) => PublicationModel[];

export const mapRespToPublication: MapperType = (data) => data.map((publication) => publication);
