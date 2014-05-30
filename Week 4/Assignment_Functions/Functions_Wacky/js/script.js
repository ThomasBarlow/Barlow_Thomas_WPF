/*
    Thomas Barlow
    May 29, 2014
    Assignment - Functions_Wacky
 */

//  this will calculate how many burgers will fit onto your grill given the area
//  of the grill and the circumference of the burgers

var grillLength = prompt("How long is your grill?");
//  conditional checks to see if you entered the correct information
while(isNaN(grillLength) || grillLength === ""){
    grillLength = ("Please enter the Length of your grill: ");
}
//  this sets variable to a number for proper calculations
grillLength = Number(grillLength);

//  variable for the width of the grill
var grillWidth = prompt("How wide is your grill?");
//  validation on input
while(isNaN(grillWidth) || grillWidth === ""){
    grillWidth = prompt("Please enter the width of your grill: ");
}
//  sets to number
grillWidth = Number(grillWidth);

//  variable for burger width
var burgerWidth = prompt("How wide are the burgers?");
//  validates input
while(isNaN(burgerWidth) || burgerWidth === ""){
    burgerWidth = prompt("Please enter the burger width: ");
}
//  turn burger width into a number and divide by 2 for the radius
burgerWidth = Number(burgerWidth) / 2;


//  function for grill area
function grillArea(l, w){
    var area = l * w;
    return area;
}

// function for burger area
function burgerArea(radius){
    var area = 3.14 * (radius * radius);
    return area;
}

//  function call
var burgerToFit = Math.floor(grillArea(grillLength, grillWidth) / burgerArea(burgerWidth));

console.log("You can fit " + burgerToFit + " burgers onto the grill at once!")