/*
    Thomas Barlow
    May 29, 2014
    Assignment - Functions_Industry
 */

//  This function will tell you how many boxwood plants you will need in order
//  to plant the perimeter of a specific garden

//  to find the perimeter of a square the math is length + length + height + height

//  variable to hold length
var gardenLength = prompt("What is the garden length: ");
//  validation check for input
while(isNaN(gardenLength) || gardenLength === ""){
    gardenLength = prompt("Please enter the garden LENGTH: ");
}
//  variable to hold height
var gardenHeight = prompt("What is the garden height: ");
//  validation check for input
while(isNaN(gardenHeight) || gardenHeight === ""){
    gardenHeight = prompt("Please enter the garden HEIGHT: ")
}
//  variable asking how wide boxwoods are
var boxwoodWidth = prompt("How wide are the boxwoods: ");
//  input validation
while(isNaN(boxwoodWidth) || boxwoodWidth === ""){
    boxwoodWidth = prompt("Please enter the individual boxwood WIDTH: ");
}

//  converts gardenHeight to a number for calculations
gardenHeight = Number(gardenHeight);
// converts gardenLength to a number for calculations
gardenLength = Number(gardenLength);
// converts boxwoodWidth to a number for calculations
boxwoodWidth = Number(boxwoodWidth);

//  function invocation
var plantArea = gardenPerimeter(gardenLength, gardenHeight);

//function returning perimeter
function gardenPerimeter(l, h){
    perimeter = l + l + h + h;
    return perimeter;
}

//  anonymous function making the final calculations of the program
var finalSolution = function(){
    return plantArea / boxwoodWidth;
};

console.log("You need to buy " + finalSolution() + " boxwood trees!");

//  There were probably many other ways to do this, but it was the best way I could
//  find to use an anonymous function for the credit