/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
    var name = "Phil."

    //Make a variable called message and using the name variable from above,
    var phrase = "hello my name is "
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."

    // Log the message to the console.  Use console.log()

console.log( "Hello," + name +  "Very nice to meet you.");

    
}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
var sun = 1

    // Write a message (not just the number) to the console saying the value of the number
              
console.log( "the number is " + sun +  "!");

// Do something with the object
var i = 1;

    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd
    if (i%2 == 1){
        console.log(i + " Currently is odd ");
    } 
else {
        console.log(i + " Currently is even ");
    }
} 



}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number
var text = "";
var i;
for (i = 1; i < 11; i++) {
    text += "The number is " + i + "<br>";
}
console.log("Current item is: " + text);

}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
array = ["-1", "2", "3", "4", "5"];

    // Write the array to the console

console.log("my array is " + array);
    // Make a variable called total, set it to 0
total = array[0];

    // Use a for loop to set total to the sum of all of the numbers in the array

sum = 0;
    
    for(i=1; i<=n; i++)
        
        sum = sum + i;
    
    return sum;


    // Write a message to the console saying the value of total

console.log("Total is: " + array);
    
    var elemt =[-1,2,3,4,5];
    var sum = 0;
    for(var i = 0; i <elemt.length;i++)
        {
            sum = sum + elemt[i];
        }
    
    console.log("sum: " + sum);
    
    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
function myFunction() {
    var greeting;
    var time = new Date().getHours();
    if (time < 50) {
        greeting = "less than";
    } else if (time > 50) {
        greeting = "greater than";
    } else {
        greeting = "equal to 50";
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
