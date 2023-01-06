const friends = ['Raj', 'Kiran', 'Suraj'];

//JSON(Javascript Object Notation)
//JSON.stringify converts an array or object to a string.

localStorage.setItem('friends', JSON.stringify(friends));

//JSON.parse - we can parse the data and the data becomes an array or object

const values = JSON.parse(localStorage.getItem('friends'));

console.log(values);


let fruits;

if (localStorage.getItem('fruits'))
{
    fruits=JSON.parse(localStorage.getItem('fruits'));
} else {
    fruits = [];
}

console.log(fruits);

fruits.push('Apple');
fruits.push('Orange');
fruits.push('Banana'); 

console.log(fruits);

localStorage.setItem('fruits', JSON.stringify(fruits));


//We should not store sensitive information in local storage.

//While data is present in localStorage data does not expire.

//Local storage is not secure compared than using cookies.

//LocalStorage can be used for storing the data on the client side,maximum data saving is about 5MB in localStorage, which has no expiration time.
//We can delete data from localStorage manually otherwise it will be there in the browser.