/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */

function sayHello() {

    // Make a variable called name and set it to your first name.
    //Make a variable called message and using the name variable from above,
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."
    // Log the message to the console.  Use console.log()
    var greeting = 'Hello ';
    var name = 'Jim';
    var message = ', Very nice to meet you.';
    var msg = greeting + name + message;
    console.log(msg);

}



function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10
    // Write a message (not just the number) to the console saying the value of the number
    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd

    //var even = [2, 4, 6, 8];
    //var odd = [1, 3, 5, 7, 9];
    var number = 7;
    var message = 'The number is '
    var msg = message + number;
    console.log(msg)

    if(number % 2 == 0) 
        {
        console.log("Even");
        }
        else 
        {
        console.log("Odd!");
        }

       


        
}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number
    for(var i = 0; i <= 10; i++)
        
        {
            console.log(i)
        }




}

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative
    // Write the array to the console
    // Make a variable called total, set it to 0
    // Use a for loop to set total to the sum of all of the numbers in the array
    // Write a message to the console saying the value of total
    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.
    
    var nums = [24, -34, 47, 23, 9];
    var total = 0;
    var msg = " "
    console.log(nums)

   
    for (i = 0; i < nums.length; i++) 
        {
          total = total + nums[i];
            
        }
        console.log("The total is: " + total) 
        if(total > 50)
          
            {
            msg = "The total is greater than 50";
            }
            else if(total < 50)
                {
                msg = "The total is less than 50";
                }
            else
                {
                msg = "The total is equal to 50";
                }
            

            console.log(msg)

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
