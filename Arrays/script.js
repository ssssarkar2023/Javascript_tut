//Arrays in Javascript is an object that represents a collection of similar type of elements.

//Syntax:

// <type> var_name=[value1,value2,value3...valueN]

//Example 1:
/*
let fruits1 = "Apple";

let fruits2 = "Orange";

let fruits3 = "Blueberries";

let fruits4 = "Pineapple";

let fruits5 = "Grapes";

let fruits = ["Apple", "Orange", "Blueberries", "Pineapple", "Grapes"];

console.log(fruits);

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
*/

//Example 2:
/*
let vegetables = [];

console.log(vegetables);

vegetables[0] = "Potato";

vegetables[1] = "Onion";

vegetables[2] = "Tomato";

vegetables[3] = "Peas";

vegetables[4] = "Cabbage";

//console.log(vegetables);

console.log(typeof (vegetables));

vegetables[2] = "Cauliflower";

console.log(vegetables);
*/

//Example 3:
/*
let mixed = ['Apple', 45, "Onion", undefined, null, "Tomato"];

console.log(mixed);

let value = mixed[1];
console.log(`Value is:${value}\n Type:${typeof (value)}`);

let veg_items = mixed[0] + " " + mixed[2] + " " + mixed[5];

console.log(`Veg items: ${veg_items}\nType:${typeof (veg_items)}`);
*/

//for of loop:
//for of loop can be used to iterate over iterable objects(arrays,strings maps etc...)

/*

Syntax:

for(element of iterable)
{
    body of for of loop
}

Here iterable can be any iterable object like arrays,strings,sets etc.
element can be items in the iterable.

*/
//Normal for loop
/*
let students = ["Dev", "Rahul", "Priya", "Kiran", "Abhishek"];

for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
*/

//for of loop:
/*
let students = ["Dev", "Rahul", "Priya", "Kiran", "Abhishek"];

for (let elem of students) {
    console.log(elem);
}

*/
/*
let string1 = "Javascript";

for (let name of string1) {
    
    console.log(name);
}
*/

//Methods

//toString() method

//This method converts an array to a string of common separated values.
/*
let fruits = ["Apple", "Orange", "Blueberries", "Pineapple", "Grapes"];

console.log(`Arrays:${fruits}\n Type:${typeof (fruits)}`);

console.log("Converting from Array to String using toString() method...");

let new_items = fruits.toString();

console.log(`Strings:${new_items}\n Type:${typeof (new_items)}`);
*/

//join() method

//This method joins all array elements into a string.So basically it behaves like toString(),but along with that we need to specify the separator.
/*
let fruits = ["Apple", "Orange", "Blueberries", "Pineapple", "Grapes"];

console.log(`Arrays:${fruits}\n Type:${typeof (fruits)}`);

let new_items = fruits.join("-");

console.log(`Strings:${new_items}\n Type:${typeof (new_items)}`);
*/

//pop() method
//This method removes the last element from an array.

/*
let fruits = ["Apple", "Orange", "Blueberries", "Pineapple", "Grapes"];

fruits.pop();

console.log(fruits);

let removed_item = fruits.pop();

console.log(`Removed Item:${removed_item}`);

console.log(fruits);
*/

//pop method(Second Example)
/*
let fruits = ["Apple", "Orange", "Blueberries", "Pineapple", "Grapes"];

let arr_length = fruits.length;

console.log(`The length of fruits:${arr_length}`);

for (let i = 1; i <= arr_length; i++){
    
    console.log(`Extracted elements:${fruits.pop()}\n`);
}
*/

//push() method

//The push() method adds one or more elements to the end of the given array.
//This method changes the length of the original array.
/*
let fruits = ["Apple", "Orange", "Blueberries", "Pineapple", "Grapes"];

let arr_length = fruits.length;

console.log(`Original array:${fruits}...\nLength of Original array:${arr_length}`);

fruits.push('Lemon');
fruits.push('Banana');

console.log(`Modified array:${fruits}...\nLength of Modified array:${fruits.length}`);

for (let i = 0; i < fruits.length; i++){
    console.log(`Elements present inside the array fruits:${fruits}`);
}
*/

//concat() method:

//This method combines two or more arrays and returns a new string.

