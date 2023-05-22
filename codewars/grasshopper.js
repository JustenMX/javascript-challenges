// https://www.codewars.com/kata/55cbc3586671f6aa070000fb/train/javascript

// Grasshopper

function checkForFactor(base, factor) {
  if (base % factor === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(checkForFactor(10, 2));
console.log(checkForFactor(9, 2));
console.log(checkForFactor(24617, 3));
