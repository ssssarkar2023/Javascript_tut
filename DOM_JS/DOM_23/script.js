const copy = document.querySelector(".copy-p");

copy.addEventListener('copy', () => {
    console.log('Content is copyrighted!!!'); 
});

const box = document.querySelector('.box');

box.addEventListener('mousemove', (e) => {

    box.textContent=`x pos-${e.offsetX} y pos-${e.offsetY}`;

});
