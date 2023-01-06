
//Valid variable name
/*
var a = 25;
console.log(a);
//var 2v = 35; //Digit or number should not be allowed in the beginning while declaring a variable

var $r = 56;
console.log($r);
var _q = 55;
console.log(_q);
//var x y = 45; no space is allowed while declaring a variable name.
var x_y = 66
console.log(x_y);
var a67 = 88; //Number can added at the last while declaring a variable.THis is valid.
console.log(a67);
var x5t_y5 = 99;
console.log(x5t_y5);
*/

//Reassignment of variable name
/*
var name1 = "Suraj";

console.log(name1);

name1 = "Ravi";

console.log(name1);

//In case of var redeclaration of the same variable name is possible with different type.
var name1 = 35;

console.log(name1);
*/

//let
/*
let name1 = "Suraj";

console.log(name1);

name1 = "Ravi";

console.log(name1);
*/

//let name1 = 34; We cannot redeclare the same variable name using let, while in case of var it is possible.

//const

//const name1 = "Suraj";

//console.log(name1);

//name1 = "Ravi";//in case of const reassignment is not possible.

//console.log(name1);

//const name1 = 34;

//We cannot redeclare and reassign in case of const, while in case of let reassignment is possible but redeclaration is not possible with the same variable name, while in  case of var redclaration is possible, reassignment also possible with the same variable name.

//typeof operator

//We can use typeof operator to find the type of data of a Javascript variable.

let name1 = "Kiran";
console.log(name1);
console.log(typeof name1);

let number1 = 35;
console.log(number1);
console.log(typeof number1);

let number2 = 45.66;
console.log(number2);
console.log(typeof number2);

let learning_js = true;
console.log(learning_js);
console.log(typeof learning_js);

let numbers = [22, 33, 44, 55];
console.log(numbers);
console.log(typeof numbers);

let firstName = "Kiran";
let lastName = "Kumar";

let full_name = firstName + " " + lastName;
console.log(full_name);
console.log(typeof full_name);

console.log(typeof "Praveen");

console.log(typeof 35);

console.log(typeof true);

let age;//here we are not assigning any value

console.log(age);

console.log(typeof age);

let mobile_number = null;

console.log(mobile_number);

console.log(typeof mobile_number);