/*
let fruits1 = ["Apple", "Banana", "Pineapple"];

let fruits2 = ["Orange", "Blueberries", "Grapes"];

let fruits = fruits1.concat(fruits2);

console.log(`Fruits:${fruits}`);

console.log(`Fruits:${fruits2.concat(fruits1)}`);
*/


//concat() method
/*
let fruits1 = ["Apple", "Banana", "Pineapple"];

let fruits2 = ["Orange", "Blueberries", "Grapes"];

let fruits3 = ["Orange", "Blueberries", "Grapes"];


let fruits = fruits1.concat(fruits2, fruits3);

console.log(`Fruits:${fruits}`);

let fruits_new = ["Apple", "Banana", "Pineapple"];
let fruits_new1 = fruits_new.concat("Orange", "Blueberries", "Grapes", "Orange", "Blueberries", "Grapes");

console.log(`Fruits:${fruits_new1}`);
*/


//splice() method:
//The splice() method returns an array by adding or removing its elements in place.

//Syntax:
// arr.splice(start,deleteitem,item1...itemN)
/*
let numbers = [2, 3, 4, 7, 9, 10, 12];

let removed_item = numbers.splice(4, 1, 25);

console.log(`Item removed:${removed_item}`);

console.log(`New items added:${numbers}`);
*/

//spice() 2nd example

//let fruits = ["Apple", "Orange", "Blueberries", "Pineapple"];
//removed items are Blueberries and Pineapple which replaced by Goldenberies and Lemon
//let removedItem = fruits.splice(2, 2, "Goldenberries", "Lemon");

//console.log(`Removed Items: ${removedItem}`);

//console.log(`New items: ${fruits}`);


//Adding elements wihout deleting exisiting elements

/*
removedItem = fruits.splice(1, 0, "Cherry", "Mango");
console.log(`Removed Items: ${removedItem}`);

console.log(`New items: ${fruits}`);

//removed 3 items

removedItem = fruits.splice(2, 3);
console.log(`Removed Items: ${removedItem}`);

console.log(`New items: ${fruits}`);
*/

//splice() Example 3

let fruits = ["Apple", "Orange", "Blueberries", "Pineapple"];

//If start position is > length of array, then it does not delete anything, and starts adding to the end of the array.

//let removedItems = fruits.splice(5, 2, "Lemon");
//console.log(`Removed Items: ${removedItems}`);
//console.log(`New items: ${fruits}`);

//if start<0, the index is counted from backwards and items all added in the last position after removing.

//let removedItems = fruits.splice(-1, 1, "Lemon", "Mango", "Grapes");
//console.log(`Removed Items: ${removedItems}`);
//console.log(`New items: ${fruits}`);


//if deleteCount is omitted, or is greater than the number of items left in the array,ite deletes all elements from start to the end of the array.

//let removedItems = fruits.splice(1);

//console.log(`Removed Items: ${removedItems}`);
//console.log(`New items: ${fruits}`);

//if deleteCount is negative, then no items will be removed.

//let removedItems = fruits.splice(1, -2, "Lemon", "Mango", "Grapes");
//console.log(`Removed Items: ${removedItems}`);
//console.log(`New items: ${fruits}`);

//slice method

//The slice() method returns a copy of a portion of an array into a new array object.

//Syntax: arr.slice(start, end)
/*
let numbers = [2, 3, 4, 5, 11, 13, 22];

let new_Array = numbers.slice(2, 5);

console.log(new_Array);

new_Array = numbers.slice(2);

console.log(new_Array);

new_Array = numbers.slice(-3);

console.log(new_Array);
*/

//Shift() method:

//The shift() method removes the first element from an array and returns that element.

/*
let numbers = [2, 3, 4, 5, 11, 13, 22];

let first = numbers.shift();

console.log(first);

console.log(numbers);
*/

//Nested array
/*
let numbers = [
    
    [1, 2, 3],
    [4, 5, 6],
    [-5, -4, -1]
];

console.log(`Index number 1:${numbers[0]}`);
console.log(`Index number 2:${numbers[1]}`);
console.log(`Index number 3:${numbers[2]}`);

console.log(`Extract second index:${numbers[0][1]}`);
console.log(`Extract third index:${numbers[1][2]}`);
console.log(`Extract first index:${numbers[2][0]}`);

console.log(numbers.shift());

console.log(numbers);

*/

//Unshift() method

//The unshift() method adds one or more elements to the beginning of the array and returns the new length of the array.

