function makeBox(n) {
  let str = "";
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 || i === n - 1) {
        str += "#";
      } else {
        str += j === 0 || j === n - 1 ? "#" : " ";
      }
    }
    console.log(str);
    str = "";
  }
  return str;
}

console.log(makeBox(5));
console.log(makeBox(3));
console.log(makeBox(2));
console.log(makeBox(1));

