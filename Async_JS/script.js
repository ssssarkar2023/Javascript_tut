//Difference between synchronous and asynchronous code.

console.log("Hello JavaScript");

setTimeout(function () {
    console.log("Asynchronous 2");
}, 6000);

console.log("Hello React");

setTimeout(function () {
    console.log("Asynchronous 1");
}, 3000);


console.log("Hello Angular");

