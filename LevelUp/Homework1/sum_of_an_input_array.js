function sum(arr) {
  if (Array.isArray(arr)) {
    return !arr.length ? 0 : arr.shift() + sum(arr);
  }
  return "Please enter an Array";
}

sum([1, 2, 3, 4, 5]);
