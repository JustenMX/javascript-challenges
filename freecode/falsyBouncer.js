// Falsy Bouncer
// Remove all falsy values from an array. Return a new array; do not mutate the original array.

function bouncer(arr) {
  return arr.filter(Boolean);
}

console.log(bouncer([7, "ate", "", false, 9]));
