//localstorage
//It is a data storage in the browser which is a web storage,which allows sites to store the data which will be available even after closing the browser window.

//Web Storage API - localstorage

localStorage.setItem('name', 'Kiran');
localStorage.setItem('friend', 'Peter');
localStorage.setItem('job', 'Developer');

const name1 = localStorage.getItem('name');

const friend1 = localStorage.getItem('friend');

const job1 = localStorage.getItem('job');

console.log(name1, friend1, job1);

localStorage.removeItem('name');

const anotherName = localStorage.getItem('name');
console.log(anotherName);

localStorage.clear();