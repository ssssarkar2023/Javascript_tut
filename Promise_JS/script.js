/*

Promise in JS is used to handle asynchronous operations and this promise have one of the three states:

- Pending

- Fulfilled

- Rejected

Promise starts in a pending state which means that the process is not complete.
If the operation is successful, the process ends in a fulfilled state, and if any error occurs then the process ends in a rejected state.

Suppose if we request data or API from the server then initially it will be in pending state,if the data arrives successfully then it will be fulfilled state,or if any error occurs then it will be rejected state.

We can create a promise using the promise constructor

const promise=new Promise((resolve, reject) =>{

});

if the promise returns successfully then resolve() function is called , if an error occurs then reject() function is called.

finally() will be executed always either resolve or rejected.

*/

let languages = [];

//Creating promise

const addLanguagesInArray = new Promise(
    (resolve, reject) => {

        setTimeout(() => {
            languages.push('Python', 'C#', 'Javascript', 'C++', 'Java', 'C');

             resolve('Languages added successfully in the array...');
            // reject('Languages not added successfully in the array');
        }, 2000);
    
    });


const displayLanguages = () => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(languages);
        }, 5000);
    });
}

const languageOfTheDay = () => {
    
    return new Promise((resolve, reject) => {

        setTimeout(() => {
             const randomIndex = Math.floor(Math.random() * ((languages.length - 1) - 0) + 0);
                resolve(`Favorite Languages :${languages[randomIndex]}`);
        }, 7000);
    });
}


addLanguagesInArray.then(result => {
    console.log(result);
    return displayLanguages();
}).then(languages => {
    console.log(languages);
    return languageOfTheDay();
}).then(language => {
    console.log(language);
}).catch(err => {
    console.log('There is an error...');
    console.error(err);
}).finally(() => {
    console.log('Processing Done Successfully...');
});


// addLanguagesInArray.then(result => {
//     console.log(result);
//     return displayLanguages();
// }).then(languages => {
//     console.log(languages);
//     return languageOfTheDay();
// }).then(language => {
//     console.log(language);
// }).finally(() => {
//     console.log('Processing Done Successfully...');
// });