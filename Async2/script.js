//Synchronous Javascript

// const func2 = () => {
//     console.log("This is function 2");
// }

// const func1 = () => {
    
//     console.log("This is function 1");
//     func2();
//     console.log("Called both functions successfully");
// }

// func1();


//Asynchronous function

const fnc2 = () => {
    setTimeout(() => {
        console.log("This is function 2");
    }, 3000);
}

const fnc1 = () => {
    
    console.log("This is function 1");
    fnc2();
    console.log("Function 1 called ...");
    console.log("Function 2 called ...");
    console.log("Both functions executed successfully...");
}

fnc1();