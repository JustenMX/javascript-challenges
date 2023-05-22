// https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript

// Is this a triangle?

const triangle = (a, b, c) => {
  if (a + b > c && a + c > b && b + c > a) {
    return true;
  } else {
    return false;
  }
};

console.log(triangle(1, 2, 2));

// Triangle Inequality Theorem. This theorem simply states that the sum of two sides of a triangle must be greater than the third side. If this is true for all three combinations, then you will have a valid triangle. You'll have to go through these combinations one by one to make sure that the triangle is possible. You can also think of the triangle as having the side lengths a, b, and c and the theorem being an inequality,
//? which states: a+b > c, a+c > b, and b+c > a
