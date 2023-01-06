const canvas = document.getElementById("drawing-canvas");

const decreaseBtn = document.querySelector('#decrease');

const increaseBtn = document.querySelector('#increase');

const strokeThickness = document.querySelector('#size');

const colorBtn = document.querySelector('#color');

const clearBtn = document.querySelector('#clear');

const ctx = canvas.getContext('2d');

let size = 10;

let isPressed = false;

let color = "black";

let x = undefined;

let y = undefined;

//mousedown,mousemove,mouseup

canvas.addEventListener("mousedown", (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    console.log(x, y);
});

canvas.addEventListener("mouseup", (e) => {
   
    isPressed = false;
    x = undefined;
    y=undefined;
});

canvas.addEventListener("mousemove", (e) => {

    if (isPressed)
    {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

//Drawing Lines
function drawLine(x1, y1, x2, y2)
{
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

//Drawing Circles
function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

//Color Button

colorBtn.addEventListener("change", (e) => {
    //console.log(e.target.value); 
    color = e.target.value;
});

increaseBtn.addEventListener("click", () => {
    size += 1;
    if (size > 50) {
        size = 50;
    }
    updateSize();
});

decreaseBtn.addEventListener("click", () => {
    size -= 1;
    if (size < 1) {
        size = 1;
    }
    updateSize();
})

function updateSize() {

    strokeThickness.innerText = size;
}

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});