/*
let numbers = [2, 3, 4, 5, 11, 13, 22];

let x = numbers.unshift("Javascript");

console.log(numbers);

let c1 = numbers.unshift(100, 222, "C#");

console.log(numbers);

console.log(numbers.length);
*/

//Array.of method

//Array.of method creates a new array instance from the given arguments.
/*
let numbers = Array.of(5);//let numbers=[5];

console.log(numbers);

numbers = Array.of(3, 4, 5, 6);

console.log(numbers);
*/


//isArray() method:

//isArray() method checks if the given argument is an array or not.

// let value1 = "Array";

// console.log(Array.isArray(value1));

// let array2 = [12, 34, 55, 66, 77];

// console.log(Array.isArray(array2));

// let array3 = Array.of(10, 20, 30, 40, 50);

// console.log(Array.isArray(array3));

/*Advanced array methods*/
//Every

//every method returns true, if all the elements are matching with the given condition.

// let products = [
//     { id: 1, productName: "TV", price: 5000 },
//     { id: 2, productName: "Monitor", price: 1300 },
//     { id: 3, productName: "iPad", price: 25000 },
//     {id:4,productName:"Phone",price:1800},
// ];

// console.log(products.every((p) => {
//     return p.price >= 1200;
// }))


//some() method
//some() method returns true,if at least one element matches with the given condition.
// let products = [
//     { id: 1, productName: "TV", price: 5000 },
//     { id: 2, productName: "Monitor", price: 1300 },
//     { id: 3, productName: "iPad", price: 25000 },
//     {id:4,productName:"Phone",price:1800},
// ];

// console.log(products.some((p) => {
//     return p.price >= 8000;
// }));

//filter() method
//filter() method returns all the elements that are matching with the given condition and this method is returning a new array with new results.

// let products = [
//     { id: 1, productName: 'LG TV', price: 5000, brand: "LG" },
//     { id: 2, productName: 'Apple ipod', price: 15000, brand: "Apple" },
//     { id: 3, productName: 'Samsung Monitor', price: 12000, brand: "Samsung" },
//     { id: 4, productName: 'Apple ipad', price: 79000, brand: "Apple" },
//     {id:5, productName: 'Apple iPhone', price:125000, brand: "Apple"}
// ];
// let appleProducts = products.filter((p) => {
//     return p.brand == "Apple";
// });
// //console.log(appleProducts);
// for (let i = 0; i < appleProducts.length; i++){
//     console.log(`ID:${appleProducts[i].id},Product Name:${appleProducts[i].productName},Price:${appleProducts[i].price},Brand:${appleProducts[i].brand}`);
// }

//find() method
//find() method returns the first matching element, among the elements that are matching with the given condition.

// let products = [
//     { id: 1, productName: 'LG TV', price: 5000, brand: "LG" },
//     { id: 2, productName: 'Apple ipod', price: 15000, brand: "Apple" },
//     { id: 3, productName: 'Samsung Monitor', price: 12000, brand: "Samsung" },
//     { id: 4, productName: 'Apple ipad', price: 79000, brand: "Apple" },
//     {id:5, productName: 'Apple iPhone', price:125000, brand: "Apple"}
// ];

// let firstExpensiveProduct = products.find((p) => {
//     return p.price >= 91000;
// });

// console.log(firstExpensiveProduct)

//findIndex() method
//findIndex() method returns the index of the first matching element that are matching with the given condition.


// let products = [
//     { id: 1, productName: 'LG TV', price: 5000, brand: "LG" },
//     { id: 2, productName: 'Apple ipod', price: 15000, brand: "Apple" },
//     { id: 3, productName: 'Samsung Monitor', price: 12000, brand: "Samsung" },
//     { id: 4, productName: 'Apple ipad', price: 79000, brand: "Apple" },
//     {id:5, productName: 'Apple iPhone', price:125000, brand: "Apple"}
// ];
// let firstExpensiveProductIndex = products.findIndex((p) => {
//     return p.price >= 8000;
// });

// console.log(firstExpensiveProductIndex);

//forEach
//executes the function once for each element of the array.

// function increaseQuantity() {
//     this.quantity++;
// }

// let products = [

