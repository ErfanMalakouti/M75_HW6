let squaredMatrix = (array) => {
  array.forEach((item) => {
    if (array.length < item.length) {
      let equalizer = [];
      while (equalizer.length < item.length) {
        equalizer.push(0);
      }
      while (array.length < item.length) {
        array.push(equalizer);
      }
    }
  });
  array.forEach((item) => {
    if (array.length > item.length) {
      while (array.length > item.length) {
        item.push(0);
      }
    }
  });
  return array;
};
//Test:
console.log(squaredMatrix([[1, 2]]));
//[[1,2],[0,0]]
console.log(squaredMatrix([[1, 2], [3], [4, 5, 6, 7]]));
//[[1,2,0,0],[3,0,0,0],[4,5,6,7],[0,0,0,0]]
