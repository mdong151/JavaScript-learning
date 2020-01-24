// /*****************************
// * Variables and data types
// */
// console.log('Hello Word!!');

// var firstName = 'John';
// console.log(firstName);
// var lastName = 'Smith';
// var age = 28;
// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'Teacher';
// console.log(job);
// //type coercion javascript
// console.log(firstName + ' ' + age);

// var isMarried;
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' +
//     job + '. Is he married? ' + isMarried);

// // Variable mutation

// age = 'twenty eight';
// job = 'Driver';

// alert(firstName + ' is a ' + age + ' year old ' +
//     job + '. Is he married? ' + isMarried);

// var lastName = prompt('What is his last name');
// console.log(firstName + ' ' + lastName)

/**************************** 
* Basic operator
*/

// Math operators
// var now = 2018;
// var yearJohn = now - 28;
// var yearMark = now - 33;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now / 10);

// Logical operators

// var now, ageJohn, ageMark;
// now = 2018

// ageJohn = 28;
// ageMark = 33;

// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// // typeof operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof 'abcdef');

// var x;
// console.log(typeof x);


// operator precedence - which operates will be executed first?
// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// var isFullAge = now - yearJohn >= fullAge;
// console.log(isFullAge);

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;
// console.log(average);

// // Multiple assignments
// var x, y;
// x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators
// // x = x * 2;
// x *= 2;
// console.log(x);
// x += 10;
// console.log(x);
// x++;
// console.log(x);

/****************************
 * if / else statements
 */
// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)')
// }

// var isMarried = true;

// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)')
// }

// var firstName = 'John';
// var age = 20;

// if (age < 13) {
//     console.log(firstName + ' is a boy!');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager!')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man!')
// } else {
//     console.log(firstName + ' is a man!');
// }

// Ternary Operator
// var firstName = 'John';
// var age = 17;

// age >= 18 ? console.log(firstName + ' can drink beer.') : console.log(firstName + ' can drink juice.');

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(firstName + '\'s drink is ' + drink + '.')

// // Switch statement
// var job = 'Instructor';
// switch (job) {
//     case 'Teacher':
//     case 'teacher':
//     case 'Instructor':
//         console.log(firstName + ' teaches kids how to code.');
//         break;
//     case 'Driver':
//         console.log(firstName + ' drivers an Uber.');
//         break;
//     case 'Designer':
//         console.log(firstName + ' designs beautifull website.');
//         break;
//     default:
//         console.log(firstName + ' does something else.');
// }

// age = 30;
// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy!');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager!');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man!')
//         break;
//     default:
//         console.log(firstName + ' is a man!');
// }


// if (age < 13) {
//     console.log(firstName + ' is a boy!');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager!')
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man!')
// } else {
//     console.log(firstName + ' is a man!');
// }


// Truthy and Falsy values
// Falsy values are: undefined, null, 0, '', NaN ==> return false in if/else condition
// Truthy value: NOT falsy values

// var height;
// height = 23;
// if (height || height === 0) {
//     console.log('Variable is denfined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// // Equality operators: strict and non-strict, best practice to use ===
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }

/****************************
 * Functions
 */
// function calculateAge(birthYear) {
//     return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// console.log(ageJohn);

// function yearsUntilRetirement(year, firstName) {
//     var age = calculateAge(year);
//     var retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(firstName + ' retires in ' + retirement + ' years');
//     } else {
//         console.log(firstName + ' is already retired.');
//     }

// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1944, 'Mike');
// yearsUntilRetirement(1995, 'Marry');

/*****************
 * Function Statements and Expressions
 */

// Function decoration
// function whatDoYouDo(job, firstName){}

// Function expression
// var whatDoYouDo = function (job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches kids how to code.';
//         case 'driver':
//             return firstName + ' drives Uber taxi.';
//         case 'designer':
//             return firstName + ' designs websites.';
//         default:
//             return firstName + ' does something else';
//     }
// }

// console.log(whatDoYouDo('teacher', 'john'));


/******************
 * Arrays
 */

// var names = ['John', 'Mark', 'Jane'];
// var year = new Array(1990, 1969, 1648);

// console.log(names);

// names[1] = 'Ben';
// names[names.length] = 'Marry'

// console.log(names);
// console.log(names.length);

// // Different data types

// var john = ['John', 'Smith', 1990, 'designer', false];

// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.shift();
// console.log(john);

// var index = john.indexOf(19900);
// console.log(index);

// var isDesigner = john.indexOf('designer') === -1 ? 'John is not a designer' : 'John is a designer';
// console.log(isDesigner);

/*******************
 * Objects and properties
 */
// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false
// }
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // new Object syntax
// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

/********************
 * Objects and methods
 */
// var john = {
//     firstName: "John",
//     lastName: "Smith",
//     birthYear: 1992,
//     family: ['Jane', 'Mark', 'Bob', 'Emily'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function () {
//         this.age = 2018 - this.birthYear;
//     }
// }
// john.calcAge();
// console.log(john);

/*********************
 * Loops and iteration
 */
// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
//
// var i = 0;
// while (i < john.length) {
//     console.log(john[i]);
//     i++;
// }

var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];

// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') {
//         continue;
//     }
//     console.log(john[i]);
// }
// for (var i = 0; i < john.length; i++) {
//     if (typeof john[i] !== 'string') {
//         break;
//     }
//     console.log(john[i]);
// }

for (var i = john.length; i > 0; i--) {
    console.log(john[i - 1])
}
