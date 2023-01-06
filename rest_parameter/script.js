//rest parameter introduced in ES6 which has a prefix of three dots(...).
//rest parameter  packs the arguments of a function into an array.
//rest parameter always should be at the last which allows us to represent an indefinite number od arguments as an array.

//Example 1
// function rest_show(a,b,c,...args) {
   
//     console.log(a, b, c);
//     console.log(args);

// }

// rest_show(34, 55, 66, 77,88,99,33,12);

//Example 2

// function add(...args) {
    
//     let total = 0;

//     for (let a of args) {
//         total += a;
//     }
//     return total;

// }



// let result = add(2, 3, 4, 5);
// console.log(result);

//Example 3

// function add(...args) {

//     return args.filter(function (e) {
//         return typeof e === 'number'
//     }).reduce(function (prev, curr) {
//         return prev + curr;
//     });
// }

// let result = add(12, 55, 'Javascript', undefined, 12, null, 55);
// console.log(result);



// function combine_char(...args) {
    
//     return args.reduce((prev, curr) => prev + " " + curr);
// }

// let result = combine_char("Learning", "Javascript", "Now");

// console.log(result);

//We can use rest paramter in a dynamic function in javascript.
//Using function constructor we can create dynamic function.

let displayNumbers = new Function('...numbers', 'console.log(numbers)');

displayNumbers(3, 4, 5, 6);