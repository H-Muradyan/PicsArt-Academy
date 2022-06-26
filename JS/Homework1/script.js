// Ex1;

function isSpecialArray(arr) {
    //Option 1

    // let i = 0;

    // while (i < arr.length) {
    //   if (arr[i] % 2 !== i % 2) {
    //     return false;
    //   }
    //   i++;
    // }
    // return true;

  //Option 2

  return arr.every((elem, index) => elem % 2 === index % 2);
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]));
console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]));

//---------------------------------------------------------------------------

//Ex2

// function allTruthy(...arguments) {
//     if(!arguments.length) {
//         return " Please supply with at least one parameter."
//     }
//   //Option 1

//   let i = 0;

//   while (i < arguments.length) {
//     if (!Boolean(arguments[i])) {
//       return false;
//     }
//     i++;
//   }
//   return true;

//   //Option 2
//     return arguments.every((elem) => Boolean(elem));
// }

// console.log(allTruthy(true, true, true));
// console.log(allTruthy(true, false, true));
// console.log(allTruthy(5, 4, 3, 2, 1, 0));

//---------------------------------------------------------------------------

//Ex3

// function mean(number) {
//   let sum = 0;
//   let count = 0;
//   if (number === 0) {
//     return number;
//   } else if (
//     typeof number !== "number" ||
//     isNaN(number) ||
//     !Number.isInteger(number)
//   ) {
//     return "Please enter only an integer";
//   } else if (number < 10) {
//     return "Numbers must be at least 2 digit";
//   }

//   //Option 1
//   while (number) {
//     let last_digit = number % 10;
//     sum += last_digit;
//     number = (number - last_digit) / 10;
//     count++;
//   }
//   return Math.floor(sum / count);

//   //Option 2
//   let number_arr = String(number).split("");
//   sum = number_arr.reduce((sum, current) => sum + +current, 0);
//   return sum / number_arr.length;
// }

// console.log(mean(42));
// console.log(mean(12345));
// console.log(mean(666));
