/*
Spread operator introduced in ES6 which consists of three dots(...).
It allows us to spread out elements of an iterable object such as an array,map etc.

*/


// let numbers = [44, 55, 66, 77];

//here ... is a spread operator which unpacks the numbers array.
// let combined = [24, 66, 77, ...numbers];

// let combined2 = [101, 44, ...combined, 60, 11, ...numbers];

//console.log(combined);
// console.log(combined2);

//We can use spread operator to concatenate two or more arrays.

let numbers = [5, 6, 7, 8];
let numbers2 = [11, 15, 17, 19];

let allNumbers = [...numbers, ...numbers2];

console.log(allNumbers);


//we can apply spread operator to the string, which spreads out each individual character of a string into individual characters.
//spread operator copies only the array itslef to the new one,not the elements.
//spread operator can be used to clone an iterable object or merge iterable objects into one.

let characters = ['X', 'P', 'S', ...'ARFD', 'I',..."Python",..."Java"];

console.log(characters);
