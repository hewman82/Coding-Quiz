var header = document.querySelector('header');

var viewScores = document.createElement('p');
var timerEl = document.createElement('p');

var gameText = document.querySelector('.game-text');

var gameTitle = document.createElement('h1');
var introText = document.createElement('p');
var startButton = document.createElement('button');




var count;
var timer;
var score;

var questions = ['Arrays in JavaScript can be used to store:', 'Commonly used data types include:'];
var a = ['Other arrays', 'Booleans']
var b = ['Numbers and strings', 'Strings']
var c = ['Booleans', 'Numbers']
var d = ['All of the above', 'All of the above']

function init() {
    viewScores.textContent = 'View High Scores';
    timerEl.textContent = 'Time:';
    gameTitle.textContent = 'JavaScript Quiz';
    introText.textContent = 'Welcome to my coding quiz. Select as many correct answers as you can within the time; go for the highscore!';
    startButton.textContent = 'Start';
    header.appendChild(viewScores);
    header.appendChild(timerEl);
    gameText.appendChild(gameTitle);
    gameText.appendChild(introText);
    gameText.appendChild(startButton);
}

function start () {
    score = 0;
    count = 10;
   
    resetScreen();
    renderQuiz();
    countDown();
    
}

function countDown() {
    timer = setInterval( function() {
        
        count--;
        timerEl.textContent = 'Time: ' + count;

        if(count === 0) {
            clearInterval(timer);
        }


    }, 1500);
}

function resetScreen() {
    gameText.removeChild(gameTitle);
    gameText.removeChild(introText);
    gameText.removeChild(startButton);
}

function renderQuiz() {
    i = 0;
    var q = document.createElement('ul');
    var a1 = document.createElement('li');
    var a2 = document.createElement('li');
    var a3 = document.createElement('li');
    var a4 = document.createElement('li');
    var qText = document.createElement('h2');
    var submitButton = document.createElement('button');

    submitButton.textContent = 'Submit';

    qText.textContent = questions[i];
    a1.textContent = a[i];
    a2.textContent = b[i];
    a3.textContent = c[i];
    a4.textContent = d[i];
    
    gameText.appendChild(q);
    gameText.appendChild(qText);
    gameText.appendChild(a1);
    gameText.appendChild(a2);
    gameText.appendChild(a3);
    gameText.appendChild(a4);
    gameText.appendChild(submitButton);
}


init();
startButton.addEventListener('click', start);
