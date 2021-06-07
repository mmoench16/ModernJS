// single line comment

/*
  multiline comment


console.log("Hello World")
console.log(123)
console.log(true)
var greeting = "Hello";
console.log(greeting)
console.log([1,2,3,4])
console.log({a:1, b:2})
console.table({a:1, b:2})

console.error("this is an error")

console.clear();

console.warn("this is a warning");

console.time("Hello")
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
  console.log("Hello World");
console.timeEnd("Hello")

*/

// var name = "John Doe";
// console.log(name);
// name = "Sam Smith";
// console.log(name);

// // init greeting
// var greeting;
// console.log(greeting);
// greeting = "Hello";
// console.log(greeting);

// let name = "John Doe";
// console.log(name);
// name = "Sam Smith";
// console.log(name);

// CONST
// const name = "John Doe";
// console.log(name);

// const person = {
//   name: "John",
//   age: 30
// }

// person.name = "Sara";

// console.log(person);

// const numbers = [1,2,3,4]
// numbers.push(5)
// console.log(numbers)

// JS Types

// Primitives

// // String
// const name = "John Doe";
// // Number
// const age = 45;
// // Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefiend
// let test;
// // Symbol
// const sym = Symbol();

// // Reference Types - Objects

// // Array
// const hobbies = ["football", "music"];
// // Object literal
// const address = {
//   city: "Boston",
//   state: "MA"
// }
// // Date
// const today = new Date();

// console.log(today)
// console.log(typeof today)

// =====
// Type Conversions

// let val;

// // Number to String
// val = String(555);
// val = String(5+5);
// // Bool to String
// val = String(true);
// // Date to String
// val = String(new Date());
// // Array to String
// val = String([1,2,3,4]);

// // toString()
// val = (555).toString();
// val = (true).toString();

// // Strings to numbers
// val = Number("5");
// val = Number(true);
// val = Number(false);
// val = Number(null);

// val = Number("hello");
// val = Number([1,2,3]);

// // parseInt()
// val = parseInt("100");
// val = parseFloat("100.31");


// Output
// console.log(val);
// console.log(typeof val);
// //console.log(val.length);
// console.log(val.toFixed())

// Type Coercion

// const val1 = "5";
// const val2 = 6;
// const sum = val1 + val2;

// // console.log(sum);
// // console.log(typeof sum);

// // Numbers & Math Object
// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple maths with numbers
// val = num1 + num2;
// val = num1 * num2;
// val = num1 - num2;
// val = num1 / num2;
// val = num1 % num2;

// // Math Object
// val = Math.PI;
// val = Math.E;
// val = Math.round(2.8);
// val = Math.ceil(2.8);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.min(1, 22, 66, 4, 7, -4);
// val = Math.max(1, 22, 66, 4, 7, -4);

// val = Math.random();
// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

// String Methods & Concatenation

// const firstName = "William";
// const lastName = "Johnson";
// const age = 36;
// const str = "Hello there my name is Brad";
// const tags = "web design,web development, programming";

// let val;

// val = firstName + lastName;

// // Concatenation
// val = firstName + " " +lastName;

// // Append
// val = "Brad ";
// val += "Traversy";

// val = "Hello, my name is " + firstName + " and I am " + age;

// // Escaping

// val = 'That\'s awesome I can\'t wait.'

// // Lengths

// val = firstName.length;

// // concat()
// val = firstName.concat(" ", lastName);

// // Change case
// val = firstName.toUpperCase()
// val = firstName.toLowerCase()

// val = firstName[2];

// // indexOf()
// val = firstName.indexOf("l");
// val = firstName.lastIndexOf("l");

// // charAt()
// val = firstName.charAt(2);

// // get last character
// val = firstName.charAt(firstName.length - 1);

// // Substring
// val = firstName.substr(0, 4);

// // slice()
// val = firstName.slice(0, 4);
// val = firstName.slice(-3);

// // split()
// val = str.split(" ");
// val = tags.split(",");

// // replace
// val = str.replace("Brad", "Jack");

// // incliudes

// val = str.includes("Hello");

// console.log(val)

// Template Literals
// const name = "John";
// const age = 30;
// const job = "Web Developer";
// const city = "Miami";
// let html;

// function hello() {
//   return "Hello";
// }
// // without template strings (es5)

// html = "<ul><li>Name: " + name + "</li><li>Age: " + age + "</li><li>Job: " + job + "</li><li>City: " + city + "</li></ul>";

// // with template strings (es6)

// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? "Over 30" : "Under 30"}</li>
//   </ul>
// `;


// document.body.innerHTML = html;

// Arrays & Array methods

// const numbers = [22, 34, 56, 1, 98, 7];
// const numbers2 = new Array(11, 54, 6, 5, 23, 3);
// const fruit = ["apple", "banana", "orange", "pear"];
// const mixed = [22, "Hello", true, undefined, null, {a: 1, b: 2}, new Date()];

// let val;

// // Get array length
// val = numbers.length;

// // Check if is array
// val = Array.isArray(numbers);

// // Get single value
// val = numbers[3];
// val = numbers[0];

// // insert to array
// numbers[2] = 100;

// // find index of value
// val = numbers.indexOf(22);

// Mutating arrays
// Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // take off from end
// numbers.pop();
// // take off from front
// numbers.shift();
// // splice values
// numbers.splice(2,3);
// // reverse array
// numbers.reverse();
//concatenate arrays
// val = numbers.concat(numbers2);
// //sort array
// val = fruit.sort();
// val = numbers.sort();

// // Use the compare function
// val = numbers.sort(function(x, y){
//   return x - y;
// })
// // Reverse sort
// val = numbers.sort(function(x, y){
//   return y - x;
// })

// Find
// function over50(num) {
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console.log(val);

