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
var scoreList = document.getElementById('scoreList')

var clockInterval;
var gameOver = false;

var time = 75;

var questionNumber = 0;

var questionArray = [
    {
        q: 'Commonly used data types DO Not Include:',
        c: ['red', 'blue', 'yellow', 'white'],
        a: 'blue'
    },
    {
        q: 'The condition in an if / else statement is enclosed with _____.',
        c: ['red2', 'blue2', 'yellow2', 'white2'],
        a: 'red2'
    },
    {
        q: 'Arrays in Javascript can be used to store _____.',
        c: ['red3', 'blue3', 'yellow3', 'white3'],
        a: 'white3'
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
        choice.textContent = (i + 1) + ". " + currentQuestion.c[i];
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
    clearInterval(clockInterval);
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
        scoreList.textContent = scoreList.textContent + "\n" + i + 1 + ". " + allScores[i].initials + " - " + allScores[i].score;
    }
    
    }

    //Get the initials
    //Get the time (score)
    //localstorage -> [{}, {}, {}] -> {initials, score}
    //localstorage.set(initials, score) //current user
    //hide the endScreen
    //show HighScore scree or new page
    //get all users localstorage -> sort by score highest to lowest
    //highscore screen have replay button

function goBack() {
    highScoreScreen.setAttribute('class', 'hide');
    startScreen.removeAttribute('class');
    
}

function clear() {
    window.localStorage.setItem('scores', "");
    scoreList.textContent = "";

}


// Buttons
startBtn.onclick = startQuiz
submitBtn.onclick = submit
goBackBtn.onclick = goBack
clearHighScoreHistoryBtn.onclick = clear