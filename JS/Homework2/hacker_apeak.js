function hackerSpeak(text) {
  let replace_numbers = { a: 4, e: 3, i: 1, o: 0, s: 5 };
  return text.replace(/[aeios]/g, (key) =>  replace_numbers[key])

}

console.log(hackerSpeak("javascript is cool"));
console.log(hackerSpeak("programming is fun"));
console.log(hackerSpeak("become a coder"));
    