/*
setInterval repeatedly calls the callback function until we stop it,we can use clearInterval() method to clear a timer set with the setInterval() method.

*/

function callBack() {
    
    console.log("Hello");
}

let myInterval = setInterval(callBack, 3000);


function stopInterval() {
    
    clearInterval(myInterval);
}

setTimeout(stopInterval, 20 * 1000);
