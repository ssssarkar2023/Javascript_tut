//if statement checking for single condition

/*
let x = 25;

if (x > 10)
{
    console.log("Value of x is greater than 10");
}

if (1 === "1") {
    console.log("1 is equal to 1");
}

const a = 25;
const b = 30;

if (a < b) {
    console.log(`${a} is less than ${b}`);
}
*/

//else statement for checking 2 conditions
/*
let x = 25;

if (x > 10)
{
    console.log("Value of x is greater than 10");
} else {
    console.log("Value of x is less than 10");
}

if (1 === "1") {
    console.log("1 is equal to 1");
} else {
    console.log("1 is not equal to 1");
}

const a = 25;
const b = 30;

if (a > b) {
    console.log(`${a} is less than ${b}`);
} else {
    console.log(`${a} is not less than ${b}`);
}
*/

//if else if
/*
let a = 15;

if (a === 10) {
    console.log("a is equal to 10");
}
else if (a === 35) {
    console.log("a is equal to 35");
}
else if (a === 45) {
    console.log("a is equal to 45");
}
else {
    console.log("a is not equal to 10,35 and 45");
}
*/

//if else if
/*
let marks = parseInt(prompt("Please enter marks: "))

if (marks >= 85 && marks <= 100) {
    console.log("Congrats!!! You scored Grade A");
}
else if (marks >= 60 && marks < 85) {
    console.log("You scored Grade B+");
} else if (marks >= 40 && marks <= 60) {
 
    console.log("You scored Grade B");
}
else if (marks >= 35 && marks <= 40) {
    console.log("You scored Grade C");
} else {
    console.log("Sorry you failed this time..Please try again to clear...");
}
*/


//switch case:

/*
The switch expression is evluated once, then the value of the expression is compared with the value of each case.If there is a match, then the associated blovk of code is executed.,otherwise if no match then the default code is executed.

//break 

//When Javascript reaches break keyword,it  breaks completely out of the switch block, whicn means it will stop the execution inside the switch block, the default keyword specifies the code to run if there is no case match.

//Syntax:

switch(exp){

    case 1://statements;
            break;
    case 2: //statements;  
            break;
    case 3: //statements;
            break;
    case N: //statements;
            break;
    default: //statements;
}

*/

//Switch case Example 1:

/*
let number1 = parseInt(prompt("PLease type any number from 1 to 5: "));

switch (number1) {
    
    case 1: console.log("You got number 1");
        break;
    case 2: console.log("You got number 2");
        break;
    case 3: console.log("You got number 3");
        break;
    case 4: console.log("You got number 4");
        break;
    case 5: console.log("You got number 5");
        break;
    default: console.log("Numbers are not matching..please type from number 1 to number 5");
}
*/

//Switch Case Example 2:
/*
console.log("🍔Food Menu Based on Day:PLease type day to check the menu: 🥗");

let day = prompt("Please type any day from Monday to Sunday: ");

switch (day) {
    
    case "Monday":
        console.log("Monday Food Preparation");
        console.log("Gobi Manchurian");
        console.log("Dal Recipe");
        break;
    case "Tuesday":
        console.log("Tuesday Food Preparation");
        console.log("Sambar Rice");
        console.log("Idly Dosa Recipe");
        break;
    case "Wednesday":
        console.log("Wednesday Food Preparation");
        console.log("Paneer recipe");
        console.log("Aloo Paratha");
        break;
    case "Thursday":
        console.log("Thursday Food Preparation");
        console.log("Mushroom recipe");
        console.log("Dal Makhni Recipe");
        break;
    case "Friday":
        console.log("Friday Food Preparation");
        console.log("Chole Bhature Recipe");
        console.log("Aloo paratha");
        break;
    case "Saturday":
    case "Sunday":
        console.log("Saturday and Sunday Food Preparation");
        console.log("Boiled vegetables");
        console.log("Veg Fried Rice");
        break;
    default: console.log("Not a valid day,Please type the day correctly...");


}
*/