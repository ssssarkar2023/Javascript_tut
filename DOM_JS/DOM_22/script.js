const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    const li = document.createElement('li');
    li.textContent = 'New element adding';
    ul.appendChild(li);
});


const items = document.querySelectorAll('li');

/*
items.forEach(item => {
   
    item.addEventListener('click', e => {
        e.stopPropagation();
        console.log('event in li');
        e.target.remove();
    })
});
*/

ul.addEventListener('click', e => {
    console.log('event in ul');
    console.log(e.target);
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

/*
document.body.addEventListener('click', function () {
    console.log('event in body');
});
*/
