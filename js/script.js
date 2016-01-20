/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
var name;
name = 'Radhika';
    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."
var message;
message = 'Hello,' + name + '. ' + 'Very nice to meet you.';
    // Log the message to the console.  Use console.log()
console.log(message);
}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
var number;
number = 9;
    // Write a message (not just the number) to the console saying the value of the number
var message;
message = 'The number is ' + number;
console.log(message);
    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd
var msg;	
var num1 = number % 2;
if (num1 = 0) {
	msg = 'even';
} else {
	msg = 'odd';
}
console.log(msg);
}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number
	
var i;
for(i = 0; i <= 10; i++) {
	console.log(i);
}
}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
	
var numbers;
numbers = [22, -5, 10, 7, 25];
    // Write the array to the console
console.log(numbers);
    // Make a variable called total, set it to 0
var total;
total = 0;
    // Use a for loop to set total to the sum of all of the numbers in the array
var numbersLen = numbers.length;
var i;
for (i = 0; i < numbersLen; i++) {
	total += numbers[i];
}
    // Write a message to the console saying the value of total

console.log('The total is ' + total);
    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.

if ( total == 50 ) {
	console.log('Total is 50');
} else if ( total > 50 ) {
	console.log('Total is greater than 50');
} else {
	console.log('Total is less than 50');
}
}




/*
 * DO NOT MODIFY THE CODE BELOW
 */
assignmentName = "HW1 - Basic JavaScript"
console.log( assignmentName );
console.log();

console.log( "Say Hello" );
sayHello();
console.log();

console.log( "Even or Odd" );
evenOrOdd();
console.log();

console.log( "Count to 10" );
countToTen();
console.log();

console.log( "Add Numbers" );
addNumbers();
console.log();
