var header = document.querySelector('header');

var viewScores = document.createElement('p');
var timerEl = document.createElement('p');

viewScores.textContent = 'View High Scores';
timerEl.textContent = 'Time:';

var gameText = document.querySelector('.game-text');



var gameTitle = document.createElement('h1');
var introText = document.createElement('p');
var startButton = document.createElement('button');




gameTitle.textContent = 'JavaScript Quiz';
introText.textContent = 'Welcome to my coding quiz. Select as many correct answers as you can within the time; go for the highscore!';
startButton.textContent = 'Start';

var quizDiv = document.querySelector('#quiz');
var quesText = document.querySelector('#ques-text');
var ansButtons = document.querySelector('.answer-list')

var ans1 = document.createElement('li');
var ans2 = document.createElement('li');
var ans3 = document.createElement('li');
var ans4 = document.createElement('li');

var i = 0;

var count;
var timer;
var score;

var questions = ['Arrays in JavaScript can be used to store:', 'Commonly used data types include:'];
var a = ['Other arrays', 'Bumpkins']
var b = ['Numbers and strings', 'Flings']
var c = ['Booleans', 'Numbers']
var d = ['All of the above', 'Objects']
var correctAnswers = ['All of the above', 'Numbers']

score = 100;

function init() {
    
    header.appendChild(viewScores);
    header.appendChild(timerEl);

    gameText.appendChild(gameTitle);
    gameText.appendChild(introText);
    gameText.appendChild(startButton);
}

function start () {
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
    quesText.textContent = questions[i];
    ans1.textContent = a[i];
    ans2.textContent = b[i];
    ans3.textContent = c[i];
    ans4.textContent = d[i];

    
    
    ansButtons.appendChild(ans1);
    ansButtons.appendChild(ans2);
    ansButtons.appendChild(ans3);
    ansButtons.appendChild(ans4);

}

quizDiv.addEventListener('click', function submitAns(e){
    var element = e.target;
    if(element.matches('li')) {
        if(correctAnswers.includes(element.textContent)) {
            score = score + 10;
        } else { score = score - 10}
    }

    i++;
    renderQuiz(); 

});








init();
startButton.addEventListener('click', start);




