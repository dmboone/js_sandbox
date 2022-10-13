// // Log to console

// console.log('Hello World');
// console.log(123);
// console.log(true);
// var greeting = 'Hello';
// console.log(greeting);
// console.log([1,2,3,4]);
// console.log({a:1, b:2});
// console.table({a:1, b:2});

// console.error('This is some error');
// console.clear();
// console.warn('This is a warning');
// console.time('Hello');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
//     console.log('Hello World');
// console.timeEnd('Hello');

/*
multi
line
comments
*/

//var, let, const

// var name = 'John Doe';
// console.log(name);
// name = 'Steve Smith';
// console.log(name);

// VAR - this is deprecated, try not to use
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// variable names can only be letters, numbers, _, $
// Can not start with number

// Multi word vars
// var firstName = 'John'; // Camel case (general use)
// var first_name = 'Sara'; // Underscore (php)
// var FirstName = 'Tom'; // Pascal case (object oriented classes)
// var firstname;

// LET - this is the choice for standard variables
// let nameLet = 'John Doe';
// console.log(nameLet);
// nameLet = 'Steve Smith';
// console.log(nameLet);

// CONST - can't change or be reassigned
// const nameConst = 'John Doe';
// console.log(nameConst);
// //nameConst = 'Steve Smith'; not allowed
// console.log(nameConst);
// //Cannot reassign
// //Have to assign a value

// const person = {  //we CAN change the data inside a const object, we just can't reassign a const object
//     name: 'John',
//     age: 30
// }

// person.name = 'Sarah'; // this is allowed!

// // person = {  //this is not allowed
// //     name: 'Sarah',
// //     age: 30
// // }

// console.log(person);

// const numbers = [1,2,3,4,5]; // can add to a const array, but cannot reasign the const array to a different array
// numbers.push(6); // allowed!

// // const numbers = [1,2,3,4,5,6]; // not allowed

// console.log(numbers);

// PRIMITIVE

// String
// const namePrim = 'John Doe';
// // Number
// const age = 45;
// //Boolean
// const hasKids = true;
// // Null
// const car = null;
// // Undefined
// let test;
// // Symbol
// const sym = Symbol();


// console.log(typeof namePrim);
// console.log(typeof age);
// console.log(typeof hasKids);
// console.log(typeof car); // you will get object because of a bug but it is indeed a primitive type
// console.log(typeof test);
// console.log(typeof sym); 

// REFERENCE TYPES - Objects
// Array
// const hobbies = ['movies', 'music'];
// // Object literal
// const address = {
//     city: 'Boston',
//     state: 'MA'
// }
// const today = new Date();

// console.log(typeof hobbies);
// console.log(typeof address);
// console.log(today);
// console.log(typeof today);

// TYPE CONVERSION
// let val;

// // Number to string
// val = 5;
// val = (4+4);

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); //only works on strings

// val = String(5);

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); //only works on strings

// // Bool to string
// val = String(true);

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); //only works on strings

// // Date to string
// val = String(new Date());

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.length); //only works on strings

// // Array to string
// val = String([1,2,3,4]);
// console.log(val);
// console.log(typeof val);
// console.log(val.length); //only works on strings

// // toString() method
// val = (5).toString();
// val = (true).toString();

// // String to number
// val = Number('5');

// // Output
// console.log(val);
// console.log(typeof val);
// console.log(val.toFixed(2)); // number of decimal points, only works on numbers

// val = Number(true);
// console.log(val); // gives us 1
// console.log(typeof val);

// val = Number(false);
// console.log(val); //gives us 0
// console.log(typeof val);

// val = Number(null);
// console.log(val); // gives us 0
// console.log(typeof val);

// val = Number('hello');
// console.log(val); // gives us NaN - Not a Number

// val = Number([1,2,3]);
// console.log(val); // gives us NaN - Not a Number

// val = parseInt('100');
// console.log(val);
// console.log(val.length);
// console.log(typeof val);

// val = parseInt('100.30');
// console.log(val);
// console.log(val.length);
// console.log(typeof val);

// val = parseFloat('100.30');
// console.log(val);
// console.log(val.length);
// console.log(typeof val);

// const val1 = 5;
// const val2 = 6;
// const sum = val1 + val2;
// console.log(sum);
// console.log(typeof sum);

