import { PublicationModel } from "@entities/Publication"

import { PublicationResponse } from "../api";

type MapperType = (data: PublicationResponse[]) => PublicationModel[];

export const mapResponseToPublication: MapperType = (data) => data.map(publication => publication);