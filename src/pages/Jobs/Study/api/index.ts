import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { API_PATH } from "@shared";
import { Work } from "@entities/Work";

import { selectPhotos } from "../../libs";

const STUDY_WORK_ID = 5;

const getStudyWorkPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork/?category_id=${STUDY_WORK_ID}`);

export const useStudyWorks = () => useQuery({
    queryKey: ['photos', 'scenery'],
    queryFn: getStudyWorkPhotos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
})