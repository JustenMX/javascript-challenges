var getConcatenation = function (nums) {
  let nums2 = [];
  nums2 = nums;
  let ans = [...nums, ...nums2];
  return ans;
};

console.log(getConcatenation([1, 2, 1]));
