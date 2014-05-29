/*
Functions vs Procedures
 */

//this is a function
function calcAreaF(width, height){
    var area = width * height;
    return area; // has return
}

//This is a procedure
function calcAreaP(width, height){
    var area = width * height;
    console.log(area); //no return
}