// Object Literals
// const person = {
//   firstName: "Steve",
//   lastName: "Smith",
//   age: 36,
//   email: "steve@aol.com",
//   hobbies: ["music", "sports"],
//   address: {
//     city: "Miami",
//     state: "FL"
//   },
//   getBirthYear: function() {
//     return 2020 - this.age;
//   }
// }

// let val;
// val = person;
// // Get specific value
// val = person.firstName;
// val = person["firstName"];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];
// val = person.getBirthYear();

// console.log(val)

// const people = [
//   {name: "John", age: 30},
//   {name: "Mike", age: 23},
//   {name: "Nancy", age: 40}
// ]

// for(let i = 0; i < people.length; i++) {
//   console.log(people[i].name);
// }

// let val;

// const today = new Date();
// let birthday = new Date("9-10-1981 11:25:00");
// birthday = new Date("September 10 1981");
// birthday = new Date("9/10/1981");

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(birthday);

// Comparison Operators
// if (something) {
//   do something
// } else {
//   do something else
// }

// const id = 100;

// Equal to
// if (id == 100) {
//   console.log("Correct")
// } else {
//   console.log("Incorrect")
// }

// // Not equal to
// if (id != 101) {
//   console.log("Correct")
// } else {
//   console.log("Incorrect")
// }

// // Equal to value and type
// if (id === 100) {
//   console.log("Correct")
// } else {
//   console.log("Incorrect")
// }

// // Not equal to value and type
// if (id !== 100) {
//   console.log("Correct")
// } else {
//   console.log("Incorrect")
// }

// test if undefiend
// if (typeof id !== "undefined") {
//   console.log(`The ID is ${id}`)
// } else {
//   console.log("No ID")
// }

// Greter than or less than
// if (id >= 100) {
//   console.log("Correct")
// } else {
//   console.log("Incorrect")
// }

// if else
// const colour = "yellow";

// if (colour === "red") {
//   console.log("Colour is red!")
// } else if (colour === "blue") {
//   console.log("blue")
// } else {
//   console.log("Colour is not red or blue")
// }

// Logical Operators

// const name = "Steve";
// const age = 33;

// AND &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child.`)
// } else if (age >= 13 && age <= 19) {
//   console.log(`${name} is a teenager`)
// } else {
//   console.log(`${name} is an adult.`)
// }

// OR ||
// if (age < 16 || age > 65) {
//   console.log(`${name} cannot run in race.`)
// } else {
//   console.log(`${name} is registered for the race.`)
// }

// ternary operator
// console.log(id === 100 ? "Correct" : "INCORRECT");

// without braces
// if (id === 100) 
//   console.log("CORRECT");
// else
//   console.log("INCORRECT");

// SWITCHES

// const colour = "blue";

// switch(colour) {
//   case "red":
//     console.log("Colour is red");
//     break;
//   case "blue":
//     console.log("Colour is blue");
//     break;
//   default:
//     console.log("Colour is not red or bluw");
//     break;
// }

// let day;

// switch(new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
// }

// console.log(`Today is ${day}`)

// Functions

// function greet(firstName = "John", lastName = "Doe") {
  // if (typeof firstName === "undefined") {
  //   firstName = "John"
  // }
  // if (typeof lastName === "undefined") {
  //   lastName = "Doe"
  // }
  //console.log("Hello");
  // return "Hello " + firstName + " " + lastName;
// }

// console.log(greet());

// Function expression

// const square = function(x = 3) {
//   return x * x;
// };

// console.log(square());

// Immediately invokable function expressions - IIFEs

// (function(){
//   console.log("IIFE Ran..");
// })();

// (function(name){
//   console.log("Hello " + name);
// })("Brad");

// Property methods

// const todo = {
//   add: function() {
//     console.log("Add todo..");
//   },
//   edit: function(id) {
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function() {
//   console.log("Delete todo..");
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// Loops

// for loop

// for (let i = 0; i <= 10; i++) {
//   if (i === 2) {
//     console.log("2 is my favourite number");
//     continue;
//   }

//   if (i === 5) {
//     console.log("Stop the loop");
//     break;
//   }

//   console.log("Number " + i);
// }

// while loop

// let i = 0;

// while(i < 10) {
//   console.log("Number " + i);
//   i++;
// }

// do while loop

// let i = 0;
// do {
//   console.log("Number " + i);
//   i++;
// }

// while (i < 10);

// const cars = ["Ford", "Audi", "Honda", "Toyota"]

// for (let i = 0; i < cars.length; i ++) {
//   console.log(cars[i]);
// }
// FOR Each loop
// cars.forEach(function(car, index){
//   console.log(`${index} : ${car}`);
// })

// MAP

// const users = [
//   {id:1, name:"John"},
//   {id:2, name:"Sara"},
//   {id:3, name:"Karen"},
//   {id:4, name:"Steve"}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);

// const user = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30
// };

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }

// Window Object

// Window methods & Object Properties

// Alert
// alert("Hello World")

// Prompt

// const input = prompt();
// alert(input);

// confirm
// if(confirm("Are you sure")) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

let val;

// Outer hieght and width
// val = window.outerHeight;
// val = window.outerWidth;

// val = window.innerHeight;
// val = window.innerWidth;

// Scroll points
// val = window.scrollY;
// val = window.scrollX;

// Location object
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

// Redirect

// window.location.href = "http://google.com"

// Reload
// window.location.reload();

// History Object

// window.history.go(-1);

// val = window.history.length;

// Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

// Block Scope with with let & const

// Global Scope
var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope: ", a,b,c); 
// }

// test();

// if (true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;

//   console.log("If scope: ", a, b, c);
// }

for (let a = 0; a < 10; a++) {
  console.log(`Loop ${a}`);
}

console.log("Global Scope", a, b, c);





