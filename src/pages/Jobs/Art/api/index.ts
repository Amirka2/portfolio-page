import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { Work } from "@entities/Work";
import { API_PATH } from "@shared";

import { selectPhotos } from '../../libs';

const ART_ID = 1;

const getArtWorkPhotos = () => axios.get<Work[]>(`${API_PATH}/artwork?category_id=${ART_ID}`);

export const useArtWorks = () => useQuery({
    queryKey: ['photos', 'art-work'],
    queryFn: getArtWorkPhotos,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    select: selectPhotos
})