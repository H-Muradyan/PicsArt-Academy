function findNaN (arr) {
    return arr.findIndex(elem => isNaN(elem))
}

console.log(findNaN([1, 2, NaN]))
console.log(findNaN([NaN, 1, 2, 3, 4]))
console.log(findNaN([0, 1, 2, 3, 4]))