// // String Coercion - changes 6 to a string and then concatenates it
// const val11 = String(5);
// const val22 = 6;
// const sum2 = val11 + val22;
// console.log(sum2);
// console.log(typeof sum2);

// NUMBERS AND THE MATH OBJECT
// const num1 = 100;
// const num2 = 50;
// let val;

// // Simple math with numbers
// val = num1 + num2; //add
// val = num1 * num2; //multiply
// val = num1 - num2; //subtract
// val = num1 / num2; //division
// val = num1 % num2; //remainder

// // Math Object
// val = Math.PI; //Pi
// val = Math.E; //Eulers Number (calc)
// val = Math.round(2.4);
// val = Math.ceil(2.4); // round up
// val = Math.floor(2.8); // round down
// val = Math.sqrt(64); // square root
// val = Math.abs(-3); // absolute value
// val = Math.pow(8, 2); // exponentials
// val = Math.min(2, 33, 4, 1, 55, 6, 3); //returns the min
// val = Math.max(2, 33, 4, 1, 55, 6, 3); //returns the max
// val = Math.random(); //random number decimal
// val = Math.random() * 20 + 1; // random number between 1 and 20
// val = Math.floor(Math.random() * 20 + 1); // random whole number between 1 and 20

// console.log(val);

// STRING METHODS AND CONCATENATION
// const firstName = 'William';
// const lastName = 'Johnson';
// age = 21;
// str = 'Hello there my name is Brad';
// tags = 'web design, development, programming';

// let ValidityState;

// val = firstName + lastName;

// // Concatenation
// val = firstName + ' ' + lastName;

// // Append
// val = 'Destiny ';
// val += 'Boone';

// val = 'Hello, my name is ' + firstName + ' and I am ' + age;

// // Escaping
// val = 'That\'s awesome, I can\'t wait';

// // Length
// val = firstName.length;

// // concat()
// val = firstName.concat(' ', lastName);

// // Change Case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// // Indexing a String
// val = firstName[0];

// // indexOf()
// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // charAt()
// val = firstName.charAt('2');

// // Get last char
// val = firstName.charAt(firstName.length - 1);

// // substring()
// val = firstName.substring(0,4);

// // slice() - normally used with arrays
// val = firstName.slice(0,4);
// val = firstName.slice(-3);

// // split()
// val = str.split(' ');
// val = tags.split(',');

// // replace()
// val = str.replace('Brad', 'Jack');

// // includes()
// val = str.includes('Hello'); // case sensitive

// console.log(val);

// TEMPLATE LITERALS
// const name = 'John';
// const age = 31;
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // Without template strings (es5)
// html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>Job: ' + job + '</li><li>City: ' + city + '</li></ul>';

// html = '<ul>' +
//     '<li>Name: ' + name + '</li>' +
//     '<li>Age: ' + age + '</li>' +
//     '<li>Job: ' + job + '</li>' + 
//     '<li>City: ' + city + '</li>' +
//     '</ul>';

// function hello() {
//     return 'hello';
// }

// // With tempate strings/literals (es6)
// html = `
//     <ul>
//         <li>Name: ${name}</li>
//         <li>Age: ${age}</li>
//         <li>Job: ${job}</li>
//         <li>City: ${city}</li>
//         <li>City: ${2+2}</li>
//         <li>City: ${hello()}</li>
//         <li>City: ${age > 30 ? 'Over 30' : 'Under 30'}</li>
//     <ul>
// `;

// document.body.innerHTML = html;

// ARRAYS AND ARRAY METHODS
// Create some arrays
// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple','Banana','Orange','Pear'];
// const mixed = [22,'Hello',true,undefined,null, {a:1, b:2}, new Date()];

// let val;

// // Get array length
// val = numbers.length;
// // Check if is array
// val = Array.isArray(numbers);
// // Get single value
// val = numbers[3];
// val = numbers[0];
// // Insert into array
// numbers[2] = 100;
// // Find index of value
// val = numbers.indexOf(36);
// val = numbers.indexOf(1);

// // MUTATING ARRAYS
// // Add on to end
// numbers.push(250);
// // Add on to front
// numbers.unshift(120);
// // Take off from end
// numbers.pop();
// // Take off from front
// numbers.shift();
// // Splice values
// numbers.splice(1,1);
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();
// // Concatenate array
// val = numbers.concat(numbers2);
// // Sorting
// val = fruit.sort();
// val = numbers.sort();

