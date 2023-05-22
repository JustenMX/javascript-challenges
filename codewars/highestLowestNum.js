// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/javascript

// Sum without highest and lowest number

function sumArrayx(array) {
  array.sort((a, b) => a - b);
  let sliceArray = array.slice(1, -1);
  let totalSum = array.reduce((a, b) => a + b);

  console.log(sliceArray);
  console.log(totalSum);
}

function sumArray(array) {
  if ((array = null && array.length <= 1)) {
    return 0;
  } else {
    let sortedArray = array.sort((a, b) => a - b);
    let sliceArray = sortedArray.slice(1, -1);
    let totalSum = sliceArray.reduce((a, b) => a + b);
    return totalSum;
  }
}

console.log(sumArray([6, 2, 1, 8, 10]));
