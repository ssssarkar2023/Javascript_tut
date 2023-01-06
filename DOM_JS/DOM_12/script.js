const para = document.querySelector('p');

para.innerText = 'Rajesh is learning Javascript';

const paras = document.querySelectorAll('p');

paras.forEach(p => {
    console.log(p.innerText); 
});

const content = document.querySelector('.content');

console.log(content);

content.innerHTML = `<h2>This sentence is coming dynamically through Javascript</h2>`;

content.innerHTML += `<h3>This is heading 3 adding dynamically through Javascript</h3>`;

console.log(content.innerHTML);

const persons = ['Rakesh', 'Suraj', 'Kiran'];

persons.forEach(pers => {
    content.innerHTML += `<p>${pers}</p>`
});

console.log(content.children);

console.log(content.children[0].textContent);