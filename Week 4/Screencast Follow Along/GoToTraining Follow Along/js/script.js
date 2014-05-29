
//  Create a function that gives a random number


//alert("test");

//Prompt the user for a minimum value

//Create a variable to hold min
var minimum = prompt("Please type in a minimum number:");

//double check that min was recorded
//console.log(minimum);

//Validate that the user typed in a number and didn't leave it blank

//isNaN() - return true if it is a txt string and false if it is a number

while(isNaN(minimum) || minimum === ""){

    //Re-prompt the user for a number
    minimum = prompt("Please type in a minimum NUMBER:");

}

//prompt for a max value
var maximum = prompt("Please type in a maximum number:");

while(isNaN(maximum) || maximum === ""){

    //Re-prompt the user for a number
    maximum = prompt("Please type in a maximum NUMBER:");

}

