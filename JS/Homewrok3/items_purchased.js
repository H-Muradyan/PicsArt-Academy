function itemsPurchased(data, money) {
  money = +money.replaceAll(/[$,]/g, "");
  let items = [];
  for (let key in data) {
    let price = +data[key].replaceAll(/[$,]/g, "");
    price <= money && items.push(key);
  }
  return items.length ? items.sort((a, b) => a.localeCompare(b)) : "Nothing";
}

console.log(
  itemsPurchased(
    {
      Water: "$1",
      Bread: "$3",
      TV: "$1,000",
      Fertilizer: "$20",
    },
    "$300"
  )
);
console.log(
  itemsPurchased(
    {
      Apple: "$4",
      Honey: "$3",
      Fan: "$14",
      Bananas: "$4",
      Pan: "$100",
      Spoon: "$2",
    },
    "$100"
  )
);
console.log(
  itemsPurchased(
    {
      Phone: "$999",
      Speakers: "$300",
      Laptop: "$5,000",
      PC: "$1200",
    },
    "$1"
  )
);
