var sumOfUnique = function (nums) {
  let hash = {};
  let sum = 0;
  for (let key of nums) {
    hash.hasOwnProperty(key) ? (hash[key] += 1) : (hash[key] = 0);
  }
  for (let key of Object.keys(hash)) {
    if (hash[key] === 0) sum += +key;
  }
  return sum;
};

console.log(sumOfUnique([1, 2, 3, 2]));
