/*
    Thomas Barlow
    May 29, 2014
    Assignment - Functions_Industry
 */

//  This function will tell you how many boxwood plants you will need in order
//  to plant the perimeter of a specific garden

//  to find the perimeter of a square the math is length + length + height + height

//  variable to hold length
var gardenLength = prompt("What is the length: ");
//  variable to hold height
var gardenHeight = prompt("What is the height: ");
//  variable asking how wide boxwoods are
var boxwoodWidth = prompt("How wide are the boxwoods: ")

//  anonymous function returning perimeter
var gardenPerimeter = function(l, h){
    perimeter = l + l + h + h;
    return perimeter;
}