//       { id: 1, productName: 'LG TV',quantity:0, increaseQuantity:increaseQuantity},
//     { id: 2, productName: 'Apple ipod',quantity:0,increaseQuantity:increaseQuantity  },
//     { id: 3, productName: 'Samsung Monitor',quantity:0,increaseQuantity:increaseQuantity  },
//     { id: 4, productName: 'Apple ipad',quantity:0, increaseQuantity:increaseQuantity },

// ];


// products.forEach((p) => {
//     p.increaseQuantity();
// });

// console.log(products);

//includes()

//returns true if the given value found atleast once in the array.

// let apple = { id: 4, productName: 'Laptop', price: 120000 };

// let products = [
//     { id: 1, productName: 'TV', price: 50000 },
//     { id: 2, productName: 'Monitor', price: 4000 },
//     { id: 3, productName: 'iPad', price: 45000 },
//     { id: 4, productName: 'phone', price: 34000 },
//     apple,
// ];

// let result = products.includes(apple);
// console.log(result);


//indexOf
//returns index of the first occurence of the given value in the array.
// let firstProduct = { productName: 'TV', price: 25000 };
// let secondProduct = { productName: 'Laptop', price: 55000 };
// let thirdProduct = { productName: 'Head Phone', price: 3000 };
// let fourthProduct = { productName: 'iPad', price: 5000 };
// let products = [firstProduct, secondProduct, thirdProduct];

// //console.log(products);
// console.log(products.indexOf(secondProduct));
// console.log(products.indexOf(thirdProduct));
// console.log(products.indexOf(fourthProduct));

// let x = products.indexOf(fourthProduct);
// if (x >= 0) {
//     console.log('Product is available');
// } else {
//     console.log("Product is not available");
// }

//map()
//executes the function once for each element in the array.This method returns a new array.

// let products = [
//     { id: 1, productName: 'TV', price: 50000 },
//     { id: 2, productName: 'Monitor', price: 4000 },
//     { id: 3, productName: 'iPad', price: 45000 },
//     { id: 4, productName: 'phone', price: 34000 },
   
// ];

// let updatedProducts = products.map((p) => {
//     p.price += p.price * 10 / 100;
//     p.productName = p.productName.toUpperCase();
//     return p;
// });

// let updatedProducts = products.map((p) => {
//     if (p.price > 35000) {
//         return { name: p.productName, price: p.price / 2 };
//     } else {
//         return p;
//     }
// })
// console.log(updatedProducts);
// console.log(`Product Name:${updatedProducts[0].name}`);

//reduce()
//This method allows to reduce an array to a single value.

//Without reduce() method

// let numbers = [1, 2, 3, 4, 5];

// let sum = 0;

// for (let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }

// console.log(sum);

//Using reduce() method

// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(function (prevValue, current) {
//     return prevValue + current;
// },10);

// console.log(sum);

// let scores = [10, 20, 60, 55, 77, 89];

// let result = scores.reduce((acc, curr) => {
//     if (curr > 50) {
//         acc++;
//     }
//     return acc;
// }, 0);

// console.log(result);

// let scores = [

//     { player: 'Sachin', score: 50 },
//     { player: 'Dhoni', score: 67 },
//     { player: 'Kohli', score: 45 },
//     { player: 'Rahul', score: 55 },
//       { player: 'Sachin', score: 77 },
// ];


// const sachinScore = scores.reduce((acc, cur) => {
    
//     if (cur.player === 'Sachin') {
//         acc += cur.score;
//     }
//     return acc;
// }, 0);

// console.log(sachinScore);


//flat() method

//It converts nested array into plain and simple array.

// let x = [10, [34, 55], 66, 77];

// console.log(x.flat());


//flatmap() method
//This method is similar to map() method,where map is one to one, we should return single value.flapmap() method is one to many, we can return an array.

// let products = [
//     { id: 1, productName: 'TV', price: 50000 },
//     { id: 2, productName: 'Monitor', price: 4000 },
//     { id: 3, productName: 'iPad', price: 45000 },
//     { id: 4, productName: 'phone', price: 34000 },
   
// ];

// //flapmap executes the callback once for each element but each element can produce one or more element.

// let updatedProducts = products.flatMap((p) => {
    
//     if (p.productName == "Monitor" || p.productName == "iPad") {
//         let p2 = { ...p, price: p.price + (p.price * 10 / 100) };
//         return [p, p2];
//     } else {
//         return [p];
//     }
// });

// console.log(updatedProducts);

console.log("Testing for github");