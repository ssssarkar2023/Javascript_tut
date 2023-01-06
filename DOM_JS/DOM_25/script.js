const form = document.getElementById('form');

const name1 = document.getElementById('name');

const password = document.getElementById('password');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log('Form Submitted...'); 
    console.log(name1.value);
    console.log(password.value);
});