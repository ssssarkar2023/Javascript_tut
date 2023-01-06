//const first = document.querySelector('.first');

//const idValue = first.getAttribute('id');

//console.log(idValue);

const link = document.getElementById('link');

//const showLink = link.getAttribute('href');

//console.log(showLink);

const last = link.nextElementSibling;

console.log(last);
last.setAttribute('class', 'first');
last.textContent = 'This list item also have class of first';

const links = document.querySelectorAll('.first');
console.log(links);
console.log(links.length);