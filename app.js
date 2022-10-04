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