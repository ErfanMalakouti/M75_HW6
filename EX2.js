let addStar = (array) => {
  let newArr = [];
  array.forEach((item, index) => {
    newArr.push(item * (index + 1));
  });
  console.log(newArr);
  let average =
    newArr.reduce((accumulator, currentValue) => accumulator + currentValue) /
    array.reduce((accumulator, currentValue) => accumulator + currentValue);
  console.log(average);
  return `[${average.toFixed(2)}] ` + "*".repeat(Math.round(average));
};
//Test:
console.log(addStar([55, 67, 98, 115, 61]));
//[3.15]***
