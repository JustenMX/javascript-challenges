const plants = ["broccoli", "cauliflower", "cabbage", "kale", "tomato"];

// pop()
plants.pop();
console.log(plants);

// push() adds to the last element of an array
plants.push("tomato");
console.log(plants);

// shift() removes the first element of an array
plants.shift();
console.log(plants);

// unshift() adds elements to the front of an array
plants.unshift("broccoli");
console.log(plants);

// slice()
console.log(plants.slice(1, 3));

//reduce()
const sumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let initialValue = 0;
// const sum = sumArr.reduce((total, amount) => total + amount);

const sum = sumArr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(sum);
