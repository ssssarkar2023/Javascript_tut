const chart = document.querySelector(".chart");


const canvas = document.createElement("canvas");

canvas.width = 120;
canvas.height = 120;

chart.appendChild(canvas);

const context2D = canvas.getContext("2d");
const radius = 50;
context2D.lineWidth = 10;

//drawCircle function
function drawCircle(color, ratio, anticlockwise) {
    context2D.strokeStyle = color;
    context2D.beginPath();
    context2D.arc(60, 60, radius, 0, ratio * Math.PI * 2, anticlockwise);
    context2D.stroke();
}

function updateChart(income, outcome) {
    
    context2D.clearRect(0, 0, canvas.width, canvas.height);
    
    let ratio = income / (income + outcome);//3/4=0.75

    drawCircle("chartreuse", -ratio, true);

     drawCircle("tomato", 1-ratio, false);

    
}