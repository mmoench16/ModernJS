// Maps = key-value pairs - can use any time as a key or value

// const map1 = new Map();

// // Set keys
// const key1 = "some string",
//       key2 = {},
//       key3 = function() {};

// // Set map values by key
// map1.set(key1, "Value of key1");
// map1.set(key2, "Value of key2");
// map1.set(key3, "Value of key3")

// Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// // Count values 
// console.log(map1.size);

// Iterating through maps

// Loop using for...of to get keys and values
// for(let [key, value] of map1) {
//   console.log(`${key} = ${value}`);
// }

// Iterate keys only

// for(let key  of map1.keys()) {
//   console.log(key);
// }

// // Iterate values only

// for(let value  of map1.values()) {
//   console.log(value);
// }

// // Loop with forEach
// map1.forEach(function(value, key) {
//   console.log(`${key} = ${value}`);
// });

// COnvert to arrays

// Create an array of teh key value pairs
// const keyValArray = Array.from(map1);
// console.log(keyValArray);

// // Create an array of the values
// const valArray = Array.from(map1.values());
// console.log(valArray);

// // Create an array of the keys
// const keyArray = Array.from(map1.keys());
// console.log(keyArray);

// SETS - Store unique values of any type
const set1 = new Set();

// Add some values
set1.add(100);
set1.add("A string");
set1.add({name: "John"});
set1.add(true);
set1.add(100);

// const set2 = new Set([1, true, "string"])

// console.log(set1);
// console.log(set1.size);
// console.log(set1.has(50+50));
// console.log(set1.has({name: "John"}));

// Delete
set1.delete(100);

// console.log(set1);

// Iterate through sets
// For..of 
// for(let item of set1) {
//   console.log(item);
// }

// set1.forEach((value) => {
//   console.log(value);
// })

const setArr = Array.from(set1);
console.log(setArr);