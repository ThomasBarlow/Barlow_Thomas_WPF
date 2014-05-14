//  Expressions - Personal

/*  This JavaScript project will calculate how many tubes of toothpaste a person uses
    on a yearly basis.  The user will be asked how many times a day they brush their teeth,
    how many ounces are in their toothpaste tube and how many ounces they use each time.
 */

//  Create 3 variables based on user input for calculations

var perDay = prompt("How many times per day do you brush your teeth?");
var ouncesPerTube = prompt("How many ounces are in a tube of your toothpaste?");
var perBrushing = prompt("How many ounces do you use each time you brush your teeth?");

//  Calculate amount of ounces that are used per year

var ouncesYearly = perBrushing * perDay * 365;

//  Calculate tubes used per year

var tubesYearly = ouncesYearly / ouncesPerTube;

/*  Output information to the user, letting the user know how many FULL tubes are needed per year since you can only
    full tubes
*/
console.log("You need to buy " + Math.ceil(tubesYearly) + " tubes of toothpaste per year.");