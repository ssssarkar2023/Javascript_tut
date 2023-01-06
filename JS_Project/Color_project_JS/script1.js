const colors = ["green", "red", "dodgerblue", "coral", "fuchsia", "limegreen", "#DD8FFF", "#F3CBAA", "#FF69AA"];
const btn = document.getElementById("btn1");
const color = document.querySelector(".color");
//console.log(color);
//console.log(btn);
btn.addEventListener("click", function () {
    //console.log("Button clicked"); 
    const randomNumber = getRandomNumber();
    //console.log(randomNumber);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});

function getRandomNumber() {

    return Math.floor(Math.random() * colors.length);

}
