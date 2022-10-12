function substr(str, sub) {
  for (let i = 0; i < str.length; ++i) {
    for (let j = 0; j < sub.length; ++j) {
      if (str[i + j] !== sub[j]) break;
      if (sub.length - 1 === j) return i;
    }
  }
  return -1;
}

console.log(substr("hello", "el"));
