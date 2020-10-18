var body = document.body;

var startBtn = document.getElementById('startQuizBtn');
var startScreen = document.getElementById('startScreen');
var questionScreen = document.getElementById('questionScreen');
var endScreen = document.getElementById('endScreen');
var timerEl = document.getElementById('timer');
var timerContEl = document.getElementById('timeContainer');
var choicesEl = document.getElementById('choices');
var feedbackEl = document.getElementById('feedback');
var submitBtn = document.getElementById('submitInit');
var goBackBtn = document.getElementById('backBtn');
var clearHighScoreHistoryBtn = document.getElementById('clearBtn');
var highScoreScreen = document.getElementById('highScoreScreen');
var scoreList = document.getElementById('scoreList');

var clockInterval;
var gameOver = false;

var time = 75;

var questionNumber = 0;

var questionArray = [
    {
        q: 'Commonly used data types DO Not Include:',
        c: ['strings', 'booleans', 'alerts', 'numbers'],
        a: 'alerts'
    },
    {
        q: 'The condition in an if / else statement is enclosed with _____.',
        c: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'],
        a: 'curly brackets'
    },
    {
        q: 'Arrays in Javascript can be used to store _____.',
        c: ['numbers and strings', 'other arrays', 'booleans', 'all of the above'],
        a: 'all of the above'
    },
    {
        q: 'String values must be enclosed within _____ when being assigned to variables.',
        c: ['commas', 'curly brackets', 'quotes', 'parenthesis'],
        a: 'quotes'
    },
    {
        q: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        c: ['JavaScript', 'terminal/bash', 'for loops', 'console log'],
        a: 'console log'
    }
];

function startQuiz() {
    startScreen.setAttribute("class", "hide");
    questionScreen.removeAttribute("class");
    clockInterval = setInterval(clock, 1000);
    questions();
}

function clock() {
   
    if(time <= 0 || gameOver) {
        timerEl.textContent = "";
        gameEnd ();
    } else {
        timerEl.textContent = time;
        time--;
    }
}

var questions = function () {
    var currentQuestion = questionArray[questionNumber]
    var title = document.getElementById('questionTitle')
    title.textContent = currentQuestion.q;
    choicesEl.innerHTML = '';
    for(var i = 0; i < currentQuestion.c.length; i++) {
        var choice = document.createElement('button');
        choice.setAttribute('value', currentQuestion.c[i]);
        choices.setAttribute('class', 'choice')
        choice.innerHTML = (i + 1) + ". " + currentQuestion.c[i];
        choice.onclick = checkAnswer;
        choicesEl.appendChild(choice);
    }
} 

function checkAnswer() {
    var currentQuestion = questionArray[questionNumber]
    if(this.value === currentQuestion.a) {
        feedbackEl.textContent = 'Correct!';
    } else {
        feedbackEl.textContent = 'Incorrect!';
        time = time - 10;
    }
    questionNumber++;
    if(questionNumber === questionArray.length) {
        gameEnd();
    } else {
        questions();
    }
}

function gameEnd() {
    gameOver === true;
    questionScreen.setAttribute("class", "hide");
    endScreen.removeAttribute("class");
    var score = document.getElementById('finalScore');
    score.textContent = time;
    timerEl.setAttribute('class', 'hide');
    clearInterval(clockInterva);
}

function submit() {
    var initialsEl = document.getElementById('initial');
    var initials = initialsEl.value.trim();
    var playerScore = {score:time, initials:initials}
    highScoreScreen.removeAttribute('class');
    endScreen.setAttribute('class', 'hide');
    var allScores = JSON.parse(window.localStorage.getItem('scores')) || []
    allScores.push(playerScore);
    window.localStorage.setItem('scores', JSON.stringify(allScores));
    scoreList.textContent = "";
    for(var i = 0; i < allScores.length; i++) {
        scoreList.textContent = scoreList.textContent + (i+1) + ". " + allScores[i].initials + " - " + allScores[i].score + "";
    }
}


function goBack() {
    highScoreScreen.setAttribute('class', 'hide');
    startScreen.removeAttribute('class');
    goBackBtn.addEventListener('reset');
}

function clear() {
    window.localStorage.setItem('scores', '');
    scoreList.textContent = "";
}


// Buttons
startBtn.onclick = startQuiz
submitBtn.onclick = submit
goBackBtn.onclick = goBack
clearHighScoreHistoryBtn.onclick = clear