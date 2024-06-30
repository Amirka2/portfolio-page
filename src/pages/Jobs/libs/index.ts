export const generateArray = (array: any[], capacity: number) => {
    let i = 0;
    const res = [];
  
    while (i < capacity) {
      const rnd = Math.random();
      const index = Math.floor(rnd * array.length);
  
      res.push(array[index]);
  
      i++;
    }
  
    return res;
  };