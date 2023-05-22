//? reverse a string

function reverseString(str) {
  const strArray = str.split("");
  strArray.reverse();
  str = strArray.join("");
  return str;
}

console.log(reverseString("hello"));
// reverseString("hello")

//? Factorialize a Number

function factorialize(num) {
  if (num === 0) {
    return 1;
  } else {
    return num * factorialize(num - 1);
  }
}

console.log(factorialize(5));

// program to count down numbers to 1
function countDown(number) {
  // display the number
  console.log(number);

  // decrease the number value
  const newNumber = number - 1;

  // base case
  if (newNumber > 0) {
    countDown(newNumber);
  }
}

countDown(4);
