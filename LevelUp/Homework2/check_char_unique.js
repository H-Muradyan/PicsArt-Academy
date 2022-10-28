function checkCharUnique(str) {
  if (typeof str !== "string") {
    return "Please enter a string";
  }
  str = str.replace(/[\s]/g, "");
  let obj = {};
  for (let i of str) {
    if (obj.hasOwnProperty(i)) {
      return false;
    } else {
      obj[i] = 0;
    }
  }
  return true;
}

console.log(checkCharUnique("hello"));
