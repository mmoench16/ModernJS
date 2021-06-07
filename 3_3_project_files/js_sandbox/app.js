// // // document.elementById()

// // console.log(document.getElementById("task-title"));

// // // Get things from the element
// // console.log(document.getElementById("task-title").id);

// // const taskTitle = document.getElementById("task-title");

// // // Change styling 
// // taskTitle.style.background = "#333";
// // taskTitle.style.color = "#fff";
// // taskTitle.style.padding = "#5px";
// // // document.getElementById("task-title").style.display = "none";

// // // Change content
// // taskTitle.textContent = "Task List";
// // taskTitle.innerText = "My Tasks";
// // taskTitle.innerHTML = "<span style='color:red;'>Task List</span>";

// // document.querySelector();

// console.log(document.querySelector("#task-title"));
// console.log(document.querySelector(".card-title"));
// console.log(document.querySelector("h5"));

// document.querySelector("li").style.color = "red";
// document.querySelector("ul li").style.color = "blue";

// document.querySelector("li:last-child").style.color = "red";
// document.querySelector("li:nth-child(3)").style.color = "yellow";
// document.querySelector("li:nth-child(4)").textContent = "Hello World";
// document.querySelector("li:nth-child(odd)").style.background = "#ccc";
// document.querySelector("li:nth-child(even)").style.background = "#f4f4f4";

// Muliple Selectors

// document. getElementsByClassName

// const items = document.getElementsByClassName("collection-item");
// console.log(items);
// console.log(items[0]);
// items[0].style.color = "red";
// items[3].textContent = "Hello";

// const listItems = document.querySelector("ul").getElementsByClassName("collection-item");

// console.log(listItems);

// document.getElementByTagName

// let lis = document.getElementsByTagName("li");
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = "red";
// lis[3].textContent = "Hello";

// // Convert HTML Collection into array
// lis = Array.from(lis);
// lis.reverse();

// lis.forEach(function(li, index){
//   console.log(li);
//   li.textContent = `${index}: Hello`;
// });

// console.log(lis);

// document.querySelectorAll()

// const items = document.querySelectorAll("ul.collection li.collection-item");

// items.forEach(function(item, index){
//   item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll("li:nth-child(odd)");
// const liEven = document.querySelectorAll("li:nth-child(even)");

// liOdd.forEach(function(li, index){
//   li.style.background = "#ccc";
// });

// for (let i = 0; i < liEven.length; i++) {
//   liEven[i].style.background = "#f4f4f4";
// }

// console.log(items);

// Traversing the DOM

// let val;

// const list = document.querySelector("ul.collection");
// const listItem = document.querySelector("li.collection-item:first-child");

// val = listItem;
// val = list;

// // Get child nodes
// // val = list.childNodes;
// // val = list.childNodes[0];
// // val = list.childNodes[0].nodeName;
// // val = list.childNodes[3].nodeType;

// // 1 - Element
// // 2 - Attribute (depricated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // Get children element nodes

// val = list.children;
// val = list.children[0];
// list.children[0].textContent = "Hello";

// // Children of children
// list.children[3].children[0].id = "test-link";
// val = list.children[3].children;

// val = list.firstChild;
// val = list.firstElementChild;

// val = list.lastChild;
// val = list.lastElementChild;

// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val - listItem.parentElement;
// val = list.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling.nextElementSibling;

// val = listItem.previousSibling;
// val = listItem.previousElementSibling;

// console.log(val);

// Create Elements

// const li = document.createElement('li');

// // Add class
// li.className = "collection-item";

// // Add id
// li.id = "'new-item";

// // Add attribute
// li.setAttribute("title", "New Item");

// // Create text note and append
// li.appendChild(document.createTextNode("Hello World"));

// // Create new link element
// const link = document.createElement("a");
// // Add classes
// link.className = "delete-item secondary-content";
// // Add icon
// link.innerHTML = "<i class='fa fa-remove'></i>";

// // Append link into li
// li.appendChild(link);

// // Append li as child of ul

// document.querySelector("ul.collection").appendChild(li);

// console.log(li);

// Removing & Replacing Elements

// Replace elemnt
// const newHeading = document.createElement("h2");
// // Add id
// newHeading.id = "task-title"; 
// // New text node
// newHeading.appendChild(document.createTextNode("Task List"));

// // Get the old heading
// const oldHeading = document.getElementById("task-title");
// // Parent
// const cardAction = document.querySelector(".card-action");

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // Remove Element
// const lis = document.querySelectorAll("li");
// const list = document.querySelector("ul");

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // Classes and attributes
// const firstLi = document.querySelector("li:first-child");
// const link = firstLi.children[0];

// let val;
// //Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add("test");
// link.classList.remove("test");
// val = link;

// // Attributes

