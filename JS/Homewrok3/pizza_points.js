function pizzaPoints(data, orderCount, price) {
  let customers = [];
  for (let key in data) {
    let highOrders = data[key].filter((el) => el >= price).length;
    highOrders >= orderCount && customers.push(key);
  }
  return customers.sort((a, b) => a.localeCompare(b));
}

let customersObj = {
  "Batman": [22, 30, 11, 17, 15, 52, 27, 12],
  "Spider-Man": [5, 17, 30, 33, 40, 22, 26, 10, 11, 45],
};

console.log(pizzaPoints(customersObj, 5, 20));
console.log(pizzaPoints(customersObj, 3, 10));
console.log(pizzaPoints(customersObj, 5, 100));
