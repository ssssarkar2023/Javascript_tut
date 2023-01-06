const changeBtn = document.querySelector(".change-bg");

const restBtn = document.querySelector('.reset-bg');

/*
changeBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "dodgerblue";
    console.log("Change Button clicked...");
});

restBtn.addEventListener("click", function () {
    document.body.style.backgroundColor = "white";
    console.log("Rest Button clicked...");
});
*/
/*
changeBtn.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "dodgerblue";
    console.log("Change Button clicked...");
});

restBtn.addEventListener("dblclick", function () {
    document.body.style.backgroundColor = "white";
    console.log("Rest Button clicked...");
});
*/

window.addEventListener("scroll", function () {
    console.log("Scroll event occured...");
   document.body.style.backgroundColor = "coral";
   document.body.style.color = "white";
    document.body.style.lineHeight = "2.1";
})