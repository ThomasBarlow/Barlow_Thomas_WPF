/*
    Thomas Barlow
    Tuesday, May 21th 2014
    Assignment: Conditionals -- Industry Related
 */


/*  This simple script will inform the user the price of their coffee based on what size cup and what type of
    coffee they ordered.
 */

// Prompt user for size of coffee
var coffeeSize = prompt("What size coffee would you like?  Please enter 'S' for small or 'L' for large");

//  Prompt user for type of coffee
var coffeeType = prompt("What type of coffee would you like? Please enter 'Bali', 'Sumatra', 'Flores', 'Iced'" +
    " or 'Latte'");

//  Create variable for coffee price
var coffeePrice;

//  If the size is small revert to switch block for small sizes
//  If large revert to switch block for large sizes

if (coffeeSize == "S" || coffeeSize == "s") {
    coffeeSize = "Small";
    switch (coffeeType) {
        case "Bali":
            coffeePrice = "$2.50";
            break;
        case "Sumatra":
            coffeePrice = "$2.55";
            break;
        case "Flores":
            coffeePrice = "$2.40";
            break;
        case "Iced":
            coffeePrice = "$3.00";
            break;
        case "Latte":
            coffeePrice = "$3.50";
            break;

    }
} else if (coffeeSize == "L" || coffeeSize == "l") {
    coffeeSize = "Large";
    switch (coffeeType) {
        case "Bali":
            coffeePrice = "$2.60";
            break;
        case "Sumatra":
            coffeePrice = "$2.75";
            break;
        case "Flores":
            coffeePrice = "$2.55";
            break;
        case "Iced":
            coffeePrice = "$4.00";
            break;
        case "Latte":
            coffeePrice = "$4.50";
            break;

    }
}

//  output to console and an alert box
console.log("You are getting a " + coffeeSize + " " + coffeeType + " coffee which will cost " + coffeePrice);
alert("You are getting a " + coffeeSize + " " + coffeeType + " coffee which will cost " + coffeePrice);
