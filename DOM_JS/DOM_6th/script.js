//const bodydiv = document.createElement('div');//<div></div>

//const text = document.createTextNode('This is simple text');

//bodydiv.appendChild(text);

//document.body.appendChild(bodydiv);

const heading = document.createElement('h2');

const headingText = document.createTextNode('Dynamic Heading');

heading.appendChild(headingText);

const result = document.querySelector('#result');

heading.classList.add('blue');

result.appendChild(heading);