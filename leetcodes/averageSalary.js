// https://leetcode.com/problems/average-salary-excluding-the-minimum-and-maximum-salary/

// 1491. Average Salary Excluding the Minimum and Maximum Salary

// var average = function (salary) {
//   let averageSalary = 0;
//   let sumOfSalary = 0;

//   // remove the first and last index of salary array
//   salary.pop();
//   salary.shift();
//   console.log(salary);

//   sumOfSalary = salary.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     sumOfSalary
//   );
//   averageSalary = sumOfSalary / salary.length;
//   console.log(averageSalary);
// };

// const average = (salary) => {
//   salary.sort((a, b) => a - b);
//   salary.pop();
//   salary.shift();
//   console.log(salary);
//   //
//   averageSalary =
//     salary.reduce(
//       (accumulator, currentValue) => accumulator + currentValue,
//       0
//     ) / salary.length;
//   console.log(averageSalary);
//   //
//   return averageSalary;
// };

//! shorter method

var average = function (salary) {
  return (
    salary
      .sort((a, b) => a - b)
      .slice(1, -1)
      .reduce((a, b) => a + b, 0) /
    (salary.length - 2)
  );
};

console.log(average([8000, 9000, 2000, 3000, 6000, 1000]));
