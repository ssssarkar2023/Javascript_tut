const heading = document.querySelector("h2");

const btn = document.querySelector(".btn");


//mousedown - button is pressed

/*
btn.addEventListener('mousedown', function () {
    console.log("Button clicked..mousedown event");
});
*/

//mouseup - button is released
/*
btn.addEventListener("mouseup", function () {
    console.log("Button released");
});
*/

//mouseenter - moved into an element

heading.addEventListener('mouseenter', function () {

    console.log("mouseenter event occured...");
    heading.classList.remove('coral');
    heading.classList.add('blue');
});

btn.addEventListener('mouseleave', function () {

    console.log("mouseleave event occured...");
    heading.classList.remove('blue');
    heading.classList.add('coral');
});

