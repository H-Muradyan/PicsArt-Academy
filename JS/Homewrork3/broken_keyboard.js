function findBrokenKeys(originalText, brokenText) {
  if (originalText.length !== brokenText.length) {
    return "Please enter equal arguments";
  }
  originalText = originalText.toLowerCase();
  brokenText = brokenText.toLowerCase();
  let brokenKeys = [];
  for (let i = 0; i < originalText.length; i++) {
    if (
      originalText[i] !== brokenText[i] &&
      !brokenKeys.includes(originalText[i])
    ) {
      brokenKeys.push(originalText[i]);
    }
  }
  return brokenKeys;
}

console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
console.log(findBrokenKeys("starry night", "starrq light"));
console.log(findBrokenKeys("beethoven", "affthoif5"));
