/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
    var name= "Carl Brost!";


    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."

    var message = "Is my Name. Hello there~!";
    // Log the message to the console.  Use console.log()
    console.log(name+message);
}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
    var number = "4";

    // Write a message (not just the number) to the console saying the value of the number

    console.log("The Number Variable Iz"+number);
    // Use the modulus operator and an if statement to display a message
    function isEven(number){
        if (number%2 == 0)
            console.log("ITS EVEN!");
        else
            console.log("ITS FALSE!");
    }
    // in the console that says whether the number is even or odd
    




}

function countToTen() {
    var count;

    // Write a for loop to count from 1 to 10
     console.log("Starting the Loop~!"+"<br/>");
    // Use console.log() inside the loop to write out each number
    for (count = 0; count <= 10; )
    {
        console.log(count);
    }

}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
//Array
    var numberlist =[1,2,10,-5,4]
    var counter;
    var arraylength = numberlist.length;
    // Write the array to the console
    for (counter=0; counter <= arraylength; counter++)
    console.log(numberlist[counter] + "<br>");

    // Make a variable called total, set it to 0
    var total =(0)

    // Use a for loop to set total to the sum of all of the numbers in the array

    for (counter=0; counter<arraylength; counter++)
        {
        total= total+numberlist[counter];
        }
    // Write a message to the console saying the value of total
        
    console.log("The value of the total sum is:"+total);

    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
    if (total <=50)
    {
       console.log( "The total is less than 50");
    }
    if (total >= 50)
    {
        console.log("The total, is infact, more than fifty");
    }
    if (total == 50)
    {
        console.log("The total is actually EQUAL to fifty");
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
