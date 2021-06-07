// const sayHello = function() {
//   console.log("Hello");
// }

// const sayHello = () => {
//   console.log("Hello");
// }

// const sayHello = () => console.log("Hello");

// const sayHello = () => "Hello";

// Return object
// const sayHello = () => ({msg: "Hello"});

// Single param does not need parentheses
// const sayHello = (name) => console.log(`Hello ${name}`);

// Multiple params need parentheses
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Brad", "Traversy");

const users = ["Nathan", "John", "William"];

// const nameLength = users.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLength = users.map((name) => {
//   return name.length;
// });

// Shortest
const nameLength = users.map(name => name.length);

console.log(nameLength);