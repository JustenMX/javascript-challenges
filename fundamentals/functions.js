function sayThanks(name) {
  console.log(
    "Thank you for your purchase " + name + "! We appreciate your business."
  );
}
sayThanks("Cole");

function sayGreetings(greet) {
  console.log(
    "Hey " +
      greet +
      " bro!, Thank you for having here us!, Maybe next week we can meet? Is that alright with you " +
      greet +
      "?"
  );
}
sayGreetings("Justen");

function makeShoppingList(item1 = "milk", item2 = "bread", item3 = "eggs") {
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}
makeShoppingList();

function rectangleArea(width, height) {
  if (width < 0 || height < 0) {
    return "You need positive integers to calculate area!";
  }
  return width * height;
}
console.log(rectangleArea(0, -1));

// Helper Functions

function multiplyByNineFifths(number) {
  return number * (9 / 5);
}

function getFahrenheit(celsius) {
  return multiplyByNineFifths(celsius) + 32;
}

console.log(getFahrenheit(15)); // Returns 59

////
//0-59 should return: 'F'
//60-69 should return: 'D'
//70-79 should return: 'C'
//80-89 should return: 'B'
//90-100 should return: 'A'

const finalGrade = (num1, num2, num3) => {
  if (
    num1 < 0 ||
    num1 > 100 ||
    num2 < 0 ||
    num2 > 100 ||
    num3 < 0 ||
    num3 > 100
  ) {
    return "You have entered an invalid grade";
  }
  let averageGrade = Math.round((num1 + num2 + num3) / 3);
  if (averageGrade >= 0 && averageGrade <= 59) {
    return "F";
  } else if (averageGrade >= 60 && averageGrade <= 69) {
    return "D";
  } else if (averageGrade >= 70 && averageGrade <= 79) {
    return "C";
  } else if (averageGrade >= 80 && averageGrade <= 89) {
    return "B";
  } else if (averageGrade >= 90 && averageGrade <= 100) {
    return "A";
  }
};
console.log(finalGrade(100, 100, 100));

/*
We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?
*/

const rollTheDice = () => {
  // Math.random() gives us a random number from 0 up to, but not including, 1
  // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
  // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
  let die1 = Math.floor(Math.random() * 6 + 1);
  console.log("This is die1:" + " " + die1);
  let die2 = Math.random() * 6 + 1;
  console.log("This is die2:" + " " + die1);
  return die1 + die2;
};

console.log(rollTheDice());

////

const howOld = (age, year) => {
  const theCurrentYear = new Date().getFullYear();
  const yearsDifference = Math.abs(year - theCurrentYear);

  if (year > theCurrentYear) {
    return "You will be " + (age + yearsDifference) + " in the year " + year;
  } else if (year < theCurrentYear && age < yearsDifference) {
    return (
      "The year " +
      year +
      " was " +
      (yearsDifference - age) +
      " years before you were born"
    );
  } else {
    return "You were " + (age - yearsDifference) + " in the year " + year;
  }
};

// Once your function is written, write function calls to test your code!
console.log(howOld(38, 2022));
console.log(howOld(38, 1985));
console.log(howOld(38, 2000));
console.log(howOld(38, 1990));
console.log(howOld(38, 2005));

////

const whatRelation = (percentSharedDNA) => {
  if (percentSharedDNA === 100) {
    return "You are likely identical twins.";
  } else if (percentSharedDNA <= 99 && percentSharedDNA >= 35) {
    return "You are likely parent and child or full siblings.";
  } else if (percentSharedDNA <= 34 && percentSharedDNA >= 14) {
    return "You are likely grandparent and grandchild, aunt/uncle and niece/nephew, or half siblings.";
  } else if (percentSharedDNA <= 13 && percentSharedDNA >= 6) {
    return "You are likely 1st cousins.";
  } else if (percentSharedDNA <= 5 && percentSharedDNA >= 3) {
    return "You are likely 2nd cousins.";
  } else if (percentSharedDNA <= 2 && percentSharedDNA >= 1) {
    return "You are likely 3rd cousins";
  } else {
    return "You are likely not related.";
  }
};

/////

