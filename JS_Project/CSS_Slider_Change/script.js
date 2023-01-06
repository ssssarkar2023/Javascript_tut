let blockEl = document.querySelector("#block");

let verticalPosition = document.querySelector("#position-y");

let horizontalPosition = document.querySelector("#position-x");

let blockSize = document.querySelector("#size");

let shapeSelector = document.querySelector("#shape-select");

let okBtn = document.querySelector("#ok-btn");

let rgbaR = document.querySelector("#rgba-r");

let rgbaG = document.querySelector("#rgba-g");

let rgbaB = document.querySelector("#rgba-b");

let rgbaA = document.querySelector("#rgba-a");

let rgbaContainer = document.querySelector(".rgba-container");

let rgbainputs = rgbaContainer.querySelectorAll("input");

//vertical position changer

verticalPosition.addEventListener("change", function () {
   // console.log("vertical position");
   // console.log(verticalPosition.value);

    blockEl.style.top=verticalPosition.value+"px";
});

//Horizontal Position changer

horizontalPosition.addEventListener("change", function () {
   
    //console.log(horizontalPosition.value);

    blockEl.style.left=horizontalPosition.value+"px";

});


//Size Changer

blockSize.addEventListener("change", function () {
   
    blockEl.style.transform = "scale(" + blockSize.value + ")";

});

//Shape Changer

okBtn.addEventListener("click", function () {

    //console.log(shapeSelector.value);
    let shapeOption = shapeSelector.value;
    if (shapeOption === "1") {
        blockEl.style.borderRadius = "0";
    } else if (shapeOption === "2") {
        blockEl.style.borderRadius = "50%";
    }
});

//Background color changer

for (let i = 0; i < rgbainputs.length; i++)
{
   // console.log(rgbainputs[i]);
    
    rgbainputs[i].addEventListener("change", function () {
       
        blockEl.style.backgroundColor = "rgba(" + rgbaR.value + "," + rgbaG.value + "," + rgbaB.value + "," + rgbaA.value + ")";
    });
}