// // Use the compare function
// val = numbers.sort(function(x,y){
//     return x - y;
// });

// // Reverse sort
// val = numbers.sort(function(x,y){
//     return y - x;
// });

// // Find
// function under50(num){
//     return num < 50;
// }

// val = numbers.find(under50);

// console.log(numbers);
// console.log(val);

// OBJECT LITERALS
// const person = {
//     firstName: 'Steve',
//     lastName: 'Smith',
//     age: 30,
//     email: 'steve@aol.com',
//     hobbies: ['music', 'sports'],
//     address: {
//         city: 'Miami',
//         state: 'Florida'
//     },
//     getBirthYear: function(){
//         return 2017 - this.age;
//     }
// }

// let val;

// val = person;
// // Get specific value
// val = person.firstName;
// val = person['firstName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.getBirthYear();

// console.log(val);

// const people = [
//     {name: 'John', age: 30},
//     {name: 'Mike', age: 23},
//     {name: 'Nancy', age: 40}
// ]

// for(let i = 0; i < people.length; i++){
//     console.log(people[i].name);
// }

// DATES AND TIMES
// let val;

// const today = new Date(); // Date object
// let birthday = new Date('9-10-1981 11:25:00');
// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// val = today.getMonth(); // zero based!
// val = today.getDate();
// val = today.getDay(); // zero based, gives day of week starting with Sunday
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime(); // Amount of time that has passed since January 1, 1970

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);

// console.log(val);
// console.log(birthday);

// IF STATEMENTS AND COMPARISON OPERATORS
// const id = 100;

// EQUAL TO
// if(id == 101){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO
// if(id != 101){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // EQUAL TO VALUE AND TYPE
// if(id === 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// // NOT EQUAL TO VALUE AND TYPE
// if(id !== 100){
//     console.log('CORRECT');
// }else{
//     console.log('INCORRECT');
// }

// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The ID is ${id}`);
// } else {
//     console.log('NO ID');
// }

// GREATER OR LESS THAN (>, <, <=, >=)
// if(id > 200) {
//     console.log('CORRECT');
// }else {
//     console.log('INCORRECT');
// }

// IF ELSE

//const color = 'yellow';

// if(color === 'red') {
//     console.log('Color is red');
// }else if(color === 'blue') {
//     console.log('Color is blue');
// } else {
//     console.log('Color is not red or blue');
// }

// LOGICAL OPERATORS
// const name = 'Steve';
// const age = 25;

// // AND &&
// if(age > 0 && age < 12){
//     console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// } else{
//     console.log(`${name} is an adult`);
// }

// // OR ||
// if(age < 16 || age > 65){
//     console.log(`${name} can not run in race`);
// } else{
//     console.log(`${name} is registered for the race`);
// }

// // TERNARY OPERATOR
// console.log(id === 100 ? 'CORRECT' : 'INCORRECT');

// // WITHOUT BRACES
// if(id === 100)
//     console.log('CORRECT');
// else
//     console.log('INCORRECT');

// SWITCHES

// const color = 'red';

// switch(color){
//     case 'red':
//         console.log('Color is red');
//         break;
//     case 'blue':
//         console.log('Color is blue');
//         break;
//     default:
//         console.log('Color is not red or blue');
//         break;
// }

// switch(new Date().getDay()){
//     case 0:
//         day = 'Sunday';
//         break;
//     case 1:
//         day = 'Monday';
//         break;
//     case 2:
//         day = 'Tuesday';
//         break;
//     case 3:
//         day = 'Wednesday';
//         break;
//     case 4:
//         day = 'Thursday';
//         break;
//     case 5:
//         day = 'Friday';
//         break;
//     case 6:
//         day = 'Saturday';
//         break;
// }

// console.log(`Today is ${day}`);

// FUNCTION DECLARATIONS AND EXPRESSIONS

// FUNCTION DECLARATIONS

// function greet(firstName = 'John', lastName = 'Doe'){
//     //console.log('Hello');
//     // if(typeof firstName === 'undefined'){firstName = 'John'}
//     // if(typeof lastName === 'undefined'){lastName = 'Doe'}
//     return 'Hello ' + firstName + ' ' + lastName;
// }

//console.log(greet());

