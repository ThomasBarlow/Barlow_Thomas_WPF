/*

 Thomas Barlow
 Tuesday, May 21th 2014
 Assignment: Conditionals -- Personal

*/

//  This script will check to see weather I have work in the morning and I need to set an alarm clock.
//  If I do have work it will let me know what time I should set the alarm to.  It will know how much
//  time I need to get ready from a prompt asking so.

//  questions will be:  Do you have work tomorrow?  What time do you have work? How much time do you need to get ready?

//  Set three variables to hold information
var doIHaveWork = "";
var whatTimeDoIWork = "";
var howMuchTimeNeeded = "";
var alarmSetTime;

//  Prompt user for information using while loop to make sure there are no blank inputs
while (doIHaveWork == "") {
    doIHaveWork = prompt("Do you have work tomorrow?");
    if (doIHaveWork == "yes" || doIHaveWork == "y" || doIHaveWork == "YES" || doIHaveWork == "Y") {
        while (whatTimeDoIWork == "") {
            whatTimeDoIWork = prompt("What time will you be getting up in the morning?");
        }
        while (howMuchTimeNeeded == "") {
            howMuchTimeNeeded = prompt("How much time do you need to get ready?")
        }
        alarmSetTime = whatTimeDoIWork - howMuchTimeNeeded;
        alert("Warning!! You have work tomorrow @ " + whatTimeDoIWork + ".  Please set your alarm for " + alarmSetTime);
    } else {
        alert("Lucky you!! No work tomorrow!!")
    }
}




