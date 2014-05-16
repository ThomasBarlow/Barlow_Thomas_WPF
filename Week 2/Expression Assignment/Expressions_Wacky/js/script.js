// Expression Assignment -- Wacky

/* This small script will determine how much sunscreen a person will have to by
    for the season based on how much they apply daily and the amount of sunscreen in the
    tube.  Questions asked will be: How many months will you be using sunscreen?  How many
    times per day do you apply? How many ounces do you apply each time?  How many ounces
    are in one tube?
 */

var months = prompt("How many months will you need to use sunscreen?");
var perDay = prompt("How many times per day will you apply your sunscreen?");
var apply = prompt("How many ounces do you apply each time?");
var bottleOunces = prompt("How many ounces per bottle?");

var ouncesPerMonth = perDay * apply * 30;
var totalOunces = ouncesPerMonth * months;
var bottlesNeeded = Math.ceil(totalOunces / bottleOunces);

console.log("For " + months + " months of sunscreen use, applying it " + perDay + " times per day and " +
            "using " + apply + " ounces each application, " + bottlesNeeded + " bottles are needed to get" +
            " you through the season.");
alert("For " + months + " months of sunscreen use, applying it " + perDay + " times per day and " +
    "using " + apply + " ounces each application, " + bottlesNeeded + " bottles are needed to get" +
    " you through the season.");
