var lengthOfLastWord = function(s) {
    let arr = s.trim().split(" ")
    return arr[arr.length - 1].length
};

console.log(lengthOfLastWord("Hello World"))