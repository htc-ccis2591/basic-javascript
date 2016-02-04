/*
 * Add code as indicated by the comments.
 * Be careful not to change or modify the existing code.
 */


function sayHello() {
                                                            
   
    // Make a variable called name and set it to your first name.
 
    var name = Phil
    
    //Make a variable called message and using the name variable from above,
 
    var message = name
 
    // set it to be something like:  "Hello, Mary.  Very nice to meet you."
 

document.getElementById("name").innerHTML = "Hello , Mary. Very nice to meet you.";
 

//function NameVariable(){
    
  var message(){
      
      var phrase = "Hello, name.  Very nice to meet you. "
      var name = phil
      return 'Phrase " +(phrase * name);
  }
    var msg = showPhrase()


    // Log the message to the console.  Use console.log()



}

function evenOrOdd() {

    // Make a variable called number, and set it to a number between 1 and 10

    var number = 8

    // Write a message (not just the number) to the console saying the value of the number

    var message = the number is 8

    // Use the modulus operator and an if statement to display a message
    // in the console that says whether the number is even or odd
    //p163
        var even = even
        var odd = odd 
        var msg
        
        if (score = even)(
        msg = 'even';)
            else{
                msg = 'odd';
            }
var el = document.get('answer')
el.textContent = msg;

}

function countToTen() {

    // Write a for loop to count from 1 to 10
    // Use console.log() inside the loop to write out each number
    //p175
    var scores = [1,2,3,4,5,6,7,8,9,10];
    var arrayLength = score.length;
    var msg ='';
    var i;
    
    for (i = 0; i <arrayLength)
    msg += scores[i] + '<br />';; i ++){
    
    
    for (var i = 0; i < 10; i++)
    console.log(i);

}
    
    document.getElementById('answer').innerHTML = msg;
    

function addNumbers() {

    // Make an array of 5 numbers, at least one number should be negative

        var score = [-3, 2, 3, 4, 5];                     //Array of scores
    
    // Write the array to the console

    
    
    console.log(score[4]);    //Displays the 5 arrays
    
    
    
    //Loop through the items in the array
    for (i = 0; < arrayLength; i++)
        {
            // add 1 to the current round
            //roundNumber = (i + 1);
            
            //write the current round to message
            //msg += 'Round' + roundNumber + ': ';
            
            //Get the score from the array
            
            //msg += scores[i] + '<br />';
            }
    
    document.getElementById('answer').innerHTML = msg;

    // Make a variable called total, set it to 0

var total = 0
    
    // Use a for loop to set total to the sum of all of the numbers in the array


    <p id="demo"></p>

    <Script>
    var total= [number0 + number1 + number2 + number3 + number4]
    var text ="";
    var i;
    for (i = 0; i < total.lenghth; i++) {
        text +=total[i] +<br>';
    }
    
    
    </script>


    // Write a message to the console saying the value of total

    document.getElementById("demo").innerHTML = text;
    
    // Use an if statement to write a message to the console that says
    // whether total is greater than, less than, or equal to 50.

    
    
    if (total >= 50){
    msg = 'The total is';
    +msg = 'greater then 50';
    if (total <= 50) {
    msg = 'The total is';
    +msg = 'less then 50';
    if (total = 50) {
    msg = 'The total is';
    +msg = 'equal to 50';
}
    var el = document.getElementById('answer');
    el.textContent = msg;
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
