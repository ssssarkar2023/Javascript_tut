let quizData = [

    {
        question: 'Which framework is related to Javascript?',
        a: '.NET Core',
        b: 'Flask',
        c: 'React JS',
        d: 'Django',
        correct: 'c'
    },

    {
        question: 'Which is not a programming language',
        a: 'HTML',
        b: 'Python',
        c: "Java",
        d: 'Javascript',
        correct: 'a'
    },

    {
        question: 'Which is not a framework',
        a: 'Javascript',
        b: 'React JS',
        c: 'Django',
        d: 'Angular',
        correct: 'a'
    },

    {
        question: 'CSS stands for',
        a: 'Cascading Style State',
        b: 'Cascading Style Sheet',
        c: 'Cascading Sheet State',
        d: 'Cascading Shape Style',
        correct: 'b'
    },

    {
        question: 'Which is the correct print statement in Python',
        a: 'printf("Hello World")',
        b: 'println("Hello World")',
        c: 'print("Hello World")',
        d: 'print1n("Hello World")',
        correct: 'c'
    }
];

let answer = document.querySelectorAll('.answer');
//console.log(answer);

let question = document.getElementById('question');

let option_a = document.getElementById('a_value');

let option_b = document.getElementById('b_value');

let option_c = document.getElementById('c_value');

let option_d = document.getElementById('d_value');

let submitbtn = document.getElementById('submit');

let currentQuestion = 0;

let quizScore = 0;

loadQuiz();

function loadQuiz() {
     
    deselect();
    question.innerText = quizData[currentQuestion].question;
    option_a.innerText = quizData[currentQuestion].a;
    option_b.innerText = quizData[currentQuestion].b;
    option_c.innerText = quizData[currentQuestion].c;
    option_d.innerText = quizData[currentQuestion].d;


}

function deselect() {
    answer.forEach(ans => ans.checked = false);
}


submitbtn.addEventListener('click', () => {
   
   // console.log("Submitted");
    let selectedOption;

    answer.forEach(answer => {
        if (answer.checked) {
            selectedOption = answer.id;
        }
    });

    if (selectedOption === quizData[currentQuestion].correct)
    {
        quizScore = quizScore + 1;
    }
    currentQuestion = currentQuestion + 1;

    if (currentQuestion == quizData.length) {
        
        document.getElementById('quizdiv').innerHTML = `
        <h1>
           You have answered ${quizScore} correctly out of ${quizData.length}.
           <br/>
           <br/>

           <a style="background-color:dodgerblue;color:white;text-align:center" href="index.html">Start again</a>

        </h1>
        
        `;

    } else {
        loadQuiz();
    }

    

});