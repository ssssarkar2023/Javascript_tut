const list = document.getElementById('first');

const div = document.getElementById('second');

const item = document.querySelector('.item');
console.log(list);
console.log(div);
console.log(item);
console.log(list.innerHTML);
console.log(div.textContent);
console.log(list.textContent);

const ul = document.createElement('ul');

const newValue = 'New Item';

ul.innerHTML = `

<li>${newValue}</li>
<li>New Item 2</li>
<li>New Item 3</li>

`;

document.body.appendChild(ul);

const newItem = "Adding Item";
div.textContent = `

<li>${newItem}</li>
<li>Div New Item 2</li>
<li>Div New Item 3</li>

`;