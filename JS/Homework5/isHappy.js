function isHappy(number) {
  let sum = 1;
  for (let num of String(number)) {
    sum *= Math.pow(num, 2);
  }
  return String(sum).length >= 4 ? false : true;
}

console.log(isHappy(67));
console.log(isHappy(89));
console.log(isHappy(139));
console.log(isHappy(1327));
console.log(isHappy(2871));
console.log(isHappy(3970));
