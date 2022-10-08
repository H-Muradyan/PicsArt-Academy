// function isHappy(number) {
//   let sum = 0;
//   while (number > 0) {
//     let digit = number % 10;
//     number = Math.trunc(number / 10);
//     sum += digit * digit;
//   }
//   if (sum === 1) {
//     return true;
//   } else if (sum > 1 && sum <= 4) {
//     return false;
//   }
//   return isHappy(sum);
// }

// console.log(isHappy(67));
// console.log(isHappy(89));
// console.log(isHappy(139));
// console.log(isHappy(1327));
// console.log(isHappy(2871));
// console.log(isHappy(3970));

//--------------------------------------------------------

// function double([number, ...rest]) {
// 	if(rest.length === 0) return [number * 2]
// 	else {
// 		return [number * 2, ...double(rest)]
// 	}
// }

// console.log(double([1, 2, 3]));

//------------------------------------------------------

// let data = [
// 	["Ch", "9AM", "asd"],
// 	["Phu", "9AM", "asd"],
// 	["Ch", "9AM", "asd"]
// ]

// let classesAsObject = data.map(([subject, time, teacher]) => {
// 	return {subject, time, teacher}
// })

// console.log(classesAsObject)

//-----------------------------------------------------------

// function product (...rest) {
// 	return rest.reduce(function(acc, number) {
// 		return acc *number
// 	}, 1)

// }

// console.log(product(1,2,3))

//----------------------------------------------------------------

// let f1 = () => "hello";
// // f1() ➞ "hello"

// let f2 = () => () => "edabit";
// // f2()() ➞ "edabit"

// let f3 = () => () => () => "user";
// // f3()()() ➞ "user"

// let count = 0;
// function funcSort(arr) {
//   let newArr = [];
//   arr.forEach((elem) => {
//     newArr.push({ count: check(elem), funcName: elem.name || elem });
//     count = 0;
//   });
//   return newArr.sort((a, b) => a.count - b.count).map((elem) => elem.funcName);
// }

// function check(f) {
//   if (typeof f !== "function") {
//     return count;
//   }
//   count++;
//   return check(f());
// }

// console.log(funcSort([f2, f3, f1]));
// console.log(funcSort([f1, f2, f3]));
// console.log(funcSort([f2, "func"]));

//-----------------------------------------------------------------

// let obj = [
//   1,
//   2,
//   null,
//   undefined,
//   [1, 2, { id: 1 }],
//   "Hrach",
//   { name: "Hrach", age: 25, id: 1 },
//   { name: "Gago", age: 26, id: 2 },
//   { name: "Hovo", age: 27, id: 3 },
//   { name: "Robert", age: 13, id: 4 },
//   { name: "Grace", age: 2, id: 5 },
//   {},
// ];

// function asd(obj) {
//   obj = obj.filter((elem) => elem && elem.constructor === Object);
//   return obj;
// }

// console.log(asd(obj));

//-------------------------------------------------------------------

// let arr = [{name: "Joe"}, {name: "Mike"}]

// function foo(data) {
//   return new Promise((resolve, reject) => {
//     let myInterval = setInterval(() => resolve(data), 2000);
//     setTimeout(() => {
//       clearInterval(myInterval)
//     }, 4000)
//   });
// }

// async function bar() {
//   for(let i of arr) {
//     const obj = await foo(i)
//     console.log(obj)
//   }
// }

// bar()

// function foo() {
//     console.log(this.a);
//  }

//  var obj2 = {
//     a: 42,
//     foo: foo
//  };

//  var obj1 = {
//     a: 2,
//     obj2: obj2
//  };

//  obj1.obj2.foo()

//-----------------------------------------------------

// function foo() {
//   console.log(this.a);
// }

// var a = 2;

// (function () {
//   "use strict";
//   foo();
// })();

//-----------------------------------------------------

// function foo() {
//     "use strict"
//     console.log(this.a)
// }

// var a = 2;

// foo()

//-----------------------------------------------------

// function helloWorld() {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve("Hello World!");
//       }, 2000);
//     });
//   }

//   const msg = async function () {
//     //Async Function Expression
//     const msg = await helloWorld();
//     console.log("Message:", msg);
//   };

//   const msg1 = async () => {
//     //Async Arrow Function
//     const msg = await helloWorld();
//     console.log("Message:", msg);
//   };

//   msg();
//   msg1();

//-----------------------------------------

// new Promise(function(resolve, reject) {
//     setTimeout(() => {
//       throw new Error("Whoops!");
//     }, 1000);
//   }).catch(alert);

//---------------------------------------------

// function sum(a) {

//     let currentSum = a;

//     function f(b) {
//       currentSum += b;
//       return f;
//     }

//     f.toString = function() {
//       return currentSum;
//     };

//     return f;
//   }

//   alert( sum(1)(2) ); // 3
//   alert( sum(5)(-1)(2) ); // 6
//   alert( sum(6)(-1)(-2)(-3) ); // 0
//   alert( sum(0)(1)(2)(3)(4)(5) ); // 15

//---------------------------------------------------

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//       this.students.forEach(
//         student => alert(this.title + ': ' + student)
//       );
//     }
//   };

//   group.showList();

//------------------------------------------------------------

// let group = {
//     title: "Our Group",
//     students: ["John", "Pete", "Alice"],

//     showList() {
//       this.students.forEach(function(student) {
//         alert(this.title + ': ' + student);
//       });
//     }
//   };

//   group.showList();

//--------------------------------------------------------

// function defer(f, ms) {
//     return function() {
//       setTimeout(() => f.apply(this, arguments), ms);
//     };
//   }

//   function sayHi(who) {
//     alert('Hello, ' + who);
//   }

//   let sayHiDeferred = defer(sayHi, 2000);
//   sayHiDeferred("John");

//-------------------------------------------------------

function foo(arr) {
  let sum = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      sum += arr[i].length;
      arr = arr.flat();
      foo(arr);
    }
  }
  return sum;
}

console.log(foo([1, [2, 3, [4, 5]]]));

