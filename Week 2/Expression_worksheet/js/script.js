// Expression Worksheet - JavaScript file

//Calculating Age in Dog Years

//Variable to hold actual age
var age = prompt("How old is your Sparky?");

//age multiplied by 7 for dog years
age *= 7;

//output to console
console.log("Sparky is " + age + " in dog years!");

// Slice of Pie - Part I

//User input number of pizzas
var pizzas = 4;   //prompt("How many pizzas have you ordered?");
//user input number of people
var people = 10;  //prompt("How many people at your party?");
//user input number of slices per pie
var slices = 8;   //prompt("How many slices will you get from each pizza?");

/*the number of pies multiplied by the amount of slices
gives the total amount of slices, that divided by the amount
of people at the party will give how many slices each person will
get */
var personSlice = pizzas * slices / people;
console.log("Each person will be able to have " + personSlice + " slices of pizza");


// Slice of Pie - Part II

//we use the modulo operator to figure out the remainder of a division problem, in this case the amount of slices
//sparky gets to eat
var sparkySlice = (pizzas * slices) % people;
//output of math
console.log("Sparky will get to have " + sparkySlice + " left over slices of pizza!");

//Average Shopping Bill

//create the new array list
var groceryList = new Array(5);
//input the amounts into each array slot
groceryList[0] = 50;
groceryList[1] = 75;
groceryList[2] = 100;
groceryList[3] = 50;
groceryList[4] = 25;

//total up the items in the array
var total = groceryList[0] + groceryList[1] + groceryList[2] + groceryList[3] + groceryList[4];
//divide the total by amount of items in the array
var groceryAverage = total / 5;

console.log("Your average total spending for the 5 list items is " + groceryAverage + " dollars!");

//Discounts

var originalPrice = 100.00;
var discount = 20;
var salesTax = .06;
var itemDescription = "Blue Leather Belt";

var discountAmount = (discount / 100) * originalPrice;
var newPrice = originalPrice - discountAmount;
var taxAmount = newPrice * salesTax;
var newPriceTax = newPrice + taxAmount;



console.log("Your " + itemDescription + " was originally " + originalPrice + ", " +
    "but after a " + discount + "% discount, it is now $" + newPrice + " without tax, " +
    "and $" + newPriceTax + " with tax.");