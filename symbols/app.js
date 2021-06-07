// Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol("sym2");

// // console.log(sym1);
// // console.log(sym2);

// // console.log(Symbol() === Symbol());
// // console.log(`Hello ${String(sym1)}`);

// // Unique Object Keys
// const KEY1 = Symbol();
// const KEY2 = Symbol("sym2");

// const myObj = {};

// myObj[KEY1] = "Prop1";
// myObj[KEY2] = "Prop2";
// myObj.key3 = "Prop3";
// myObj.key4 = "Prop4";

// // console.log(myObj[KEY1]);

// //Symbols are not enumerable in for..in
// for(let i in myObj) {
//   console.log(`${i}: ${myObj[i]}`);
// }

// // Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({key: "prop"}));
// console.log(JSON.stringify({[Symbol("sym1")]: "prop"}));

// DESTRUCTURING

// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// REST pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

({a, b} = {a: 100, b: 200, c: 300, d: 400, e: 500});
({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, e: 500});

// Array Destructuring

// const people = ["John", "Beth", "Mike"];
// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople() {
//   return ["John", "Beth", "Mike"];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople();

// console.log(person1, person2, person3);

// Object Destructuring

const person = {
  name: "John",
  age: 32,
  city: "Miami",
  gender: "male",
  sayHello: function() {
    console.log("Hello");
  }
}

// New ES6 Destructuring
const {name, age, city, sayHello} = person;

console.log(name, age, city);
sayHello();