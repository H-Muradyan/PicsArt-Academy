function removeDups(arr) {
  let newArr = [];
  arr.map((elem) => !newArr.includes(elem) && newArr.push(elem));
  return newArr;
}

console.log(removeDups([1, 0, 1, 0]));
console.log(removeDups(["The", "big", "cat"]));
console.log(removeDups(["John", "Taylor", "John"]));
