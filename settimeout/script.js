function sayHello() {
    console.log("hello");
}

function sayHi() {
    console.log("Hi");
}

sayHello();

setTimeout(sayHi, 5 * 1000);

setTimeout(
    () => {
    console.log("Settimeout function called....")
    },
    8 * 1000);