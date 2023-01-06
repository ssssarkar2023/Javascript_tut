const btn = document.querySelector(".btn");

const heading = document.querySelector('h2');


function changeColors() {
    //console.log("Button clicked");
    let hasClass = heading.classList.contains('blue');
    if (hasClass) {
        heading.classList.remove('blue');
    } else {
        heading.classList.add('blue');
    }
}


btn.addEventListener("click", changeColors);