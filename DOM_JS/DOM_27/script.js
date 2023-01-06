const form = document.querySelector('.signup');

const feedback = document.querySelector('.feedback');


form.addEventListener('submit', e => {
    
    e.preventDefault();

    const username = form.username.value;

    const usernamePattern = /^[a-zA-Z]{6,12}$/;

    if (usernamePattern.test(username)) {
        feedback.textContent = 'Username is valid';
    } else {
        feedback.textContent ='Username must contain only letters and in between 6 and 12.'
    }
})