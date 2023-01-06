const word = document.getElementById('word');

const text = document.getElementById('text');

const scoreEl = document.getElementById('score');

const timeEl = document.getElementById('time');

const endgameEl = document.getElementById('end-game-container');

const settingsbtn = document.getElementById('settings-btn');

const settings = document.getElementById('settings');

const settingsForm = document.getElementById('settings-form');

const difficultySelect = document.getElementById('difficulty');

//List of words

const words = [
    'sigh',
    'tense',
    'favorite',
    'pies',
    'food',
    'airplane',
    'dependent',
    'bad',
    'material',
    'superficial',
    'dimension',
    'superfluous',
    'obscure',
    'supercilious',
    'quince',
    'uncomplimentary',
    'ridiculous',
    'posterity',
    'bequeath',
    'solitude',
    'drag',
    'loving',
    'feeble',
    'elude',
    'reciprocate',
    'incorporate',
    'highfalutin',
    'obstinance',
    'yoghurt',
    'quaint'
];

let randomWord;

let score = 0;

let time = 10;

text.value = '';
//set difficulty to value in localstorage

let difficulty = localStorage.getItem('difficulty') != null ? localStorage.getItem('difficulty') : 'medium';


difficultySelect.value=localStorage.getItem('difficulty') != null ? localStorage.getItem('difficulty') : 'medium';

const timeInterval = setInterval(updateTime,1000);

function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function addWordToDOM() {
    randomWord = getRandomWord();
    word.innerText = randomWord;
}



function updateScore() {
    score++;
    scoreEl.innerText = score;


}

//updateTime 
function updateTime() {
    time--;
    timeEl.innerText = time + 's';

    if (time === 0) {
        clearInterval(timeInterval);
        gameOver();
    }

}

function gameOver() {
    endgameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>

    `;
    text.value = '';
    

    endgameEl.style.display = 'flex';
}

addWordToDOM();

text.addEventListener('input', e => {
   
    const insertedText = e.target.value;

    if (insertedText === randomWord) {
        addWordToDOM();
        updateScore();

        e.target.value = '';

        if (difficulty === 'hard') {
            time += 2;
        } else if (difficulty === 'medium') {
            time += 3;
        } else {
            time += 5;
        }

        updateTime();
    }
    
});

settingsbtn.addEventListener('click', () => settings.classList.toggle('hide'));

settingsForm.addEventListener('change', e => {
    //console.log(e.target.value);
    difficulty = e.target.value;

    localStorage.setItem('difficulty', difficulty);

    
});