function countTrue(arr) {
  return arr.filter((elem) => Boolean(elem)).length;
}

console.log(countTrue([true, false, false, true, false]));
console.log(countTrue([false, false, false, false]));
console.log(countTrue([]));