// FUNCTION EXPRESSIONS - putting a function as a variable assignment

// const square = function(x = 3){
//     return x*x;
// };

//console.log(square());

// IMMEDIATELY INVOKABLE FUNCTION EXPRESSIONS - IIFEs

// (function(){
//     console.log('IIFE Ran...');
// })();

// (function(name){
//     console.log(`Hello ${name}`);
// })('Brad');

// PROPERTY METHODS - when functions are put inside objects

// const todo = {
//     add: function(){
//         console.log('Add todo...');
//     },

//     edit: function(id){
//         console.log(`Edit todo ${id}`)
//     }
// }

// todo.delete = function(){
//     console.log('Delete todo...');
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// GENERAL LOOPS

// FOR LOOP

// for(let i = 0; i < 10; i++){
//     if(i === 2){
//         console.log('2 is my favorite number');
//         continue; // stops loop here and goes on to next iteration
//     }

//     if(i === 5){
//         console.log('Stop the loop');
//         break; // breaks out of the loop completely
//     }

//     console.log('Number ' + i);
// }

// WHILE LOOP

// let i = 0;

// while(i < 10){
//     console.log('Number ' + i);
//     i ++;
// }

// DO WHILE

// let i = 0;

// do {
//     console.log('Number ' + i);
//     i ++
// }

// while(i < 10);

// LOOP THROUGH ARRAY
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// for(let i= 0; i < cars.length; i++) {
//     console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){ // can take in index, iterator, and array
//     console.log(`${index}: ${car}`);
//     console.log(array);
// });

// MAP
// const users = [
//     {
//         id: 1,
//         name: 'John',
//     },
//     {
//         id: 2,
//         name: 'Sara',
//     },
//     {
//         id: 3,
//         name: 'Karen'
//     }
// ];

// const ids = users.map(function(user){
//     return user.id;
// })

// console.log(ids);

// FOR IN LOOP
// const user = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 40
// }

// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

// WINDOW METHODS / OBJECTS / PROPERTIES

// ALERT
//window.alert('Hello World'); the window part isn't needed

// PROMPT
// const input = prompt();
// alert(input);

// CONFIRM
// if(confirm('Are you sure?')){
//     console.log('YES');
// } else {
//     console.log('NO');
// }

// let val;

// // Outer height and width
// val = window.outerHeight;
// val = window.outerWidth;

// // Inner height and width - inside the scrollbars
// val = window.innerHeight;
// val = window.innerWidth;

// // Scroll Points - good for when you want to time animations to a certain scroll point
// val = window.scrollY;
// val = window.scrollX;

// // Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Redirect
// window.location.href = "http://google.com";

// Reload
//window.location.reload();

// History Object
// window.history.go(0);
// val = window.history.length;

// // Navigator Object - deals with the browser
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

// BLOCK SCOPE

// Global Scope
// var a = 1;
// let b = 2;
// const c = 3;

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log('Function Scope: ', a, b, c);
// }

//test();

// if(true){
//     // Block Scope
//     var a = 4; // this actually changes the global variable! DON'T USE VAR
//     let b = 5; // let and const have a block level scope so better to use
//     const c = 6;
//     console.log('If Scope: ', a, b, c);
// }

// for(let a = 0; a < 10; a++){ // let will not change the global variable
//     console.log(`Loop: ${a}`);
// }

// console.log('Global Scope: ', a, b, c);

//  SECTION 3 DOM MANIPULATION AND EVENTS
// let val;

// val = document;
// val = document.all;
// val = document.all[0];
// val = document.all[1];
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.doctype;
// val = document.domain;
// val = document.URL;
// val = document.characterSet;
// val = document.contentType;

// val = document.forms;
// val = document.forms[0];
// val = document.forms[1];
// val = document.forms[0].id;
// val = document.forms[0].method;
// val = document.forms[0].action;

// val = document.links;
// val = document.links[0];
// val = document.links[0].id;
// val = document.links[0].className;
// val = document.links[0].classList;

// val = document.images;

// val = document.scripts;
// val = document.scripts[2].getAttribute('src');

// let scripts = document.scripts;

// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'));
// });

// console.log(val);

// DOM SELECTORS

// // document.getElementById()
// console.log(document.getElementById('task-title'));

// // Get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);

// const taskTitle = document.getElementById('task-title');

