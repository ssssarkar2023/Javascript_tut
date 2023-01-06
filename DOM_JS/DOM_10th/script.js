const bodydiv = document.createElement('div');

const text = document.createTextNode('This is div adding...');

bodydiv.appendChild(text);

const result = document.querySelector('#result');

document.body.insertBefore(bodydiv, result);


const smallHeading = document.createElement('h6');

const smallText = document.createTextNode('I am small heading text');

smallHeading.appendChild(smallText);

smallHeading.classList.add('blue');

document.body.replaceChild(smallHeading,bodydiv);