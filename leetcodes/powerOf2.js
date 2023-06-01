// LeetCode Mock Assessment Question
// The Power Of 2
// Given an integer n, return true if it is a power of two. Otherwise, return false.

const isPowerOfTwo = (n) => {
  if (n <= 0) {
    return false; // Negative numbers and zero are not powers of two
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false; // If n is not divisible by 2, it is not a power of two
    }
    n /= 2; // Divide n by 2
  }

  return true; // At the end, n will be 1 if it is a power of two
};

console.log(isPowerOfTwo(16));

// first condition is to determine that negative numbers and zero are not powers of 2, so the function will check that first with a if condition
// then while condition if the number is more than 0
// if condition using modular operator -- if n is not divisible by 2, it is not a power of 2
