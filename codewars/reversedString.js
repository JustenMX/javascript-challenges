// https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// Reversed String

function solution(str) {
  const reversedString = str.split("").reverse().join("");
  return reversedString;
}

console.log(solution("Hello"));
