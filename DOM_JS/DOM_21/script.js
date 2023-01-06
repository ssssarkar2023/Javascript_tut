
const parent = document.querySelector("#div1");

const child = document.querySelector('#btn1');

/*
Event Bubbling:
The concept of event bubbling are invoked when one element is nested on to the other element and are part of the same event.This method or technique is called as event bubbling.

Event bubbling is a sequence of calling the event handlers when one element is nested in another element,and both the elements have registered listeners for the same event.
From the deepest element to its parent element covering all its ancestors on the way from top to bottom calling is performed.

*/


child.addEventListener("click", function (e) {
    //We can use e.stopPropagation() method to stop the bubbling and prevent handlers in the current event from bubbling.
    e.stopPropagation();
    console.log("Button Clicked...");
});

parent.addEventListener("click", function (e) {
    console.log("Div event clicked...");
});

document.body.addEventListener("click", function () {
    console.log("Body event occured..."); 
});