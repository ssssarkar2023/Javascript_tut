let cat = document.querySelector(".cat");

let fox = document.querySelector(".fox");

let dog = document.querySelector(".dog");

const catBtn = document.querySelector(".get-cat");

const dogBtn = document.querySelector(".get-dog");

const foxBtn = document.querySelector(".get-fox");

catBtn.addEventListener("click", getRandomCat);
dogBtn.addEventListener("click", getRandomDog);
foxBtn.addEventListener("click", getRandomFox);

function getRandomCat() {
    
    fetch("https://aws.random.cat/meow")
        .then((response) => response.json())
        .then((responseData) => {
           cat.innerHTML=`<img src="${responseData.file}"/>` 
        });
}

function getRandomDog() {
    fetch("https://random.dog/woof.json")
        .then((response) => response.json())
        .then((responseData) => {
            dog.innerHTML = `<img src="${responseData.url}"/>`;
        });
}

function getRandomFox() {
    
    fetch("https://randomfox.ca/floof")
        .then((response) => response.json())
        .then((responseData) => {
           fox.innerHTML=`<img src="${responseData.image}"/>`
        });
}