var header = document.querySelector('header');

var viewScores = document.createElement('p');
var timerEl = document.createElement('p');

viewScores.textContent = 'View High Scores';
timerEl.textContent = 'Time:';

var gameText = document.querySelector('.game-text');
var intro = document.querySelector('#intro');
var gameTitle = document.createElement('h1');
var introText = document.createElement('p');
var startButton = document.createElement('button');

gameTitle.textContent = 'JavaScript Quiz';
introText.textContent = 'Welcome to my coding quiz. Select as many correct answers as you can within the time. Go for the highscore!';
startButton.textContent = 'Start';

var quizDiv = document.querySelector('#quiz');
var quesText = document.createElement('h2');
var ansList = document.querySelector('.answer-list')

var ans1 = document.createElement('li');
var ans2 = document.createElement('li');
var ans3 = document.createElement('li');
var ans4 = document.createElement('li');

var endGameText = document.createElement('h2');
var userScoreText = document.createElement('h3');
var saveScoreText = document.createElement('p');
var saveIn = document.createElement('input');
var submitBttn = document.createElement('button');
submitBttn.textContent = 'Submit';
var cancelBttn = document.createElement('button');

var saveDiv = document.querySelector('#save-score')


var displayDiv = document.querySelector('#display-scores');
var scoresList = document.querySelector('.scores-list');


var hsText = document.createElement('h2');
hsText.textContent = ('Highscores');
let scoreListEl;
var buttonsDiv = document.querySelector('.buttons');
var backBttn = document.createElement('button');
var clearBttn = document.createElement('button');

var highScores  = [];

var count;
var timer;
var score;

var questions = [
    'JavaScript is a(n) ___ language', 
    'Which of the following is used to define a variable?', 
    'The .push() method does what?', 
    'The argument of a function must contain ___ to use Event.preventDefault', 
    'What method checks if an item is in an array?', 
    'A Boolean expression can result in which values?',
    'If isNaN(x) returns true, then x:',
    'What method removes an item from an array?',
    'The default input type of a form is:',
    'A form input type which allows one option of many to be selected is called:',
    'A form input type which allows one or more options of many to be selected is called:',
    "document.querySelector('#x') will:",
    "document.createElement('h1') will:"];
var a = ['Object-Oriented', 'Var', 'Shuffles an array', 'Event', '.contains()', 'Null', 'Is not a number', '.unshift()', 'Text', 'Text', 'Text', 'Select all h1 elements', 'Create an h1 element']
var b = ['Object-Based', 'Let', 'Adds an item to the end of an array', 'E', '.includes()', 'True', 'Is a number', '.push()', 'Radio', 'Radio', 'Radio', 'Select elements with the class x', 'Select all h1 elements']
var c = ['Procedural', 'Const', 'Removes an item from an array', 'Prevent', '.matches()', 'False', 'Is true', '.pop()', 'Button', 'Button', 'Button', 'Select the element with the id x', 'Select the first occurence of an h1 element']
var d = ['None of the above', 'All of the above', 'Adds an item to the beginning of an array', 'Default', '.pop()', 'All of the above', 'Is false', '.toUpperCase()', 'Checkbox', 'Checkbox', 'Checkbox', 'Create an element with the id x', 'Select the element with the id h1']
var correctAnswers = ['Object-Oriented', 'All of the above', 'Adds an item to the end of an array', 'Event', '.includes()', 'Is not a number', '.pop()', 'Text', 'Radio', 'Checkbox', 'Select the element with the id x', 'Create an h1 element']


score = 50;

function init() {
    header.appendChild(viewScores);
    header.appendChild(timerEl);

    intro.appendChild(gameTitle);
    intro.appendChild(introText);
    intro.appendChild(startButton);
}

function start () {
    q = 0;
    count = 30;
   
    intro.removeChild(gameTitle);
    intro.removeChild(introText);
    intro.removeChild(startButton);
    renderQuiz();
    countDown();
}

function countDown() {
    timer = setInterval( function() {

        if(count === 0) {
            clearInterval(timer);
            endGame;

        } else {
            count--;
            score = score - 5;
            timerEl.textContent = 'Time: ' + count;
        }

    }, 1500);
}

function renderQuiz() {
    quesText.textContent = questions[q];
    ans1.textContent = a[q];
    ans2.textContent = b[q];
    ans3.textContent = c[q];
    ans4.textContent = d[q];

    gameText.appendChild(quizDiv);
    quizDiv.appendChild(quesText);
    quizDiv.appendChild(ansList);
    ansList.appendChild(ans1);
    ansList.appendChild(ans2);
    ansList.appendChild(ans3);
    ansList.appendChild(ans4);
}

ansList.addEventListener('click', function submitAns(e){
    var element = e.target;
    if(element.matches('li')) {
    q++;    
        if(correctAnswers.includes(element.textContent)) {
            score = score + 10;

        } else { score = score - 10}
    }
    
    if(q == questions.length) {
        clearInterval(timer);
        endGame();
    } else {
        renderQuiz(); 
    }
});

function endGame() {
    header.removeChild(viewScores);
    header.removeChild(timerEl);
    gameText.removeChild(quizDiv);
    
    endGameText.textContent = ('Fin!');
    userScoreText.textContent = ('Your score is ' + score);
    saveScoreText.textContent = ('Save your score');
    saveIn.setAttribute('placeholder', 'Your initials here');

    gameText.appendChild(saveDiv);
    saveDiv.appendChild(endGameText);
    saveDiv.appendChild(userScoreText);
    saveDiv.appendChild(saveScoreText);
    saveDiv.appendChild(saveIn);
    saveDiv.appendChild(submitBttn);
}

submitBttn.addEventListener('click', saveScore);

function saveScore() {
    var userInput = {
        saveIn: saveIn.value,
        "score": score
    }
    var playerScore = userInput.saveIn + " " + userInput.score;
    highScores.push(playerScore);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    for(i=0; i < highScores.length; i++) { 
        //set condition for highscores.length = 0
        scoreListEl = document.createElement('li');
        scoreListEl.textContent = highScores[i];
        scoresList.appendChild(scoreListEl);
    }
    
    gameText.removeChild(saveDiv);
    displayScores();
}

function displayScores() {
    backBttn.textContent = ('Go Back');
    clearBttn.textContent = ('Clear Highscores');
    gameText.appendChild(displayDiv);
    displayDiv.appendChild(hsText);
    displayDiv.appendChild(scoresList);
    displayDiv.appendChild(buttonsDiv);
    buttonsDiv.appendChild(backBttn);
    buttonsDiv.appendChild(clearBttn);
}

backBttn.addEventListener('click', function returnInit() {
    scoresList.innerHTML = '';
    gameText.removeChild(displayDiv);
    init();
})

clearBttn.addEventListener('click', function clearScores() {
    scoresList.innerHTML = "";
})

viewScores.addEventListener('click', saveScore, displayScores);
//during quiz: exit renderquiz function
//during intro, reset screen

startButton.addEventListener('click', start);

init();