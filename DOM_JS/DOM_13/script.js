const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.facebook.com/');

link.textContent = 'Search Engine';


const msg = document.querySelector('p');

console.log(msg.getAttribute('class'));

msg.setAttribute('class', 'success');

msg.setAttribute('style', 'color:coral');