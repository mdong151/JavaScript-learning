/*****************************
* Variables and data types
*/
console.log('Hello Word!!');

var firstName = 'John';
console.log(firstName);
var lastName = 'Smith';
var age = 28;
var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);
//type coercion javascript
console.log(firstName + ' ' + age);

var isMarried;
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' +
    job + '. Is he married? ' + isMarried);

// Variable mutation

age = 'twenty eight';
job = 'Driver';

alert(firstName + ' is a ' + age + ' year old ' +
    job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name');
console.log(firstName + ' ' + lastName)