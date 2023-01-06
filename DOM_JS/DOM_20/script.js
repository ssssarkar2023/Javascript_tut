const btn = document.querySelector(".btn");

const heading = document.querySelector('h1');

heading.addEventListener('click', (event) => {
    /*
     target tells that where the event started.
     currentTarget also tell on which element the event was attached
    */
    console.log(event.target);
    console.log(event.currentTarget);
    console.log(this);
});

btn.addEventListener('click', function (e) {
   
    console.log(e.currentTarget);
    console.log(e.target);
    console.log(e.type);
    e.currentTarget.classList.add('blue');

});