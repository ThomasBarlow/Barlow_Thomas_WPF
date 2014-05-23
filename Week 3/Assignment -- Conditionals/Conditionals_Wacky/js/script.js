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
var findFish;
var fishType;

findFish = prompt("Would you like to find fish today? Please enter 'Y' or 'N'.");

if (findFish === 'y' || findFish === 'yes' || findFish === 'Y' || findFish === 'Yes') {
      fishType = prompt("Please enter either 'tuna' 'salmon' 'marlin' or 'carp'");
      lowerFishType = fishType.toLowerCase();


    if (fish[0] == lowerFishType) {
        fishCount++;
    }
    if (fish[1] == lowerFishType) {
        fishCount++;
    }
    if (fish[2] == lowerFishType) {
        fishCount++;
    }
    if (fish[3] == lowerFishType) {
        fishCount++;
    }
    if (fish[4] == lowerFishType) {
        fishCount++;
    }
    if (fish[5] == lowerFishType) {
        fishCount++;
    }
    if (fish[6] == lowerFishType) {
        fishCount++;
    }

    alert("There are " + fishCount + " " + fishType + " fish in the bowl today!");
} else if (findFish === 'n' || findFish === 'N')  {
    alert("Sorry you don't want to find any fish! Have a good day!");
    console.log("No fish finding today!");
}

