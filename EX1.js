let accumulatingArray = (array) => {
  let result = [];
  let tempArray = [...array];
  while (result.length < array.length) {
    result.unshift(
      tempArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
      )
    );
    tempArray.pop();
  }
  return result;
};
//Test
console.log(accumulatingArray([1, 2, 3, 4]));
//[1,3,6,10]

////////////////////////////////////////////////////////////////
let accumulatingArray2 = (array) => {
  let result = [];
  result.push(array[0]);
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i] + array[i - 1];
    array[i - 1] = temp;
    array[i] = array[i - 1];
    result.push(temp);
  }
  return result;
};
console.log(accumulatingArray2([1, 2, 3, 4]));
//[1,3,6,10]