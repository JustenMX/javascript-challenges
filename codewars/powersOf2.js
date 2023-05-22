// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
// Powers of 2

function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    const powers = Math.pow(2, i);
    result.push(powers);
  }
  return result;
}

console.log(powersOfTwo(5));