// // Change styling
// taskTitle.style.background = '#333';
// taskTitle.style.color = '#fff';
// taskTitle.style.padding = '5px';
// //taskTitle.style.display = 'none';

// // Change content
// taskTitle.textContent = 'Task List';
// taskTitle.innerText = 'My Tasks';
// taskTitle.innerHTML = '<span style="color:red">Task List</span>';

// // document.querySelector() - only works for ONE element

// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'));

// document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';

// document.querySelector('li:last-child').style.color = 'red';
// document.querySelector('li:nth-child(3)').style.color = 'yellow';
// document.querySelector('li:nth-child(4)').textContent = 'Hello World';
// document.querySelector('li:nth-child(odd)').style.background = '#ccc'; // these two wont work because query selector only works for one element
// document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// document.getElementsByClassName

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[0].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');

// document.getElementsByTagName
// let lis = document.getElementsByTagName('li');
// console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// // Convert HTML Collection into array
// lis = Array.from(lis);
// lis.reverse();
// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// document.querySelectorAll
// const items = document.querySelectorAll('ul.collection li.collection-item');

// console.log(items);
// items.forEach(function(item, index){
//         console.log(item.className);
//         item.textContent = `${index}: Hello`;
// });

// const liOdd = document.querySelectorAll('li:nth-child(odd');
// const liEven = document.querySelectorAll('li:nth-child(even');

// liOdd.forEach(function(li){
//        li.style.background = '#ccc';
// });

// for(let i = 0; i < liEven.length; i++){
//     liEven[i].style.background = '#f4f4f4';
// }

// TRAVERSING THE DOM - moving up and down the DOM
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');

// val = listItem;
// val = list;

// // Get child nodes - node list but includes text nodes and kinds of stuff
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// // Node Type Number Meanings
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text Node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Document itself


// // Get children element nodes - doesn't include text nodes but returns as html collection
// val = list.children; //we use children more often
// val = list.children[1];
// val = list.children[1].textContent = 'Hello';
// // Children of children
// val = list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];

// // first child
// val = list.firstChild;
// val = list.firstElementChild; // use this more often

// // Last child
// val = list.lastChild;
// val = list.lastElementChild; // use this more often

// // Count child elements
// val = list.childElementCount;

// // Get parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // Get next sibling
// val = listItem.nextSibling;
// val = listItem.nextElementSibling; // use this more often
// val = listItem.nextElementSibling.nextElementSibling;

// // Get prev sibling
// val = listItem.previousSibling;
// val = listItem.previousElementSibling; // use this more often

// console.log(val);

// CREATING ELEMENTS

// Create element
// const li = document.createElement('li');

// // Add class
// li.className = 'collection-item';

// // Add id
// li.id = 'new-item';

// // Add attribute
// li.setAttribute('title', 'New Item');

// // Create text node and append
// li.appendChild(document.createTextNode('Hello World')); // inserts text inside the li item

// // Create new link element
// const link = document.createElement('a');
// //Add classes
// link.className = 'delete-item secondary-content';
// // Add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';
// // Append link into li
// li.appendChild(link);

// // Append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// REMOVING AND REPLACING ELEMENTS

// Replace Element

// // Create Element
// const newHeading = document.createElement('h2');
// // Add id
// newHeading.id = 'task-title';
// // New text node
// newHeading.appendChild(document.createTextNode('Task List'));

// // Get the old heading
// const oldHeading = document.getElementById('task-title');
// // Parent
// const cardAction = document.querySelector('.card-action');

// // Replace
// cardAction.replaceChild(newHeading, oldHeading);

// // REMOVE ELEMENT
// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// // Remove list item
// lis[0].remove();

// // Remove child element
// list.removeChild(lis[3]);

// // CLASSES AND ATTR
// const firstLi = document.querySelector('li:first-child');
// const link = firstLi.children[0];

// let val;

// // Classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// val = link.classList.add('test');
// val = link.classList.remove('test');
// val = link;

// // Attributes
// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// val = link.hasAttribute('href');
// link.setAttribute('title', 'Google')
// val = link.hasAttribute('title');
// val = link.removeAttribute('title');

// console.log(val);

// EVENT LISTENERS AND THE EVENT OBJECT
// document.querySelector('.clear-tasks').addEventListener('click',
// function(e){
//     console.log('Hello World');
//     //e.preventDefault();
// });

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// function onClick(e) {
//     //console.log('Clicked');

