//  Thomas Barlow
//  Thursday, May 29
//  Function Worksheet

//  Calculate the circumference of a circle using 2 * 3.14 * radius

//  Ask user for the width or diameter of the circle
var circleDiameter = prompt("What is the diameter of the circle?")
while (circleDiamter )

//  Divide the diameter in half to get the radius

//  Create function to do calculations of the circle using "r" as the parameter
function circleCircumference(r){
    //  create variable circumference to do the calculation
    var circumference = 2 * 3.14 * r;
    //  output the circumference to the console
    console.log(circumference);
    //  return the circumference so the function can return a result
    return circumference;
}