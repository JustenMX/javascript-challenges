// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/javascript

// Fake Binary

function fakeBin(x) {
  const result = x
    .split("")
    .map((num) => (parseInt(num) < 5 ? "0" : "1"))
    .join("");
  return result;
}

console.log(fakeBin("123456789"));
