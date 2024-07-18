import { useEffect, useState } from 'react';

import { useWindowSize } from '@shared/hooks';

import { sortPhotos } from '@entities/Jobs';
import type { Work } from '@entities/Work';

type UsePhotoColumns = (data: { photos: Work[]; minWidth: number }) => Work[][][];

export const usePhotoColumns: UsePhotoColumns = ({ photos, minWidth }) => {
  const [width] = useWindowSize();
  const [sortedPhotos, setSortedPhotos] = useState(null);

  useEffect(() => {
    const columnsInit = Math.floor(width / minWidth);
    let sortedPhotosInit: Work[][] = [];

    if (columnsInit !== 0) {
      sortedPhotosInit = sortPhotos(photos, columnsInit);
    }

    setSortedPhotos(sortedPhotosInit);
  }, [width, minWidth, photos]);

  return [sortedPhotos];
};
