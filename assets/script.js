var header = document.querySelector('header');

var viewScores = document.createElement('p');
var timerEl = document.createElement('p');

viewScores.textContent = 'View High Scores';
viewScores.setAttribute('class', 'view-score-text');

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
var ansList = document.querySelector('.answer-list');
var rightWrongText = document.createElement('p');

var ans1 = document.createElement('li');
var ans2 = document.createElement('li');
var ans3 = document.createElement('li');
var ans4 = document.createElement('li');

var saveDiv = document.querySelector('#save-score');
var endGameText = document.createElement('h2');
var userScoreText = document.createElement('h3');
var saveIn = document.createElement('input');
var submitBttn = document.createElement('button');
submitBttn.textContent = 'Save';

var displayDiv = document.querySelector('#display-scores');
var scoresList = document.querySelector('.scores-list');
var hsText = document.createElement('h2');
hsText.textContent = ('Highscores');
let scoreListEl;
var buttonsDiv = document.querySelector('.buttons');
var backBttn = document.createElement('button');
var clearBttn = document.createElement('button');

var highScores;
var playerScoresList = [];

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


score;

function init() {
    viewScores.addEventListener('click', viewScore);
    header.appendChild(viewScores);
    header.appendChild(timerEl);

    intro.appendChild(gameTitle);
    intro.appendChild(introText);
    intro.appendChild(startButton);
    timerEl.textContent = 'Time: 30';
}

function start () {
    q = 0;
    score = 0;
    count = 30;

    intro.removeChild(gameTitle);
    intro.removeChild(introText);
    intro.removeChild(startButton);
    rightWrongText.textContent = '';
    renderQuiz();
    countDown();
    viewScores.removeEventListener('click', viewScore);
}

function countDown() {
    timer = setInterval( function() {
        if(count <= 0) {
            clearInterval(timer);
            endGame();

        } else {
            count--;
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
    ansList.appendChild(rightWrongText);
}

ansList.addEventListener('click', function submitAns(e){
    var element = e.target;
    if(element.matches('li')) {
    q++;    
        if(correctAnswers.includes(element.textContent)) {
            score = score + 10;
            rightWrongText.textContent = 'Correct!';
        } else { 
            count = count - 5;
            rightWrongText.textContent = 'Incorrect';
        }
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
    saveIn.setAttribute('placeholder', 'Enter your initials');

    gameText.appendChild(saveDiv);
    saveDiv.appendChild(endGameText);
    saveDiv.appendChild(userScoreText);
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
    playerScoresList.push(playerScore);

    localStorage.setItem("highScores", JSON.stringify(playerScoresList));

    gameText.removeChild(saveDiv);
    displayScores();
}

function displayScores() {
    
    highScores = JSON.parse(localStorage.getItem('highScores'));
        for(i=0; i < highScores.length; i++) {
            scoreListEl = document.createElement('li');
            scoreListEl.textContent = highScores[i];
            scoresList.appendChild(scoreListEl);
        }

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
    gameText.appendChild(intro);
    init();
})

clearBttn.addEventListener('click', function clearScores() {
    scoresList.innerHTML = '';
    localStorage.clear();
    playerScoresList = [];
})

function viewScore() {
    if (playerScoresList.length === 0) {
        alert('No scores saved');
    } else { 
        header.removeChild(viewScores);
        header.removeChild(timerEl);
        gameText.removeChild(intro);
        displayScores();
    }
};

startButton.addEventListener('click', start);
    
init();