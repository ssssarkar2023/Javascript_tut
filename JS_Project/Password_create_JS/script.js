const rangeCharacters = document.getElementById("range-char");

const numberCharacters = document.getElementById("number-char");

const formContainer = document.getElementById('password-form');

const numbersEl = document.getElementById('numbers');

const symbolsEl = document.getElementById('symbols');

const passwordEl = document.getElementById('password');

const upperCaseEl = document.getElementById('uppercase');

const passwordDisplay = document.getElementById('password-display');

const lowercaseCharCodes = arrayLowToHigh(97, 122);

const numberCharCodes = arrayLowToHigh(48, 57);

const symbolCharCodes = arrayLowToHigh(33, 47).concat(58, 64).concat(91, 96).concat(123, 126);

const uppercaseCharCodes = arrayLowToHigh(65, 90);

//Synchronizing range and number inputs

rangeCharacters.addEventListener("input", syncCharAmount);
numberCharacters.addEventListener("input", syncCharAmount);

function syncCharAmount(e)
{
    const valueAmount = e.target.value;
    //console.log(valueAmount);

    rangeCharacters.value = valueAmount;
    numberCharacters.value = valueAmount;
}

//Generating the password when the form is submitted

formContainer.addEventListener("submit", function (e) {
    
    e.preventDefault();

    const characterAmount = numberCharacters.value;

    const includeNumbers = numbersEl.checked;

    const includeSymbols = symbolsEl.checked;

    const includeUppercase = upperCaseEl.checked;
    
    //console.log(characterAmount, includeNumbers, includeSymbols,includeUppercase);

    const password = generatePassword(characterAmount, includeNumbers, includeSymbols, includeUppercase);

   // console.log(password);
    
    passwordDisplay.innerText=password;

});


//Generate password

function generatePassword(characteramount, includeNumbers, includeSymbols, includeUppercase)
{
    let charCodes = lowercaseCharCodes;

    if (includeNumbers) {
        charCodes = charCodes.concat(numberCharCodes);
    }
    if (includeSymbols) {
        charCodes = charCodes.concat(symbolCharCodes);
    }
    if (includeUppercase) {
        charCodes = charCodes.concat(uppercaseCharCodes);
    }

    //console.log(charCodes);

    const passwordCharacters = [];

    for (let x = 0; x < characteramount; x++){
        
        let characterCodes = charCodes[Math.floor(Math.random() * charCodes.length)];

        passwordCharacters.push(String.fromCharCode(characterCodes));
    }

    return passwordCharacters.join("");
}


//Character codes

function arrayLowToHigh(low, high)
{
    let array = [];

    for (let i = low; i <= high; i++)
    {
        array.push(i);
    }

    return array;
}