const first = document.getElementById('first');

const second = document.getElementById('second');

const third = document.getElementById('third');
//const classValue = first.className;
//console.log(classValue);
first.classList.add('text', 'colors');

third.classList.add('text');

//third.classList.remove('text');

let result = third.classList.contains('text');

if (result)
{
    console.log('text class is present');

} else {
    console.log('text class is not present');
}