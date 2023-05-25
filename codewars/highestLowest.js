// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
// Highest and Lowest

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let sortedArray = numbers
    .trim()
    .split(" ")
    .sort((a, b) => a - b);
  let results = sortedArray.slice(1, -1);
  return results;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4")); // "42, -9"