//     let val;

//     val = e;

//     // Event target element
//     val = e.target;
//     val = e.target.id;
//     val = e.target.className;
//     val = e.target.classList;

//     //e.target.innerText = 'Hello';

//     // Event Type
//     val = e.type;

//     // Timestamp
//     val = e.timeStamp;

//     // Coordinates event relative o the window
//     val = e.clientY;
//     val = e.clientX;

//     // Cordinates event relative to the element
//     val = e.offsetY;
//     val = e.offsetX;

//     console.log(val);
// }

// // MOUSE EVENTS
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// // Click
// clearBtn.addEventListener('click', runEvent);

// // Doubleclick
// clearBtn.addEventListener('dblclick', runEvent);

// // Mouse Down - click and hold
// clearBtn.addEventListener('mousedown', runEvent);

// // Mouse Up - when release mouse
// clearBtn.addEventListener('mouseup', runEvent);

// // Mouse Enter - drag mouse into button, only when you enter the parent element completely 
// clearBtn.addEventListener('mouseenter', runEvent);

// // Mouse Leave - drag mouse out of button, only when you leave the parent element completely 
// clearBtn.addEventListener('mouseleave', runEvent);

// // Mouse Over - when you go to the parent element from another element inside of the parent element
// clearBtn.addEventListener('mouseover', runEvent);

// // Mouse Out - when you go to another element inside of the parent element
// clearBtn.addEventListener('mouseout', runEvent);

// // Mousemove - any movement inside of an element
// clearBtn.addEventListener('mousemove', runEvent);

// // Event Handler
// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

//     document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 4)`;
// }

// KEYBOARD AND INPUT EVENTS
// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// taskInput.value = ''; // run after submitting form to clear it out

// form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus - click into an input
// taskInput.addEventListener('focus', runEvent);

// Blur - click outside of an input
// taskInput.addEventListener('blur', runEvent);

// Cut
// taskInput.addEventListener('cut', runEvent);

// Paste
// taskInput.addEventListener('paste', runEvent);

// Input - fires off on any of the above inputs
// taskInput.addEventListener('input', runEvent);

// Change - used only on <select> list
// select.addEventListener('change', runEvent);

// function runEvent(e){
//     console.log(`EVENT TYPE: ${e.type}`);

//     // console.log(e.target.value); // Log everything that is typed on keydown

//     // heading.innerText = e.target.value;

//     // Get input value
//     // console.log(taskInput.value);

//     // e.preventDefault(); - if you get error when clicking add ask
// }

// EVENT BUBBLING AND EVENT DELEGATION

// EVENT BUBBLING - passes the event up to the parents; bubbles up the dom
// document.querySelector('.card-title').addEventListener('click', function(){
//     console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click', function(){
//     console.log('card content');
// });

// document.querySelector('.card').addEventListener('click', function(){
//     console.log('card');
// });

// document.querySelector('.col').addEventListener('click', function(){
//     console.log('col');
// });

// EVENT DELEGATION - passes the event down to the children; delegates down the dom
// Used when action only works on first item instead of all that have that same class/etc.
// Use when you have dynamically added something to the dom through javascript
// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem (e) {
//     // if(e.target.parentElement.className === 'delete-item secondary-content'){
//     //     console.log('delete item');
//     // }

//     if(e.target.parentElement.classList.contains('delete-item')){ // best way in this scenario
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }
// }

// LOCAL AND SESSION STORAGE

// Set Local Storage Item - gone once you actively remove it yourself
// localStorage.setItem('name', 'John');
// localStorage.setItem('age', '30');

// Remove from Storage
// localStorage.removeItem('name');

// Get from Storage
// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');

// Clear Local Storage
// localStorage.clear();

// Set Session Storage Item - gone after you close the browser
// sessionStorage.setItem('name', 'Beth');

// document.querySelector('form').addEventListener('submit', function(e){
//     const task = document.getElementById('task').value;

//     let tasks;

//     if(localStorage.getItem('tasks') === null){
//         tasks = [];
//     } else {
//         tasks = JSON.parse(localStorage.getItem('tasks'));
//     }

//     tasks.push(task);

//     localStorage.setItem('tasks', JSON.stringify(tasks));

//     alert('Task saved');

//     e.preventDefault();
// });

