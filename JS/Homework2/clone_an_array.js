function clone(arr) {
  return (arr = [...arr, arr]);
}
console.log(clone([1, 1]));
console.log(clone([1, 2, 3]));
console.log(clone(["x", "y"]));

