const textInput = document.querySelector('input[type="text"]');

/*
textInput.addEventListener("keydown", function () {
    console.log("Key Pressed..."); 
});
*/

/*
textInput.addEventListener("keyup", function () {
   console.log("Key Pressed..."); 
});
*/

textInput.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    console.log(e.target.value);
    console.log(e.clientX, e.clientY);

});