//Functions

/* 

function name_of_function()
{

    //body of function
}


*/

//Exmaple 1:
/*
function showMessage()
{
    console.log('HI Javascript');
}

showMessage();
showMessage();
showMessage();
*/

//Example 2:
/*
let username = "Sam";

function showMessage()
{
    let message = `Hello ${username}`;

    console.log(message);
}

showMessage();
*/
/*
let username = "Sam";

function showMessage()
{

    let username = "Kiran";
    let message = `Hello ${username}`;

    console.log(message);
}

console.log(username);

showMessage();

console.log(username);
*/

/*
function showMessage(color1,color2,color3,color4,color5) {

    let colors = `${color1} ${color2} ${color3} ${color4} ${color5}`;

    console.log(colors);
}

showMessage("Green", "Red", "Blue", "Violet", "Yellow");
*/


//Default values:
/*
function colors(color1, color2 = "Red") {
    
    let colors = color1 + " " + color2;
    console.log(colors);
    
}

colors("Blue");

colors("Yellow", "Green");
*/

//Arithmetic operations:
/*
function add(x, y)
{
    let result = x + y;
    console.log(result);
}
function mul(x, y)
{
    let result = x * y;
    console.log(result);
}
function sub(x, y)
{
    let result = x - y;
    console.log(result);
}
function div(x, y)
{
    let result = x / y;
    console.log(result);
}

add(2, 3);
mul(12, 12);
sub(3, 6);
div(4, 2);
*/

//return statement in a function:

//The return statement can be used to return the value to a function call.

//If nothing is returned, the function returns an undefined value.

/*
function add(a, b) {
    
    return a + b;
}
function mul(a, b) {
    
    return a * b;
}
function sub(a, b) {
    
    return a - b;
}

let addition = add(3, 5);

console.log(addition);

let multiplication = mul(12, 13);

console.log(multiplication);

let subt = sub(4, 1);

console.log(subt);
*/

//Function Expression

//Functions can also be defined as expressions.

/*
let addition = function add(a, b) {
    
    return a + b;
}

console.log(addition(12, 13));

/*
Here the variable addition is used to store the function.Here the function is trated as an expression.
*/
/*
let sub = function subt(a, b) {
    return a - b;
}

console.log(sub(4, 1));
*/



//Square of a number
/*
let sq_number = function sq(n) {
    return n * n;
}

console.log(sq_number(4));

let result = sq_number(5);

console.log(`The square of a number is: ${result}`);
*/


/*
let check_Score = function checkScore(currentScore, passingScore) {
    
    if (currentScore >= passingScore) 
    {
        return "Passed";
    } else {
        return "Failed";
    }
}

let first_Score = check_Score(90, 55);

console.log(`The first result is: ${first_Score}`)

let second_Score = check_Score(55, 15);

console.log(`The second result is: ${second_Score}`)


let third_Score = check_Score(45, 55);

console.log(`The third result is: ${third_Score}`)

*/

//Function can be passed as values
/*
function add(a, b) {
    
    return a + b;
}
function mul(a, b) {
    
    return a * b;
}
function sub(a, b) {
    
    return a - b;
}
function div(a, b) {

    return a / b;

}


let arithmetic_operations = [add, sub, mul, div];

for (let fnc of arithmetic_operations)
{
    console.log(fnc);
    console.log(fnc == add);
    let result = fnc(20, 10);

    console.log(`The arithmetic operations:${result}`);
}
*/

/*
function add(a, b) {
    
    return a + b;
}
function mul(a, b) {
    
    return a * b;
}
function sub(a, b) {
    
    return a - b;
}
function div(a, b) {

    return a / b;

}


let arithmetic_operations = [add, sub, mul, div];

for (let fnc of arithmetic_operations)
{
    
    if (fnc == add) {
        let r = fnc(22, 33);
        console.log(`The addition is ${r}`);
    }
    if (fnc == sub) {
        let r = fnc(21, 10);
        console.log(`The subtration is ${r}`);
    }
    if (fnc == mul) {
        let r = fnc(44, 55);
        console.log(`The multiplication is ${r}`);
    }
    if (fnc == div) {
        let r = fnc(22, 11);
        console.log(`The division is ${r}`);
    }
}
*/

//Function accepts another function as an argument

/*
function call_Function(func)
{

    func();
    func();
    func();
}


function shout() {
    console.log("😀Shouting😀");
}

function cry() {
    console.log("Crying...😪");
}

call_Function(shout);
call_Function(cry);
*/

/*
function call_Function(func)
{

    if (func == shout) {
        func();
        func();
        func();
    }

    if (func == cry) {
        func();
    }

}


function shout() {
    console.log("😀Shouting😀");
}

function cry() {
    console.log("Crying...😪");
}

call_Function(shout);
call_Function(cry);
*/
/*
function call_Function(func,num)
{

    for (let i = 1; i <= num; i++){
        func();
    }
}


function shout() {
    console.log("😀Shouting😀");
}

function cry() {
    console.log("Crying...😪");
}

call_Function(shout,5);
call_Function(cry,2);
*/

