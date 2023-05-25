// Chunky Monkey
// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  // Break it up.
  const newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }
  return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// If we use arr.slice(i, i + size), it would create chunks of the specified size starting from index i. Here's how the iteration would look like using arr.slice(i, i + size):

// Let's consider the same example with arr as [1, 2, 3, 4, 5, 6] and size as 2. The resulting chunks would be:

// Iteration 1: arr.slice(0, 0 + 2) --> [1, 2]
// Iteration 2: arr.slice(2, 2 + 2) --> [3, 4]
// Iteration 3: arr.slice(4, 4 + 2) --> [5, 6]
// As you can see, each chunk is created by taking size number of elements starting from the current index i and extending up to i + size. This ensures that each chunk has the specified size.

// Using arr.slice(i, i + size) allows you to create chunks of a specific size by selecting a subset of elements from the array based on the starting index i and the desired chunk size size.
