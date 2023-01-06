function validate()
{
    let username = document.getElementById('username').value;

    let email = document.getElementById('email').value;

    let password = document.getElementById('password').value;

    let cpassword = document.getElementById('cpassword').value;
    
    checkUserName(username);

    checkEmail(email);

    checkPassword(password);

    checkPasswordMatch(password,cpassword);
}

function checkUserName(username)
{

    if (username.length >= 7)
    {
        document.getElementById('username').classList.add('success');
        document.getElementById('username').classList.replace('error', 'success');
        document.getElementById('username_error').innerText = '';

    } else {
        document.getElementById('username').classList.add('error');
        document.getElementById('username_error').innerText = 'Username must be more than 7 letters long';

    }

}

function checkEmail(email)
{

    if (email.length >= 8 && email.includes('@gmail.com'))
    {
        document.getElementById('email').classList.add('success');
        document.getElementById('email').classList.replace('error', 'success');
        document.getElementById('email_error').innerText = '';
    } else {
        document.getElementById('email').classList.add('error');
        document.getElementById('email_error').innerText = 'Email must include @gmail.com and it should be 8 letters long.';
    }


}

function checkPassword(password) {

    if (password.length >= 7 && password.includes('.') && password.includes('_') && password.includes('#') && password.includes('$')) {
        document.getElementById('password').classList.add('success');
        document.getElementById('password').classList.replace('error', 'success');
        document.getElementById('password_error').innerText = '';
    } else {
        document.getElementById('password').classList.add('error');
        document.getElementById('password_error').innerText = 'Password must be 7 letters long and it should include ,_#$';
    }

}

function checkPasswordMatch(password, cpassword)
{
    if (password == cpassword)
    {
        document.getElementById('cpassword').classList.add('success');
        document.getElementById('cpassword').classList.replace('error', 'success');
        document.getElementById('cpassword_error').innerText = '';
    } else {
        document.getElementById('cpassword').classList.add('error');
        document.getElementById('cpassword_error').innerText = 'Passwords are not matching,please verify and type it again';
    }
}