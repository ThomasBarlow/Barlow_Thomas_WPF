/*  Thomas Barlow
 Tuesday, May 20th 2014
 Activity: Conditionals Worksheet -- Movie Ticket Discount Checker
*/

/**********************
  Movie Ticket Check
**********************/

/*
   Regular ticket price $12.00 with out any discounts
   If you are a senior of 55 years or older or a child under 10 the price is $7.00
   Also if you are seeing the movie between 3pm and 5pm, the $7.00 discount applies.
*/

var age = prompt("What is your age?");
var time = prompt("What time will you be seeing the movie?");

if (time >= 3 && time <= 5)
{
    console.log("The ticket price is $7.00");
    alert("The ticket price is $7.00");

} else if ( age >= 55 || age <= 10)
{
    console.log("The ticket price is $7.00");
    alert("The ticket price is $7.00");

} else {
    console.log("The ticket price is $12.00");
    alert("The ticket price is $12.00");
}

