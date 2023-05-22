function lovefunc(flower1, flower2) {
  // check flower1 = even && flower2 = odd
  if (flower1 % 2 == 0 && flower2 % 2 !== 0) {
    return true; // they are in love
  } else if (flower1 % 2 != 0 && flower2 % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(lovefunc(1, 4)); // true
console.log(lovefunc(2, 2)); // false
console.log(lovefunc(0, 1)); // true
console.log(lovefunc(0, 0)); // false

//////////////////

function getAge(inputString) {
  let girlsAge = 0;
  let stringSplit = inputString.split(" ");
  return (girlsAge = parseInt(stringSplit[0]));
}

console.log(getAge("3 years old"));

//////////////////

function feast(beast, dish) {
  let beastSplit = beast.split("");
  beastFirstLetter = beastSplit.shift();
  let dishSplit = dish.split("");
  dishFirstLetter = dishSplit.shift();
  console.log(beastFirstLetter);
  console.log(dishFirstLetter);
  //
  beastLastLetter = beastSplit.pop();
  dishLastLetter = dishSplit.pop();
  console.log(beastLastLetter);
  console.log(beastLastLetter);
  //
  if (
    beastFirstLetter === dishFirstLetter &&
    beastLastLetter === dishLastLetter
  ) {
    return true;
  } else {
    return false;
  }
}

function feast2(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

console.log(feast("great blue heron", "garlic naan"));
console.log(feast2("great blue heron", "garlic naan"));

// console.log(feast("brown bear", "bear claw"));

// beast and dish should match, first letter of beast and first letter of dish && end letter of beast and dish
// if match return true else false
// both arguments passed are passed in the function as strings, therefore I need to split the strings into an array ("")
// then arg1[0] === arg2[0] => return true ? return false

/////////////////

const num = 5;
const numArray = [num];
console.log(numArray);
