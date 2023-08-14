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
var answers1 = ['Other arrays', 'Strings', 'Numbers', 'Booleans', 'All of the above'];

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
   
    countDown();
    renderQuiz();
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

function renderQuiz() {
    var ulEl = document.createElement('ul');
    var qText = document.createElement('h2');
    qText.textContent = 'question';
    var liEl = document.createElement('li');
    liEl.textContent = 'First answer liEl';
    
    gameText.appendChild(ulEl);
    gameText.appendChild(qText);
    qText.appendChild(liEl);

}


init();
startButton.addEventListener('click', start);
