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
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple','Banana','Orange','Pear'];
const mixed = [22,'Hello',true,undefined,null, {a:1, b:2}, new Date()];

let val; 

console.log(val);

