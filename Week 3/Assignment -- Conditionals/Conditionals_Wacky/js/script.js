/*

Thomas Barlow
Tuesday, May 22th 2014
Assignment: Conditionals -- Wacky

*/

//  This small script will tell you how many of a certain type of fish are in a fish bowl
//  It will ask if they would like to find fish, if not it will thank them and exit

var fish = new Array();

fish[0] = 'tuna';
fish[1] = 'salmon';
fish[2] = 'tuna';
fish[3] = 'salmon';
fish[4] = 'marlin';
fish[5] = 'carp';
fish[6] = 'marlin';

var fishCount = 0;
var findFish = '';
var fishType = '';

findFish = prompt("Would you like to find fish today? Please enter 'Y' or 'N'.")

if (findFish == 'n' || 'N') {
    alert("Sorry you don't want to find any fish! Have a good day!");
    console.log("No fish finding today!");
} else if (findFish == 'y' || 'yes' || 'Y' || 'Yes') {
    while (fishType == '') {
        prompt("Please enter either 'tuna' 'salmon' 'marlin' or 'carp'");
    }

    if (fish[0] == fishType) {
        fishCount++;
    }
    if (fish[1] == fishType) {
        fishCount++;
    }
    if (fish[2] == fishType) {
        fishCount++;
    }
    if (fish[3] == fishType) {
        fishCount++;
    }
    if (fish[4] == fishType) {
        fishCount++;
    }
    if (fish[5] == fishType) {
        fishCount++;
    }
    if (fish[6] == fishType) {
        fishCount++;
    }

    alert("There are " + fishCount + " " + fishType + " fish in the bowl today!");
}


