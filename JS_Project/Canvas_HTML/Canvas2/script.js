const canvasEl = document.querySelector("canvas");

const canvasContext = canvasEl.getContext("2d");

canvasEl.width = window.innerWidth;
canvasEl.height = window.innerHeight;

//Randomly draw squares

// for (let i = 1; i <= 12; i++){
    
//     let x = Math.random() * window.innerWidth;

//     let y = Math.random() * window.innerHeight;
    
//     canvasContext.fillStyle = "white";

//     canvasContext.fillRect(x, y, 50, 50);

// }

// for (let i = 1; i <= 12; i++){
    
//     let x = Math.random() * window.innerWidth;

//     let y = Math.random() * window.innerHeight;

//     let red = Math.random() * 255;
//     let green = Math.random() * 255;
//     let blue = Math.random() * 255;
    
//     canvasContext.fillStyle = `rgb(${red}, ${green}, ${blue})`;

//     canvasContext.fillRect(x, y, 50, 50);

// }


// for (let i = 1; i <= 12; i++){
    
//     let x = Math.random() * window.innerWidth;

//     let y = Math.random() * window.innerHeight;

//     let red = Math.random() * 255;
//     let green = Math.random() * 255;
//     let blue = Math.random() * 255;
//     let width = Math.random() * 200;
//     let height = Math.random() * 200;
    
//     canvasContext.fillStyle = `rgb(${red}, ${green}, ${blue})`;

//     canvasContext.fillRect(x, y, width, height);

// }

//Draw Lines

// canvasContext.beginPath();

// canvasContext.moveTo(250, 250);

// canvasContext.lineTo(400, 350);

// canvasContext.lineTo(600, 150);

// canvasContext.lineTo(700, 450);

// canvasContext.lineTo(1200, 350);

// canvasContext.lineTo(1200, 450);



// canvasContext.strokeStyle = "white";

// canvasContext.stroke();


//Drawing Arc
// canvasContext.beginPath();
// canvasContext.arc(1200, 200, 50, 0, Math.PI);
// canvasContext.strokeStyle = "white";
// canvasContext.stroke();

//Drawing Circle
// canvasContext.beginPath();
// canvasContext.arc(1200, 200, 50, 0, Math.PI*2);
// canvasContext.strokeStyle = "white";
// canvasContext.stroke();

// canvasContext.beginPath();
// canvasContext.arc(200, 500, 50, 0, Math.PI*2);
// canvasContext.strokeStyle = "white";
// canvasContext.stroke();


// canvasContext.beginPath();
// canvasContext.arc(400, 500, 50, 0, Math.PI*2);
// canvasContext.strokeStyle = "white";
// canvasContext.stroke();

//Randomly Draw Lines

// for (let i = 0; i < 20; i++)
// {
//     let XStart = Math.random() * window.innerWidth;

//     let YStart = Math.random() * window.innerHeight;

//     let XEnd = Math.random() * window.innerWidth;

//     let YEnd = Math.random() * window.innerHeight;

//     canvasContext.beginPath();
//     canvasContext.moveTo(XStart, YStart);
//     canvasContext.lineTo(XEnd, YEnd);
//     canvasContext.strokeStyle = "white";
//     canvasContext.stroke();
// }


//Randomly Draw Arc

// for (let i = 0; i < 20; i++)
// {
//     let XStart = Math.random() * window.innerWidth;

//     let YStart = Math.random() * window.innerHeight;

//     let radius = (Math.random() * window.innerWidth) / 10;

//     canvasContext.beginPath();
//     canvasContext.arc(XStart, YStart, radius, 0, Math.PI);
//     canvasContext.strokeStyle = "white";
//     canvasContext.stroke();
// }

//Draw Circle randomly

for (let i = 0; i < 20; i++)
{
    let XStart = Math.random() * window.innerWidth;

    let YStart = Math.random() * window.innerHeight;

    let radius = (Math.random() * window.innerWidth) / 10;

    canvasContext.beginPath();
    canvasContext.arc(XStart, YStart, radius, 0, Math.PI*2);
    canvasContext.strokeStyle = "white";
    canvasContext.stroke();
}