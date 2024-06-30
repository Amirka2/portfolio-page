
export const sortPhotos = (photos: Array<string>, count: number = 3) => {
    // generating indexes array
    const keys = Array.from(Array(count).keys());
  
    const resultArrayStructure: Array<string[]> = [];
  
    for (const el of keys) {
      resultArrayStructure.push([])
    }
  
    return photos.reduce(
      (acc, photo, curI) => {
        for (const i of keys) {
          if (curI % count === i) {
            acc[i].push(photo)
          }
        }
  
        return acc;
      },
      resultArrayStructure
    );
  }
  