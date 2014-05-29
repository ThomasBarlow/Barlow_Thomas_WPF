/*
Variable Scope
 */

var width = 5;

function outputMsg() {
    console.log("Hello World");
}

function calcArea() {
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}
console.log(width);
calcArea();
