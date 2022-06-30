function matchLastItem(arr) {
  if (arr.length === 0) {
    return "The array is always must be filled with items.";
  }
  let str = "";
  for (let i = 0; i < arr.length - 1; i++) {
    str += arr[i];
  }
  return arr.includes(str);
}

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
console.log(matchLastItem([1, 1, 1, "11"]));
console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));
