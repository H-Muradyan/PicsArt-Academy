var searchRange = function (nums, target) {
  let arr = [];
  arr.push(nums.indexOf(target), nums.lastIndexOf(target));
  return arr;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
