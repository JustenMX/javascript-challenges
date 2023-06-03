// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

// If you can't sleep, just count sheep!!

const countSheep = (num) => {
  let murmur = "";
  for (let i = 1; i <= num; i++) {
    murmur += `${i} sheep...`;
  }
  return murmur;
};

console.log(countSheep(5)); //1 sheep...2 sheep...3 sheep...4 sheep...5 sheep...
