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
introText.textContent = 'Welcome to my coding quiz. Select as many correct answers as you can within the time; go for the highscore!';
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


var count;
var timer;
var score;
var finalScore;
var highScore = 0;
var i = 0;

var questions = [
    'JavaScript is a(n) ___ language', 
    'Which of the following is used to define a variable?', 
    'The .push() method does what?', 
    'The argument of a function must contain ___ to use event.preventDefault', 
    'What method checks if an item is in an array?', 
    'A Boolean expression can result in which values?',
    'If isNaN(x) returns true, then x:',
    'What method removes an item from an array?',
    'The default input type of a form is:',
    'A form input type which allows one option of many to be selected is called:',
    'A form input type which allows one or more options of many to be selected is called:',
    "document.querySelector('#x') will:",
    "document.createElement('h1') will:"];
var a = ['Object-Oriented', 'Var', 'Shuffles an array', 'event', '.contains()', 'null', 'Is not a number', '.unshift()', 'text', 'text', 'text', 'Select all h1 elements', 'Create an h1 element']
var b = ['Object-Based', 'Let', 'Adds an item to the end of an array', 'e', '.includes()', 'true', 'Is a number', '.push()', 'radio', 'radio', 'radio', 'Select elements with the class x', 'Select all h1 elements']
var c = ['Procedural', 'Const', 'Removes an item from an array', 'prevent', '.matches()', 'false', 'Is true', '.pop()', 'button', 'button', 'button', 'Select the element with the id x', 'Select the first occurence of an h1 element']
var d = ['None of the above', 'All of the above', 'Adds an item to the beginning of an array', 'default', '.pop()', 'All of the above', 'Is false', '.toUpperCase()', 'checkbox', 'checkbox', 'checkbox', 'Create an element with the id x', 'Select the element with the id h1']
var correctAnswers = ['Object-Oriented', 'All of the above', 'Adds an item to the end of an array', 'event', '.includes()', 'Is not a number', '.pop()', 'text', 'radio', 'checkbox', 'Select the element with the id x', 'Create an h1 element']

score = 50;

function init() {
    
    header.appendChild(viewScores);
    header.appendChild(timerEl);

    gameText.appendChild(intro);
    intro.appendChild(gameTitle);
    intro.appendChild(introText);
    intro.appendChild(startButton);
}

function start () {
    count = 30;
   
    gameText.removeChild(intro);
    renderQuiz();
    countDown();
}

function countDown() {
    timer = setInterval( function() {

        if(count === 0) {
            clearInterval(timer);
            endGame();

        } else {
            count--;
            score = score - 5;
            timerEl.textContent = 'Time: ' + count;
        }

    }, 1500);
}

function renderQuiz() {
    quesText.textContent = questions[i];
    ans1.textContent = a[i];
    ans2.textContent = b[i];
    ans3.textContent = c[i];
    ans4.textContent = d[i];

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
    i++;    
        if(correctAnswers.includes(element.textContent)) {
            score = score + 10;

        } else { score = score - 10}
    }
    
    if(i == questions.length) {
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
    userScoreText.textContent = ('Your score is ' + score + '/30');
    saveScoreText.textContent = ('Save your score:');
    saveIn.setAttribute('placeholder', 'Your initials here');

    gameText.appendChild(saveDiv);
    saveDiv.appendChild(endGameText);
    saveDiv.appendChild(userScoreText);
    saveDiv.appendChild(saveScoreText);
    saveDiv.appendChild(saveIn);
    saveDiv.appendChild(submitBttn);
}

submitBttn.addEventListener('click', function saveScores() {
    var userInput = {
       saveIn: saveIn.value,
       "score": score
    }

    localStorage.setItem("userInput", JSON.stringify(userInput));
    
    gameText.removeChild(saveDiv);
    displayScores();
})

function displayScores() {
    var lastScore = JSON.parse(localStorage.getItem('userInput'));
    var player = document.createElement('li');
    player.innerHTML = lastScore.saveIn + ' - ' + lastScore.score;
    
    

    var hsText = document.createElement('h2');
    hsText.textContent = ('Highscores');
    var backBttn = document.createElement('button');
    backBttn.textContent = ('Go Back');
    var clearBttn = document.createElement('button');
    clearBttn.textContent = ('Clear Highscores');

    gameText.appendChild(displayDiv);
    displayDiv.appendChild(hsText);
    displayDiv.appendChild(scoresList);
    scoresList.appendChild(player);
    scoresList.appendChild(backBttn);
    scoresList.appendChild(clearBttn);
}






init();
startButton.addEventListener('click', start);




