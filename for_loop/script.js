//1st example

/*
let i = 0;

for (i = 0; i < 4; i++)
{
    console.log(i);
}
*/

/*

(i=0) initially i is 0 that means that it executes once upon entering the loop.

(i<4) it checked bedfore every loop iteration,if false the loop stops.

(console.log(i)) body of the for loop runs again and again until the condition is true.

(i++) It executes or increments after the body on each iteration.


*/

//2nd Example:
/*
for (let i = 0; i < 4; i++)
{
    console.log(i);
}
*/

//3rd Example:
/*
let i = 0;//Global variable

for (i = 0; i < 4; i++)
{
    console.log(i);
}

console.log(i);
*/

//4th Example:

//Skipping parts inside for loop
/*
let i = 0;
for (; i < 5; i++){
    console.log(i);
}
*/

//We can omit the beginning or start mode inside the for loop, if we don't need to do anything at the loop start.


//5th Example:
/*
let i = 0;
for (; i < 5;){
    console.log(i);
    i++;
}
*/

//We can also remove the starting or ending point inside the for loop as shown in the above example.We can actually remove everything, if we do that we will create infinite loop which is as shown below:
/*
for (; ;){

}
*/

//Note that inside for loop we need to specify ;, otherwise we will get syntax error.

//6th Example:

/*
for (let number = 11; number >= 0; number--){
    console.log(`Number is:${number}`);
}
*/

//7th Example:
/*
for (let i = 1; i <= 10; i++){
    if (i % 2 == 0) {
        console.log(`Even number:${i}`);
    } else {
        console.log(`Odd number:${i}`);
    }
}
*/

//8th Example:
//Display only odd number and skip even number
//continue is akeyword which skips.

for (let i = 0; i <= 10;i++)
{
    if (i % 2 == 0) continue;

    console.log(i);
}