// const tasks =   JSON.parse(localStorage.getItem('tasks'));

// tasks.forEach(function(task){
//     console.log(task);
// });

// ARROW FUNCTIONS (es6)

// How we've been doing functions
// const sayHello = function(){
//     console.log('Hello');
// }

// Arrow function
// const sayHello = () => {
//     console.log('Hello');
// }

// One line function does not need braces
// const sayHello = () => console.log('Hello');

// One line return
// const sayHello = () => 'Hello'; // returns Hello
// console.log(sayHello());

// Return object
// const sayHello = () => ({msg: 'Hello'});
// console.log(sayHello());

// Single param does not need parenthesis
// const sayHello = (name) => console.log(`Hello ${name}`);
// sayHello('Destiny');

// Multiple params need parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);
// sayHello('Destiny', 'Boone');

// const users = ['Nathan', 'John', 'William'];
// const nameLengths  = users.map(function(name){
//     return name.length;
// });

// Shorter
// const nameLengths  = users.map((name) => {
//     return name.length;
// });

// Shortest
// const nameLengths = users.map(name => name.length);

// console.log(nameLengths);

// ASYNC & AWAIT (es7)
// async function myFunc(){ // putting async in front automatically creates a Promise
//     const promise = new Promise((resolve, reject)=>{
//         setTimeout(() => resolve('Hello'), 1000);
//     });

//     const error = false; // toggle for error

//     if(!error){
//         const res = await promise; // Wait until promise is resolved
//         return res;
//     } else{
//         await Promise.reject(new Error('Something went wrong'));
//     }

    
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));

// 
// async function getUsers(){
//     // await response of the fetch call
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');

//     // only proceed once its resolved
//     const data = await response.json();

//     // only proceed once second promise is resolved
//     return data;
// }

// getUsers().then(users => console.log(users));

// ERROR HANDLING WITH TRY...CATCH
// const user = {email: 'jdoe@gmail.com'};

// try{
    // // will produce ReferenceError
    // myFunction();

    // // will produce TypeError
    // null.myFunction(); 

    // // SyntaxError
    // eval('Hello World');

    // //URIError
    // decodeURIComponent('%');

    // if(!user.name){
    //     // throw 'User has no name';
    //     throw new SyntaxError('User has no name')
    // }
// }catch(e){ // takes in an error object
    // console.log(`User Error: ${e.message}`);
    // console.log(e);
    // console.log(e.message);
    // console.log(e.name);
    // console.log(e instanceof ReferenceError); // test the type of error
    // console.log(e instanceof TypeError);
    // program will continue after handling the error!
// } finally {
//     console.log('Finally runs regardless of result...')
// }

// console.log('Program continues...');

// REGULAR EXPRESSIONS - FUNCTIONS
// let re;
// re = /hello/;
// re = /hello/i; // i = case insensitive
// re = /hello/g; // Global search

// console.log(re);
// console.log(re.source);

// exec() - Return result in an array or null
// const result = re.exec('brad hello world');
// const result = re.exec('hell world'); // will return null
// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Returns true or false
// re = /hello/i; // makes case insensitive
// const result = re.test('Hello'); // test is case sensitive
// console.log(result);

// match() - Return result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// search() - Returns index of the first match, if not found returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const newStr = str.replace(re, 'Hi');
// console.log(newStr);

// REGULAR EXPRESSIONS - METACHARACTER SYMBOLS

// let re;
// // Literal Characters
// re = /hello/;
// re = /hello/i;

// // Metacharacter Symbols
// re = /^h/i; // Must start with
// re = /orld$/i; // must end with
// re = /^hello$/i; // must begin and end with
// re = /h.llo/i; // matches any ONE character
// re = /h*llo/i; // matches any character 0 or more times
// re = /gre?a?y/i; // optional character
// re = /gre?a?y\?/i; // escape character


// // Brackets [] - Character Sets
// re = /gr[ae]y/i; // must be an a or e
// re = /[GF]ray/; // must be an G or F
// re = /[^GF]ray/; // match anything except a G or F
// re = /[A-Z]ray/; // match any uppercase letter
// re = /[a-z]ray/; // match any lowercase letter
// re = /[A-Za-z]ray/; // match any letter
// re = /[0-9]ray/; // match any digit
// re = /[0-9][0-9]ray/; // match any digit

