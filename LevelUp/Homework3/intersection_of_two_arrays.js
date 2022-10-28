var intersection = function (nums1, nums2) {
  let obj = [];
  if (!Array.isArray(nums1) || !Array.isArray(nums2)) {
    return "Please enter an array";
  }
  for (let key of nums1) {
    if (nums2.includes(key) && !obj.includes(key)) obj.push(key);
  }
  return obj;
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
