// 1318. Minimum Flips to Make a OR b Equal to c
// https://leetcode.com/problems/minimum-flips-to-make-a-or-b-equal-to-c/

// Given 3 positives numbers a, b and c. Return the minimum flips required in some bits of a and b to make ( a OR b == c ). (bitwise OR operation).
// Flip operation consists of change any single bit 1 to 0 or change the bit 0 to 1 in their binary representation.

function minFlips(a, b, c) {
  let flips = 0;
  const maxBits = Math.max(Math.log2(a), Math.log2(b), Math.log2(c)) + 1;

  for (let i = 0; i < maxBits; i++) {
    const bitA = (a >> i) & 1;
    const bitB = (b >> i) & 1;
    const bitC = (c >> i) & 1;

    if ((bitA | bitB) !== bitC) {
      if (bitC === 0) {
        flips += bitA + bitB;
      } else {
        flips += 1;
      }
    }
  }

  return flips;
}

console.log(minFlips(1, 2, 5));

// Initialize a variable flips to 0 to keep track of the number of flips required.
// Iterate through the bits of a, b, and c using a loop. We can use a range-based loop from 0 to the maximum number of bits required to represent the numbers a, b, and c. For example, if a, b, and c are positive integers, we can set the loop range to 0 to max(log2(a), log2(b), log2(c)) + 1.
// Extract the i-th bit of a, b, and c using bitwise AND operations with a mask. For example, to extract the i-th bit of a, we can use (a >> i) & 1.
// Check if the i-th bit of c is not equal to the bitwise OR of the i-th bits of a and b. If they are not equal, increment the flips variable by 1.
// After the loop, return the value of flips as the minimum number of flips required.
