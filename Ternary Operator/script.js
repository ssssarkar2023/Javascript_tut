//Ternary Operator

/*

A ternary operator evaluates a condition and executes a block of code based on the condition.

Syntax:

condition?expression1:expression2

If the condition evaluates to true then expression1 is executed. If the condition evaluates to false then expression2 is executed.

Ternary operator is also known as conditional operator.

*/

//Example 1:
/*
let age = parseInt(prompt("Please enter age: "))

let result = (age >= 18) ? "Eligible to vote" : "Not Eligible";

console.log(result);
*/

//Example 2:

/*
let marks = parseInt(prompt("Please enter your marks: "));

let result = (marks >= 35) ? "Passed" : "Failed";

console.log(result);
*/

//Nested ternary operator

//We can nest one ternary operator as an expression inside another ternary operator.

let a = 10;

let result = (a >= 0) ? (a === 0 ? "Zero" : "Positive") : "Negative";

console.log(`The number is ${result}`);


