//Example 1

/*
let amount = 10;

while (amount > 0) {
    console.log(`I have ${amount} and I am going to buy something...`);
    amount--;
}
*/


//Example 2

/*
let i = 11;

while (i <= 15) {
    console.log(i);
    i++;
}
*/

//Example 3

let sum = 0;

let num = parseInt(prompt("Please enter a number: "));

while (num >= 0) {
    
    //sum = sum + num;
    sum += num;

    num--;
}

console.log(`The sum is ${sum}`);