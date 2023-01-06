//const result = document.querySelector('#result');

//console.log(result);

//result.style.backgroundColor = 'coral';

//result.style.color = 'white';

//const item = document.querySelector('.veg');

//console.log(item);

//const item2 = document.querySelector('li:last-child');

//const item2 = document.querySelector('li:nth-child(3)');
//console.log(item2);

const litems = document.querySelectorAll('.veg');
litems.forEach(
    function (item) {
       // console.log(item);
        item.style.color = 'green';
    }
)