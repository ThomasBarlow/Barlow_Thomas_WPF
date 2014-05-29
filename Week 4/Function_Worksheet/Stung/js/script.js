//  Thomas Barlow
//  Thursday, May 29
//  Function Worksheet

/*
    It takes 8.666666667 bee stings per pound to kill an animal
    Calculate how many bee stings are needed to kill an animal in a function.
*/

//  Create a variable prompting the user from the Victim's weight (in pounds)
var victimWeight = prompt("Please enter a weight in pounds: ");

//  While loop checking to see if the user input a number for the prompt
while(isNaN(victimWeight)){
    //   if number wasn't entered before, re-prompt for a number
    victimWeight = prompt("Please enter a NUMBER: ");
}

//  function call for beeSting placing the result in victimSting
var victimSting = beeSting(victimWeight);

//  Function to determine amount of stings to kill the weight
//  create beeSting function with "weight" as the parameters
function beeSting(weight){
    //  create a variable to hold the weight times bee stings needed per pound
    var numberOfStings = weight * 8.666666667;
    //  return the result from the function
    return numberOfStings;
}

console.log("It takes " + victimSting + " bee stings to kill this animal");



