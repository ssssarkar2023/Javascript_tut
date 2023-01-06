const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

canvasEl.width = 600;
canvasEl.height = 600;


canvasContext.fillStyle = "white";

//canvasContext.fillRect(100, 200, 50, 50);

canvasContext.fillRect(50, 50, 50, 50);
canvasContext.fillRect(100, 100, 50, 50);
canvasContext.fillRect(150, 150, 50, 50);
canvasContext.fillRect(200, 200, 50, 50);
canvasContext.fillRect(250, 250, 50, 50);
canvasContext.fillRect(300, 300, 50, 50);