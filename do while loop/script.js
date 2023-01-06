//do while loop
//do while loop executes at least once if the condition is false.

//Example 1:

/*
let i = 1;

do {
    console.log(i);
    i++;
} while (i>5);
*/

//Example 2:

let sum = 0;
let num = 0;

num = parseInt(prompt("please enter a number: "));

do {
    sum += num;
    num--;
} while (num >= 0);

console.log(`The sum is ${sum}`);