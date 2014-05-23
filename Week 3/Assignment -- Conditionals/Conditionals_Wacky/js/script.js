/*

Thomas Barlow
Tuesday, May 22th 2014
Assignment: Conditionals -- Wacky

*/

//  This small script will tell you how many of a certain type of fish are in a fish bowl
//  It will ask if they would like to find fish, if not it will thank them and exit

// create array of fish
var fish = new Array();

//  fill the array with different types of fish in string format
fish[0] = 'tuna';
fish[1] = 'salmon';
fish[2] = 'tuna';
fish[3] = 'salmon';
fish[4] = 'marlin';
fish[5] = 'carp';
fish[6] = 'marlin';

// create a variable that will keep count the amount of fish inside the bowl
var fishCount = 0;
// create variable for the prompt if user wants to find fish
var findFish;
// variable to hold type of fish the user wants to look for
var fishType;

// user input placed into the findFish var
findFish = prompt("Would you like to find fish today? Please enter 'Y' or 'N'.");

// making sure user inputs for the findFish var
while (findFish == '') {
    findFish = prompt("Please enter either 'Y' or 'N'");
}
// conditional checking to see if the user entered 1 of 4 different answers
if (findFish === 'y' || findFish === 'yes' || findFish === 'Y' || findFish === 'Yes') {
      fishType = prompt("Please enter either 'tuna' 'salmon' 'marlin' or 'carp'");
      while (fishType == '') {
          fishType = prompt("You must enter a fish type: 'tuna' 'salmon' 'marlin' 'carp' please!!");
      }
    // variable that takes fishType string and converts it to lower case for easier comparison
    lowerFishType = fishType.toLowerCase();

// Beginning of conditional block checking to see if fishType is in array
    if (fish[0] == lowerFishType) {
        // if fish is found add one to fishCount variable
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
    // Alert user with information
    alert("There are " + fishCount + " " + fishType + " fish in the bowl today!");
} else if (findFish === 'n' || findFish === 'N')  {
    alert("Sorry you don't want to find any fish! Have a good day!");
    console.log("No fish finding today!");
}

