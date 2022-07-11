function weeklySalary(hoursList) {
  let sunday = hoursList.length - 1;
  let saturday = hoursList.length - 2;
  let sum = 0;
  for (let i = 0; i < hoursList.length; i++) {
    hoursList[i] > 8
      ? (sum +=
          (8 * 10 + (hoursList[i] - 8) * 15) *
          (i === sunday || i === saturday ? 2 : 1))
      : (sum += hoursList[i] * 10 * (i === sunday || i === saturday ? 2 : 1));
  }
  return sum;
}

console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0]));
console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0]));
console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0]));
