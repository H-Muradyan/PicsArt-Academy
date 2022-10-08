function mostExpensive(obj) {
  let max = Math.max(...Object.values(obj));
  for (let key in obj) {
    if (obj[key] === max) {
      return `The most expensive one is the ${key}`;
    }
  }
  return "Object must be at least one item.";
}

console.log(
  mostExpensive({
    "Diamond Earrings": 980,
    "Gold Watch": 250,
    "Pearl Necklace": 4650,
  })
);

console.log(mostExpensive({
    "Silver Bracelet": 280,
    "Gemstone Earrings": 180,
    "Diamond Ring": 3500
  }))
