// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  if (arr[0] > arr[1]) {
    arr.sort((a, b) => a - b);
  }
  let rangeSum = 0;
  for (let i = arr[0]; i <= arr[1]; i++) {
    rangeSum += i;
  }
  return rangeSum;
}

console.log(sumAll([1, 4]));
