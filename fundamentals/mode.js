// find the mode in array

function findMode(arr) {
  const counts = {};
  let maxCount = 0;
  let mode;

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    counts[num] = (counts[num] || 0) + 1; // Increment count or initialize to 1
    if (counts[num] > maxCount) {
      maxCount = counts[num];
      mode = num;
    }
  }

  return mode;
}