// val = link.getAttribute("href");
// val = link.setAttribute("href", "http://google.com");
// val = link.hasAttribute("href");
// link.setAttribute("title", "Google")
// val = link.hasAttribute("title");
// link.removeAttribute("title");
// val = link;

// console.log(val);

// EVENTS

// document.querySelector(".clear-tasks").addEventListener("click", function(e){
//   console.log("Hello World");
//   // e.preventDefault();
// });

// document.querySelector(".clear-tasks").addEventListener("click", onClick);

// function onClick(e) {
  // console.log("Clicked");
  // e.preventDefault();

//   let val;

//   val = e;

//   // Event target element
//   val = e.target;
//   val = e.target.id;
//   val = e.target.className;
//   val = e.target.classList;

//   // Event type
//   val = e.type;

//   // Timestamp
//   val = e.timeStamp;

//   // Coords of event relative to window
//   val = e.clientY;
//   val = e.clientX;

//   // Coords of event relative to element
//   val = e.offsetY;
//   val = e.offsetX;

//   console.log(val);
// };

// Mouse Events

// const clearBtn = document.querySelector(".clear-tasks");
// const card = document.querySelector(".card");
// const heading = document.querySelector("h5");

// Click
// clearBtn.addEventListener("click", runEvent);

// Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// Mousedown
// clearBtn.addEventListener("mousedown", runEvent);

// Mouseup
// clearBtn.addEventListener("mouseup", runEvent);

// Mouse enter
// card.addEventListener("mouseenter", runEvent);

// // Mouse leave
// card.addEventListener("mouseleave", runEvent);

// // Mouse over
// card.addEventListener("mouseover", runEvent);

// // Mouse out
// card.addEventListener("mouseout", runEvent);

// MOuse move
// card.addEventListener("mousemove", runEvent);

// // Mouse

// // Event Handler
// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);

//   heading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY}, 40)`;
// };

// Keyboard & Input Events

// const form = document.querySelector("form");
// const taskInput = document.getElementById("task");
// const heading = document.querySelector("h5");
// const select = document.querySelector("select");

// taskInput.value = "";

// form.addEventListener("submit", runEvent);

// Keydown
// taskInput.addEventListener("keydown", runEvent);

// Key up
// taskInput.addEventListener("keyup", runEvent);

// Key press
// taskInput.addEventListener("keypress", runEvent);

// Focus
// taskInput.addEventListener("focus", runEvent);

// Blur
// taskInput.addEventListener("blur", runEvent);

// Cut
// taskInput.addEventListener("cut", runEvent);

// Paste
// taskInput.addEventListener("paste", runEvent);

// Input
// taskInput.addEventListener("input", runEvent);

// Change event
// select.addEventListener("change", runEvent);

// function runEvent(e) {
//   console.log(`Event Type: ${e.type}`);

//   console.log(e.target.value);

  // heading.innerText = e.target.value;
  // Get input value
  // console.log(taskInput.value);

  // e.preventDefault();
// }

// Event Bubbling & Delegation

// document.querySelector(".card-title").addEventListener("click", function(){
//   console.log("card title")
// });

// document.querySelector(".card-content").addEventListener("click", function(){
//   console.log("card content")
// });

// document.querySelector(".card").addEventListener("click", function(){
//   console.log("card")
// });

// document.querySelector(".col").addEventListener("click", function(){
//   console.log("col")
// });


// Event Delegation

// const delItem = document.querySelector(".delete-item");

// delItem.addEventListener("click", deleteItem);

// document.body.addEventListener("click", deleteItem);

// function deleteItem(e) {
//   // console.log(e.target);
//   // if(e.target.parentElement.className === "delete-item secondary-content") {
//   //   console.log("delete item");
//   // }

//   if(e.target.parentElement.classList.contains("delete-item")) {
//     console.log("delete item");
//     e.target.parentElement.parentElement.remove();
//   }
// };

// Local & Session Storage

// Set local storage item
// localStorage.setItem("name", "John");
// localStorage.setItem("age", "30");


// set session storage item
// sessionStorage.setItem("name", "Beth");

// remove from storage
// localStorage.removeItem("name");

// get from storage
// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// // clear local storage
// localStorage.clear();

// console.log(name, age);

// document.querySelector("form").addEventListener("submit", function(e) {
//   const task = document.getElementById("task").value;

//   let tasks;

//   if(localStorage.getItem("tasks") === null) {
//     tasks = [];
//   } else {
//     tasks = JSON.parse(localStorage.getItem("tasks"));
//   }

//   tasks.push(task);

//   localStorage.setItem("tasks", JSON.stringify(tasks));
//   alert("Task saved");
//   e.preventDefault();
// });

// const tasks = JSON.parse(localStorage.getItem("tasks"));

// tasks.forEach(function(task) {
//   console.log(task);
// });