/*
function pickOne(fnc1, fnc2) {
    
    let rndm = Math.random();//0 to 1
    
    if (rndm < 0.5) {
        fnc1();
    } else {
        fnc2();
    }
}

function shout() {
    console.log("😀Shouting😀");
}

function cry() {
    console.log("Crying...😪");
}

pickOne(shout, cry);
*/

//Returning multiple values from a function using an array

/*
function names() {
    let name1 = "Rohit";
    let name2 = "Rahul";
    let name3 = "Seema";
    let name4 = "Krishna";
    let name5 = "Suraj";

    //returning as an array

    return [name1, name2, name3, name4, name5];


}

let name_list = names();

console.log(`List of names:${name_list}`);
*/

/*
function names(n1,n2,n3,n4,n5) {
    let name1 = n1;
    let name2 = n2;
    let name3 = n3;
    let name4 = n4;
    let name5 = n5;

    //returning as an array

    return [name1, name2, name3, name4, name5];


}

let name_list = names("Rohit","Rahul","Seema","Krishna","Suraj");

console.log(`List of names:${name_list}`);
*/

//Function returns a function

/*
function multiplyBy(num)
{

    return function x(n1)
    {
        return n1 * num;
    }

}

let triple = multiplyBy(3);

console.log(triple);

console.log(triple(4));

console.log(triple(5));

let double = multiplyBy(2);

console.log(double(3));
*/

/*
function makeBetweenFunc(x, y)
{

    return function fnc(num) {
        
        return num >= x && num <= y;
    }
}

//this function checks if a value is between the range.

let range1 = makeBetweenFunc(0, 18);

console.log(range1(11));
*/


//Anonymous Function

//An anonymous function is a function without a name.

//This function has no name between the function keyword and paranthesis().

/*

let func = function () {
    
    console.log("Anonymous Function");
}

func();
*/

//IIFE (Immediately Invoked Function Expression)

//If you want to create a function that will execute immediately after the declaration, then we can use anonymous function.
/*
(
    function x() {
        console.log("Anonymous Function");
    }
  

)();
*/
/*
(
    function add(a, b) {
        let x = a + b;
        console.log(x);
    }

)(12,10);
*/

//Arrow function:

//ES6 introduced arrow function expression that provides a short hand for declaring an anonymous function.

//Normal function:

/*
let display = function () {
    console.log("Anonymous Function");
}

display();
*/

/*

Syntax of arrow function:

let func=(arg1,arg2...argN)=>expression;

The above code creates a function name func that accepts arg1, to argN then avaluatres the expression on the right side and returns a result.


*/

/*
let display = () => {
    console.log("Anonymous Function");
}

display();

let display2 = () => console.log("Anonymous Function 2");

display2();
*/


// let sum = (a, b)=> {
//     console.log(`${a + b}`);
// }

// sum(12, 12);


// let mult = (a, b) => a * b;

// console.log(mult(12, 12));

//recursion

//recursion is a function which calls itself


// let factorial = function (x) {
    
//     if (x == 1) {
//         return 1;
//     } else {
//         return factorial(x - 1) * x;
//     }
// }


// console.log(factorial(5));

//arguments keyword

/*

argument keyword represents the list of arguments received in the current function, we can access each argument value by using index,arguments[0],arguments[1]...

*/

// let addition=function(){

//     let sum = 0;

//     for (let i = 0; i < arguments.length; i++){
//         sum = sum + arguments[i];
//     }

//     return sum;
// }

// console.log(addition(35, 45, 66, 77));

// console.log(addition(55, 85, 99, 11,44,76,12,33));

//Currying

/*
Currying is a technique of converting a function that takes multiple arguments into a sequence of nested functions that each take a single argument.

advantage: we can simpplify the large code into smaller functions that performs each smaller task.

*/
// let multiply = function (a) {
    
//     return function (b) {
//         let result1 = a * b;

//         return function (c) {
//             let result2 = result1 * c;

//             return result2;
//         };
//     };
// };

// let fun2 = multiply(10);//calls first function

// let fun3 = fun2(20);//calls second function

// console.log(fun3(30));//calls third function


// console.log(multiply(10)(20)(50));

// @Praveen: Hi Today Meeting at 8pm -  From Sandeep
// let logMessage = function (receiver) {
    
//     let result1 = `@${receiver}`;
//     return function (message) {
        
//         let result2 = `${result1}:${message}`;
        
//         return function (hours, timePeriod) {
            
//             let result3 = `${result2} at ${hours} ${timePeriod}`;
            
//             return function (sender) {
//                 let result4 = `${result3} - From ${sender}`;

//                 return result4;
//             };
//         };
//     };
// };
// console.log(logMessage("Praveen")("HI Today Meeting")(6, "pm")("Sandeep"));

//Built in Functions

//charAt() - returns  character using index

// let x = "Hyderabad";

// let y = x.charAt(3);

// console.log(y);

//charCodeAt - returns character first ASCII value.

// let x = "HYDERABAD";
// let z = "Bengaluru";

// let y = z.charCodeAt("B");

// console.log(y);