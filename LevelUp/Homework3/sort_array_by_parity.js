var sortArrayByParity = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      let digit = nums.splice(i, 1);
      nums.unshift(digit[0]);
    }
  }
  return nums;
};

console.log(sortArrayByParity([3, 1, 2, 4]));
