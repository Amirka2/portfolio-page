import { WorkModel } from "../model";

export const mapWorksToPhotos = (works: WorkModel[]) => works.map(work => work.name);