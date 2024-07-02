import { Work } from "../model";

export const mapWorksToPhotos = (works: Work[]) => works.map(work => work.name);