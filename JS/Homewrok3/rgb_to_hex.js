function rgbToHex(str) {
  let hex = "#";
  let rgb = str
    .split("")
    .filter((el) => +el == el)
    .join("")
    .split(" ");
  rgb.forEach((elem) => {
    hex +=
      elem.length === 1
        ? `0${Number(elem).toString(16)}`
        : `${Number(elem).toString(16)}`;
  });
  return hex;
}

console.log(rgbToHex("rgb(0, 128, 192)"));
console.log(rgbToHex("rgb(45, 255, 192)"));
console.log(rgbToHex("rgb(0, 0, 0)"));