// // Braces {} - Quantifiers
// re = /Hel{2}o/i; // Must occur exactly {n} amount of times
// re = /Hel{2,4}o/i; // Must occur exactly {n} amount of times
// re = /Hel{2,}o/i; // Must occur at least {n} times

// // Parenthesis () - Grouping
// re = /^([0-9]x){3}$/;


// // Shorthand Character Classes
// re = /\w/; // Word character - alphanumeric or _
// re = /\w+/; // + is one or more
// re = /\W/; // Non-Word character
// re = /\d/; // Match any digit
// re = /\d+/; // Match any digit 0 or more times
// re = /\D/; // Match any Non-digit
// re = /\s/; // Match whitespace char
// re = /\S/; // Match non-whitespace char
// re = /Hell\b/i; // Word boundary

// // Assertions
// re = /x(?=y)/; // Match x only if followed by y
// re = /x(?!y)/; // Match x only if not followed by y

// // String to match
// const str = 'Hello';

// // Log Results
// const result = re.exec(str);
// console.log(result);

// function reTest(re, str){
//     if(re.test(str)){
//         console.log(`${str} matches ${re.source}`);
//     } else {
//         console.log(`${str} does NOT match ${re.source}`);
//     }
// }

// reTest(re, str);

// ITERATORS
// function nameIterator(names){
//     let nextIndex = 0;

//     return {
//         next: function(){
//             return nextIndex < names.length ?  
//             {value: names[nextIndex++], done: false} : 
//             {done: true}
//         }
//     }
// }

// // Create an array of names
// const namesArr = ['Jack', 'Jill', 'John'];
// // Init iterator and pass in the names array
// const names = nameIterator(namesArr);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);

// GENERATORS
// function* sayNames(){ // the asterisk makes this a generator
//     yield 'Jack';
//     yield 'Jill';
//     yield 'John';
// }

// const name = sayNames();

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next().value);

// ID Creator
// function* createIds(){
//     let index =1;

//     while(true){
//         yield index++;
//     }
// }

// const gen = createIds();

// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);
// console.log(gen.next().value);

// Create a symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym1);
// console.log(sym2);
// console.log(typeof sym2);
// console.log(Symbol() === Symbol()); // symbols can never be the same
// console.log(Symbol('123') === Symbol('123')); // symbols can never be the same
// console.log(`Hello ${String(sym1)}`);
// console.log(`Hello ${sym1.toString()}`);

// Unique Object Keys
// const KEY1 = Symbol();
// const KEY2 = Symbol('sym2');

// const myObj = {};

// myObj[KEY1] = 'Prop1';
// myObj[KEY2] = 'Prop2';
// myObj.key3 = 'Prop3';
// myObj.key4 = 'Prop4';

// console.log(myObj[KEY1]);
// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
// for(let i in myObj){
//     console.log(`${i}: ${myObj[i]}`); // only Prop3 and Prop4 will appear
// }

// Symbols are ignored by JSON.stringify
// console.log(JSON.stringify({key: 'prop'}));
// console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));

// DESTRUCTURING
// let a, b;
// [a, b] = [100, 200];
// // Rest Pattern
// [a, b, c, ...rest] = [100, 200, 300, 400, 500];


// console.log(a);
// console.log(b);
// console.log(c);
// console.log(rest);

// ({a, b} = {a: 100, b: 200, c: 300, d: 400, 3: 500});
// ({a, b, ...rest} = {a: 100, b: 200, c: 300, d: 400, 3: 500});

// console.log(a,b);
// console.log(rest);

// Array Destructuring
// const people = ['John', 'Beth', 'Mike'];
// const [person1, person2, person3] = people;
// console.log(person1, person2, person3);

// Parse array returned from function
// function getPeople(){
//     return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;
// [person1, person2, person3] = getPeople()
// console.log(person1, person2, person3);

// OBJECT DESTRUCTURING
// const person = {
//     name: 'John Doe',
//     age: 32,
//     city: 'Miami',
//     gender: 'Male',
//     sayHello: function(){
//         console.log('Hello');
//     }
// }

// Old ES5
// const name = person.name,
//     age = person.age,
//     city = person.city;

// New ES6 Destructuring
// const { name, age, city } = person;
// const { name, age, city, sayHello } = person;

// console.log(name, age, city);

// sayHello();