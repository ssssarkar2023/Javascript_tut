/*

An event is an action that occurs in the browser,when the user cliks a button, we may want to respond to click event.

Each event may have an vent handler which is a block of code that will be executed when the event occurs.

An event handler is also known as event listener, it listens to the event and executes when the event occurs.
*/

let button = document.querySelector('#btn');

//console.log(button);

function display() {
    alert('Button clicked!!!');
}

button.addEventListener('click', display);

/*

First of all we have selected the button with the id "btn" by using querySelector() method.

Secondly we have used here function called display() which is an even handler.

Finally we have registered an event handler using the addEventListener() method so that when user click the button, the display function will be called.


*/

