/*
    Thomas Barlow
    May 29, 2014
    Assignment - Functions_Personal
 */

//  This short script will evaluate weather you should buy a seasonal beach badge
//  or simply purchase a daily one instead


//  variable asking how many days are left in the beach season
var daysOfBeachLeft = prompt("How many days are left in the beach season?");
//  while loop checking for proper input of variable
while(isNaN(daysOfBeachLeft)){
    var daysOfBeachLeft = prompt("Please enter a NUMBER");
}
//  variable asking daily badge price
var dailyBadgePrice = prompt("How much is a DAILY badge?");
//  while loop for validation
while(isNaN(dailyBadgePrice)) {
    var dailyBadgePrice = prompt("Please enter a NUMBER");
}
//  variable asking seasonal badge price
var seasonalBadgePrice = prompt("How much is a SEASONAL badge?");
//  while loop for validation
while(isNaN(seasonalBadgePrice)){
    var seasonalBadgePrice = prompt("Please enter a NUMBER");
}
//  var calling the function
var answer = buySeasonalBadge(daysOfBeachLeft, dailyBadgePrice, seasonalBadgePrice);

//  function used to do calculations, parameters included
function buySeasonalBadge(days, dayPrice, seasonPrice){
    //  var created to hold string answer
    var buyTicket = "";
    if (days * dayPrice > seasonPrice){
        console.log("You should think of buying a seasonal ticket");
        buyTicket = "Buy a seasonal ticket";
    } else if (days * dayPrice == seasonPrice){
        console.log("It doesn't matter, you will brake even.");
        buyTicket = "Either way";
    } else if (days * dayPrice < seasonPrice){
        console.log("You don't need a seasonal ticket");
        buyTicket = "You don't need a seasonal ticket";
    }
    //  returns the answer in string form to the function call
    return buyTicket;
}


console.log(answer);