const tipCalculator = (quality, totalCost) => {
  if (quality === "bad") {
    return totalCost * 0.05;
  } else if (quality === "ok") {
    return totalCost * 0.15;
  } else if (quality === "good") {
    return totalCost * 0.2;
  } else if (quality === "excellent") {
    return totalCost * 0.3;
  } else {
    return totalCost * 0.18;
  }
};

console.log(tipCalculator("good", 100)); //should return 20

////
const toEmoticon = (str) => {
  switch (str) {
    case "shrug":
      return '|_{"}_|';
      break;
    case "smiley face":
      return ":)";
      break;
    case "frowny face":
      return ":(";
      break;
    case "winky face":
      return ";)";
      break;
    case "heart":
      return "<3";
    default:
      return "|_(* ~ *)_|";
  }
};

console.log(toEmoticon("heart"));

// hasOwnProperty() method in JavaScript is used to check whether the object has the specified property as its own property. This is useful for checking if the object has inherited the property rather than being it’s own.

function checkProperty() {
  let exampleObj = {};
  exampleObj.height = 100;
  exampleObj.width = 100;

  console.log(exampleObj);

  // Checking for existing property
  result1 = exampleObj.hasOwnProperty("height");
  console.log(result1);

  // Checking for non-existing property
  result2 = exampleObj.hasOwnProperty("breadth");
}
console.log(checkProperty());

// another example of a function

function checkName(obj, checkProp) {
  obj = {};
  obj.name = "Justen";
  // checkProp is the value that would be passed to check if the obj has the property
  if (obj.hasOwnProperty(checkProp)) {
    return "The Student name is in the database";
  } else {
    return undefined;
  }
}

// return decimal in math.random

function randomFractions() {
  return Math.random();
}
console.log(randomFractions());

// to return a number within a range and should be integer

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1) + myMin);
}
console.log(randomRange(1, 10));

// recursion

function countdown(n) {
  if (n < 0) {
    return [];
  } else {
    const array = countdown(n - 1);
    array.unshift(n);
    return array;
  }
}
console.log(countdown(10));

// use recursion to return

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum) {
    return [];
  } else {
    const numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}
console.log("-----------");

// use recursion

const sum = (...args) => {
  let totalSum = 0;
  for (let i = 0; i < args.length; i++) {
    totalSum += args[i];
  }
  return totalSum;
};
console.log(sum(1, 2, 3, 4, 5, 10, 5));
console.log("-----------");

// some leet code which I am practicing here

const twoSum = (nums, target) => {
  let sum = 0;
  let sumArray = [];
  for (let i = 0; i < nums.length; i++) {
    sum = nums[i] + nums[i + 1];
    console.log(nums[i]);
    console.log(nums[i + 1]);
    if (sum == target) {
      sumArray.push(nums.indexOf(nums[i]));
      sumArray.push(nums.indexOf(nums[i + 1]));
      return sumArray;
    } else {
      return undefined;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 3], 6));
console.log("-----------");

/////

function plusMinus(arr) {
  let elements = arr.length;
  let p = 0;
  let n = 0;
  let z = 0;
  for (let i = 0; i < arr.length; i++) {
    if (i < 0) {
      n += i;
      console.log(n);
    }
    if (i > 0) {
      p += i;
    }
    if (i == 0) {
      z = i;
    }
  }
}

//console.log(n);
console.log("-----------");

// Array to Strings to Numbers

let testArr = [1, 2, 3, 4, 5];
let stringTestArr = testArr.join("");

console.log(stringTestArr);

//

const plusOne = function (digits) {
  let digitsStr = digits.join("");
  let digitsNum = parseInt(digitsStr, 10);
  {
    if (digitsNum >= 0) {
      let sum = digitsNum + 1;
      let myArr = String(sum)
        .split("")
        .map((sum) => {
          return Number(sum);
        });
      return myArr;
    }
  }
};

console.log(plusOne([1, 2, 3]));

///

function curve() {
  return function (t) {
    var m = 19 * t + 13 * Math.sin(1339 * t);
    return make_point(m * Math.sin(167 * t)), m * Math.sin(167 * t);
  };
}
curve();
console.log(curve());
