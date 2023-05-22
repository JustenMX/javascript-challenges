// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// If you can't sleep, just count sheep!!

const countSheep = (num) => {
  let murmur = "";
  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }
  return murmur;
};

console.log(countSheep(5));
