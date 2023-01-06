// let sentence = "The Quick brown fox jumps over the lazy dog";

//Matching a word in a sentence (case-sensitive)

// let reg1 = /dog/;
// let reg1 = /cat/;

// let searchResult = reg1.test(sentence);
// console.log(searchResult);

//Matching for multiple words (OR|)

// let reg1 = /dog | fox | brown/;
// let reg1 = /dog | crow | brown/;
// let reg1 = /bird | fish | monkey/;
// let reg1 = /bird | fox | monkey/;
// let searchResult = reg1.test(sentence);

// console.log(searchResult);

//Ignoring the case-sensitiveness (using i flag)
// let sentence = "The Quick brown fox jumps over the lazy dog";
// let reg1 = /quick/i;
// let searchResult = reg1.test(sentence);
// console.log(searchResult);

//Getting the matched word (match method)
// let sentence = "The Quick brown fox jumps over the lazy dog";
// let reg1 = /fox/i;
// let reg1 = /quick/i;
// let reg1 = /bird/i;
// let searchResult =sentence.match(reg1);
// console.log(searchResult);

//Getting the matched words using g flag.

// let sentence = "The Quick brown fox jumps over the lazy dog";
// let reg1 = /the/gi;
// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Getting matched words with the dot

// let sentence = "The Quick brown fox jumps over the lazy dog";

// let reg1 = /.o./g;
// let reg1 = /.u./g;
// let reg1 = /./g;
// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Getting matched characters with []

// let sentence = "The Quick brown fox jumps over the lazy dog";

// let reg1 = /[bdh]/g;

// let searchResult = sentence.match(reg1);

// console.log(searchResult);

//Geeting matched characters of alphabet with []

// let reg1 = /[a-z]/g;

// let searchResult = sentence.match(reg1);
// console.log(searchResult);


//Getting the matched numbers and characters of alphabet with []

// let sentence = "The Quick b4rown fo2x jumps over th3e laz5y dog";

// let reg1 = /[1-4x-z]/gi;

// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Getting not the matched numbers and characters with []...
//^

// let sentence = "The Quick b5rown fox jump6s over t2he lazy 3dog";
// let reg1 = /[^1-3a-h]/gi;//get everything except the ones included in []

// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Getting the matched numbers and characters that occur one or more times
// let sentence = "The Quick b5rown fox jump6s over t2he lazy 3dog";

// let reg1 = /o+/g;
// let reg1 = /Q+/g;
// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Getting the matched characters that occur zero or more times.

// let sentence = "The Quick b5rown fox jump6s over t2he lazy 3dog";

// let sentence = "gooooooogle";
// let sentence = "gogle";
// let reg1 = /go*/;

// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Matching the beginning string pattern
// let sentence = "The Quick b5rown fox jump6s over t2he lazy 3dog";

// let reg1 = /^The/i;
// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Matching the ending string pattern

// let sentence = "The Quick b5rown fox jump6s over t2he lazy 3dog the";

// let reg1 = /The$/i;
// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Matching all letters and numbers & _

// let sentence = "The Quick b5rown fox ju_mp6s ov_er t2he lazy 3dog the";

// let reg1 = /\w/g;

// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Matching all non-letters and non numbers and not _
// let sentence = "The Quick %b5row$n fox !ju_mp6s @ov_er t*2he lazy 3dog the";

// let reg1 = /\W/g;
//the uppercase W matches everything that is not (a-z) & (0-9) & _

// let searchResult = sentence.match(reg1);
// console.log(searchResult);


//Matching all numbers
// let sentence = "The Quick %b5row$n fox !ju_mp6s @ov_er t*2he lazy 3dog the";
// let reg1 = /\d/g;

// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Matching all non numbers
// let sentence = "The Quick %b5row$n fox !ju_mp6s @ov_er t*2he lazy 3dog the";
// let reg1 = /\D/g;
// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Matching all whitespace
// let sentence = "The Quick %b5row$n fox !ju_mp6s @ov_er t*2he lazy    3dog the";

// let reg1 = /\s/g;


// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Matching all non whitespace
// let sentence = "The Quick %b5row$n fox !ju_mp6s @ov_er t*2he lazy    3dog the";

// let reg1 = /\S/g;

// let searchResult = sentence.match(reg1);
// console.log(searchResult);

//Specifying upper and lower number of matches using the quantity specifiers.

// let sentence = "The Quick %b5rOw$n fox !ju_mp6s @ov_er t*2he lazy    3dog the";
// let reg1 = /o{1,}/g;
// let searchResult = sentence.match(reg1);
// console.log(searchResult)

//Specifying exact number of matches using quantity specifiers
// let sentence = "Gooogle";
// let reg1 = /o{3}/;
// let searchResult = sentence.match(reg1);
// console.log(searchResult)

// let reg1 = /o{3}/;
// let searchResult = reg1.test(sentence);
// console.log(searchResult);

//check for all or none

// let sentence1 = "colour";
// let sentence2 = "color";


// let reg1 = /colou?r/;
// let reg2 = /colou?r/;

// let searchResult = reg2.test(sentence2);
// console.log(searchResult);

/*

1 - At least two letters
2 - Numbers should be at the end, if there are any 
3 - Letters can be either lowercase or uppercase
4 - If there are two letters,they cannot contain numbers

*/

// let username = "dfd";
// let username = "d";
// let username = "d8";
// let username = "df6";
// let username = "4dfd";
// let username = "Python4";

// let reg1 = /^[a-zA-Z]{2,}\d*$/;

// let checkStatus = reg1.test(username);
// console.log(checkStatus);

/*
^[a-zA-Z] It matches all letters uppercase and lowercase.
{2,} It requires the quantity of characters to be at least 2.
\d - It inserts matches for digits.
*  - It matches the characters that occur 0 or more times.
$ It makes sure that the digits are at the end of the username.



*/

/*

- Password must be at least 8 characters.

- Passwords must contain atleast two consecutive digits.

*/


// let password = "passw4567";

// let passCheck = /(?=\w{8})(?=\D*\d{2})/;

// let checkStatus = passCheck.test(password);

// console.log(checkStatus);

/*
(?=\w{8}) - a positive lookahead that matches 8 or more letters or digits.

(?=) - a positive look ahead.

\w - matches all letters and numbers and _.

{8} - a quantity specifier that is looking for exact number of occurences that is 8.

\D* - zero or more occurences of characters that are not digits.

\d{2} - two consecutive digits.

*/

/*Capture Groups*/

// let sentence = "java java";

// let reg1 = /(\w+)\s\1/;
// let reg1 = /(\w+)\s/;
//  let reg1 = /(\w+)/;


// let searchResult = reg1.test(sentence);
// console.log(searchResult);

/*
\1 a shorthand way for repeating what is in the paranthesis

(\w+)\s\1 - "java java"

(\w+) - java
*/

// let searchResult =sentence.match(reg1);
// console.log(searchResult);