function uncensor(censor, vowel) {
  for (let i = 0; i < vowel.length; i++) {
    censor = censor.replace("*", vowel[i]);
  }
  return censor;
}

console.log(uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo"));
console.log(uncensor("abcd", ""));
console.log(uncensor("*PP*RC*S*", "UEAE"));
