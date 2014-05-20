/*  Thomas Barlow
 Tuesday, May 20th 2014
 Activity: Conditionals Worksheet -- Grade Converter
*/

/**********************
    Grade Converter
**********************/

/*
    Undergraduate Grade Scale
    -------------------------
    A+  =   95 - 100
    A   =   90 - 94
    B+  =   85 - 89
    B   =   80 - 84
    C+  =   76 - 79
    C   =   73 - 75
    D   =   70 - 72
    F   =   0  - 69

    This short script will give the user a grade letter for the given number
    percentages entered into the prompt.
*/

var grade = prompt("What is the student's grade percentage?");
var studentType = prompt("Type 'U' for Undergrad or 'G' for Graduate");

if (studentType == "U") {

    switch (true) {
        case grade <= 100 && grade >= 95:
            console.log("You have a " + grade + "%, which means you have earned an A+ in the class as an undergrad!");
            break;
        case grade <= 94 && grade >= 90:
            console.log("You have a " + grade + "%, which means you have earned an A in the class as an undergrad!");
            break;
        case grade <= 89 && grade >= 85:
            console.log("You have a " + grade + "%, which means you have earned an B+ in the class as an undergrad!");
            break;
        case grade <= 80 && grade >= 84:
            console.log("You have a " + grade + "%, which means you have earned an B in the class as an undergrad!");
            break;
        case grade <= 76 && grade >= 79:
            console.log("You have a " + grade + "%, which means you have earned an C+ in the class as an undergrad!");
            break;
        case grade <= 73 && grade >= 75:
            console.log("You have a " + grade + "%, which means you have earned an C in the class as an undergrad!");
            break;
        case grade <= 70 && grade >= 72:
            console.log("You have a " + grade + "%, which means you have earned an D in the class as an undergrad!");
            break;
        case grade <= 0 && grade >= 69:
            console.log("You have a " + grade + "%, which means you have earned an F in the class as an undergrad!");
        default:
            alert("Please enter a grade number!");
            break;
    }
} else if (studentType == "G") {
    switch (true) {
        case grade <= 100 && grade >= 95:
            console.log("You have a " + grade + "%, which means you have earned an A+ in the class as a graduate!");
            break;
        case grade <= 94 && grade >= 90:
            console.log("You have a " + grade + "%, which means you have earned an A in the class as a graduate!");
            break;
        case grade <= 89 && grade >= 85:
            console.log("You have a " + grade + "%, which means you have earned an B+ in the class as a graduate!");
            break;
        case grade <= 80 && grade >= 84:
            console.log("You have a " + grade + "%, which means you have earned an B in the class as a graduate!");
            break;
        case grade <= 73 && grade >= 79:
            console.log("You have a " + grade + "%, which means you have earned an C in the class as a graduate!");
            break;
        case grade <= 70 && grade >= 72:
            console.log("You have a " + grade + "%, which means you have earned an D in the class as a graduate!");
            break;
        case grade <= 0 && grade >= 69:
            console.log("You have a " + grade + "%, which means you have earned an F in the class as a graduate!");
        default:
            alert("Please enter a grade number!");
            break;
    }
}

