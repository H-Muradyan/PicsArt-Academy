function insertionSort(arr) {
  for (let i = 1; i < arr.length; ++i) {
    let j = i;
    let current = arr[i];
    while (current < arr[j - 1] && j >= 1) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = current;
  }
  return arr;
}

console.log(insertionSort([5, 9, 3, 2, 6, 1, 0]));
