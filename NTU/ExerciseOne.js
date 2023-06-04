// 1. Create a function that determines if a number is odd or even
//     ex. checkOddEven(8) -> Even
//     ex2. checkOddEven(99) -> Odd

const checkOddEven = (n) => {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(checkOddEven(8)); // even
console.log(checkOddEven(99)); // odd

// 2. Create a function that gets a number and checks if it is divisible by 3 or 5 or both
//     ex. checkDiv(9) -> divisible by 3
//     ex2. checkDiv(10) -> divisible by 5
//     ex3. checkDiv(15) -> divisible by 3 and 5
//     ex4. checkDiv(11) -> not divisible by 3 nor 5

const checkDiv = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return "divisible by 3 and 5";
  } else if (n % 3 === 0) {
    return "divisible by 3";
  } else if (n % 5 === 0) {
    return "divisible by 5";
  } else {
    return "not divisible by 3 nor 5";
  }
};

console.log(checkDiv(9)); // divisible by 3
console.log(checkDiv(10)); // divisible by 5
console.log(checkDiv(15)); // divisible by 3 and 5
console.log(checkDiv(11)); // not divisble by 3 nor 5

// 3. Create a function called printFizzBuzz that gets a number and prints in the following format:
//     ex. printFizzBuzz(15)
//     1 - pop
//     2 - fizz
//     3 - buzz
//     4 - fizz
//     5 - pop
//     6 - fizzbuzz
//     ....
//     11 - pop
//     12 - fizzbuzz
//     13 - pop
//     14 - fizz
//     15 - buzz

// divisble by 2 = fizz
// divisible by 3 = buzz
// divisible by 2 and 3 == fizzbuzz
// rest = pop

const printFizzBuzz = (n) => {
  let result = [];
  for (let i = 1; i <= n; i++) {
    let add = "";
    // fizz
    if (i % 2 === 0) {
      add += "fizz";
    }
    // buzz
    if (i % 3 === 0) {
      add += "buzz";
    }
    // if not divisible by 2 and 3
    if (add === "") {
      result.push("pop");
    } else {
      result.push(add);
    }
  }
  return result.join(" ");
};

console.log(printFizzBuzz(15));

// Challenge 1: Create a function that checks if a year is a leap year or not

// Leap year is evenly divisible by 4 && not evenly divisible by 100

const leapYear = (year) => {
  return year % 4 === 0 && year % 100 !== 0 ? true : false;
};

console.log(leapYear(2012));

// Challenge 2: Modify the function in Challenge 1 to be a single if-statement only
