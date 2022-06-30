function secondLargest(arr) {
  if (arr.length < 2) {
    return "There must be at least two numbers in the array.";
  }
  arr.sort((a, b) => a - b);
  return arr.length === 2 ? arr[arr.length - 1] : arr[arr.length - 2];
}

console.log(secondLargest([10, 40, 30, 20, 50]));
console.log(secondLargest([25, 143, 89, 13, 105]));
console.log(secondLargest([54, 23, 11, 17, 10]));
