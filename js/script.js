/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
    var name = 'David';

    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."
    var message = "Hola, " + name + ". Mucho gusto.";

    // Log the message to the console.  Use console.log()
    console.log(message);


}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
    var number = 7;

    // Write a message (not just the number) to the console saying the value of the number
    console.log("The number is " + number + ".");

    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd
    var msg;
    if (number%2 == 0) {
        msg = number + " is even.";
    }
    else {
        msg = number + " is odd.";
    }
    
    console.log(msg);



}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number
    var msg = "";
    for (var i=1; i<=10; i++){
        if (i>1){msg = msg + ", "}
        msg = msg += i
    }

    console.log(msg);


}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative   
    // Write the array to the console
    var fiveNumbers = [34, 44, -8,11,-256];
    console.log(fiveNumbers);

    // Make a variable called total, set it to 0
    var total = 0;

    // Use a for loop to set total to the sum of all of the numbers in the array
    for (var i=0; i<5; i++){
        total = total += fiveNumbers[i];
    }



    // Write a message to the console saying the value of total
    console.log("The total of my five numbers is " + total);

    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
    var stat;
    if (total > 50){
        stat = " is greater than ";
    }
    else {
        if (total < 50){
            stat = " is less than ";
        }
        else{
            stat = " is equal to ";
        }
    }
    
    console.log(total + stat + 50);

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
