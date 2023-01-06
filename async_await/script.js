/*

async/await keywords allows us to write asynchronous code that build on top of promises which is introduced in ES2017, that looks more readable and easier to write the code.

Technically we can say that async/await is syntactic sugar for promises.


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

//Without try and catch
// async function favoriteLanguage() {


//     const result = await addLanguagesInArray;
//     console.log(result);

//     const languages = await displayLanguages();
//     console.log(languages);

//     const language = await languageOfTheDay();

//     console.log(language);
    
// }


//Using try and catch
//We can catch the error using try..catch statement.
//With try and catch statement
async function favoriteLanguage() {

    try {
    const result = await addLanguagesInArray;
    console.log(result);

    const languages = await displayLanguages();
    console.log(languages);

    const language = await languageOfTheDay();

    console.log(language);
    } catch (err) {
        console.log('Error: ' + err);
        console.error(err);
    }
    finally
    {
        console.log("Successfully Executed...");
    }   
}

favoriteLanguage();