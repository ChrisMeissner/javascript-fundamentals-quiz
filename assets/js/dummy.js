// CODE FOR BODY
var body = document.body;

// saving Global Variables
var startBtn = document.getElementById("startQuizBtn");

// // Create Necessary Elements 
// var headerEl = document.createElement('div');
// var viewHighScoreEl = document.createElement('view-high-score');
// var timerEl = document.createElement('timer');
// var mainEl = document.createElement('div')
// var h1El = document.createElement('h1');
// var h2El = document.createElement('h2');
// var startQuizBtnEl = document.createElement('startQuizBtn');
// var questionEl = document.createElement('div');
// var listEl = document.createElement('ol');
// var li1 = document.createElement('li');
// var li2 = document.createElement('li');
// var li3 = document.createElement('li');
// var li4 = document.createElement('li');
// var answerPlayback = document.createElement('div');

// var listItems = document.getElementsByTagName('li');

// viewHighScoreEl.textContent = 'View high scores';
// timerEl.textContent = 'Time: ' + timeLeft
// h1El.textContent = 'Coding Quiz Challenge';
// h2El.textContent = 'Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by ten seconds!'
// startQuizBtnEl.textContent = "Start Quiz"

// headerEl.appendChild(viewHighScoreEl);
// headerEl.appendChild(timerEl);
// body.appendChild(h1El);
// body.appendChild(h2El);
// body.appendChild(startBtnEl);

// h1El.setAttribute('style', 'margin:auto; width:50%; text-align:center;');

function startQuiz () {
    var startScreen = document.getElementById('startScreen');
    
}




// function countdown() {
//     var timeLeft = 75;

//     var timeInterval = setInterval(function() {
//         if(timeleft > 0) {
//             timerEl.textContent = "Time: " + timeLeft;
//             timeLeft--;
//         } else {
//             timerEl.textContent = "";
//             clearInterval(timeInterval);
//             displayMessage();
//         }
//     }, 1000);
// }

// startBtn.onclick = countdown;

// // FOR LOCAL STORAGE
// var initialsInput = document.querySelector('#initials');
// var scoreInput = document.querySelector('#score');
// var submitButton = document.querySelector('#submit');
// var userInitialSpan = document.querySelector('#user-initials');
// var userScoreSpan = document.querySelector('#user-score');


// function renderLastRegistered() {
    
//     var initials = localStorage.getItem('initials');
//     var score = localStorage.getItem('score');

//     if(initials === null ) {
//         alert('You must enter your initials to save your score!')
//     }

//     userInitialSpan.textContent = intitials;
//     userScoreSpan.textContent = score;
// }

// submitButton.addEventListener('click', function(event) {
//     event.preventDefault();

//     var initials = document.querySelector('#initials').value;
//     var score = document.querySelector('#score').value;

//     if (initials === '') {
//         displayMessage('Initials cannot be blank');
//     } else {
//         displayMessage('');
//     }

//         localStorage.setItem('initials', initials);
//         localStorage.setItem('score', score);

//         renderLastRegistered();
//     }
// });

// // CODE FOR QUESTIONS AND ANSWERS
// var questions = [
//     {
//         q: 'Commonly used data types DO Not Include:',
//         a: 
//     },
//     {
//         q: 'The condition in an if / else statement is enclosed with _____.',
//         a:
//     },
//     {
//         q: 'Arrays in Javascript can be used to store _____.',
//         a:
//     }
// ];

// var score = 0;

// for(var i = 0; i < questions.length; i++) {
//     var answer = confirm(questions[i].q)
//     if (answer === questions[i].a) {
//         score++;
//         alert('Correct!')
//     } else {
//         alert('Wrong!')
//     }
// }

// alert('Your final score is' + score + ".")
