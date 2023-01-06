const languages = [];
//Callback Hell means complex nested callback.
function favoriteLanguage() {
    
    setTimeout(() => {
        languages.push('Python', 'C#', 'Javascript', 'C++', 'Java', 'C');
        console.log('Languages are added in the array...');

        setTimeout(() => {
            console.log('...Displaying Array after using push method...');
            console.log(languages);

            setTimeout(() => {
                const randomIndex = Math.floor(Math.random() * ((languages.length - 1) - 0) + 0);
                
                console.log(`Favorite Languages :${languages[randomIndex]}`);
            }, 8000);
        }, 6000);
    }, 3000);

}

favoriteLanguage();