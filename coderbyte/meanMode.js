/* https://coderbyte.com/question/mean-mode

*  Have the function MeanMode(arr) take the array of numbers stored in arr and         *
*  return 1 if the mode equals the mean, 0 if they don't equal each other              *
*  (ie. [5, 3, 3, 3, 1] should return 1 because the mode (3) equals the mean (3)).     *
*  The array will not be empty, will only contain positive integers, and will not      *
* contain more than one mode.                                                          *
*/

function MeanMode(arr) {
  // Step 1: Calculate the mean
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const mean = sum / arr.length;

  // Step 2: Find the mode
  const modeMap = {};
  let maxCount = 0;
  let mode = null;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    modeMap[num] = modeMap[num] ? modeMap[num] + 1 : 1;
    if (modeMap[num] > maxCount) {
      maxCount = modeMap[num];
      mode = num;
    }
  }

  // Step 3: Compare the mean and the mode
  if (mean === mode) {
    return 1;
  } else {
    return 0;
  }
}

console.log(MeanMode([5, 3, 3, 3, 1])); // Output: 1

console.log(MeanMode([1, 2, 3, 4, 5]));

// We initialize an empty object called modeMap to keep track of the count of each number in the array.
// We also initialize maxCount to 0 and mode to null. These variables will be used to track the number with the highest count (mode) and its count.
// The loop iterates through each element in the array using the index i.
// Inside the loop, we access the current number using arr[i] and store it in the num variable.
// We update the count of num in the modeMap. If modeMap[num] already exists (truthy value), we increment its count by 1. Otherwise, we set its count to 1.
// After updating the count, we check if the current count (modeMap[num]) is greater than the previous maximum count (maxCount).
// If the current count is greater, we update maxCount to the current count and set mode to the current number (num). This ensures that mode always stores the number with the highest count.
// The loop continues until all elements in the array have been processed.

// The mode variable is initially declared as null to handle the case where there is no mode (i.e., all numbers in the array have the same count). By setting it to null, we can check if a mode has been found or not.
// Inside the loop, as we update the mode variable, if modeMap[num] surpasses the current maxCount, we update mode to the current number num. If there is no mode (all numbers have the same count), maxCount will remain 0, and mode will stay as null because no number has a count greater than 0.
// Later in the code, when comparing the mean and the mode, we check if mean === mode. If mode is still null, it indicates that there is no mode, and the condition will evaluate to false, resulting in a return value of 0.
// In summary, initializing mode as null allows us to check if a mode exists or not. If mode remains null after the loop, it means there is no mode, and we return 0.
