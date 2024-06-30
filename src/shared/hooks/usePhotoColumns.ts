import { useEffect, useState } from "react";

import { sortPhotos } from "@shared/libs";

import { useWindowSize } from "./useWindowSize";

export const usePhotoColumns = ({
  photos,
  minWidth,
}: {
  photos: string[];
  minWidth: number;
}) => {
  const [width] = useWindowSize();
  const [sortedPhotos, setSortedPhotos] = useState(null);
  
  const columnsInit = Math.floor(width / minWidth);
  let sortedPhotosInit: Array<string[]> = [];

  if (columnsInit !== 0) {
    sortedPhotosInit = sortPhotos(photos, columnsInit);
  }

  useEffect(() => {
    const columnsInit = Math.floor(width / minWidth);
    let sortedPhotosInit: Array<string[]> = [];
  
    if (columnsInit !== 0) {
      sortedPhotosInit = sortPhotos(photos, columnsInit);
    }
  
    setSortedPhotos(sortedPhotosInit);
  }, [width, minWidth, photos]);
  
  return [
    sortedPhotos
  ];
};
