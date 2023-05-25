//  Mutations
// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
// For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) return false;
  }
  return true;
}

console.log(mutation(["hello", "hey"])); // false

// Code Explanation

// First we make the two strings in the array lowercase. test will hold what we are looking for in target.
// Then we loop through our test characters and if any of them is not found we return false.

// If they are all found, the loop will finish without returning anything and we get to return true.
