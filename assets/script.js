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

var questions = [
    'JavaScript is a(n) ___ language', 
    'Which of the following is used to define a variable?', 
    'The .push() method does what?', 
    'The argument of a function must contain ___ to use event.preventDefault', 
    'What method checks if an item is in an array?', 
    'A Boolean expression can result in which values?',
    'If isNaN(x) returns true, then x',
    'What method removes an item from an array?',
    'The default input type of a form is',
    'A form input type which allows one option of many to be selected is called',
    'A form input type which allows one or more options of many to be selected is called',
    "document.querySelector('#x') will",
    "document.createElement('h1') will"];
var a = ['Object-Oriented', 'Var', 'Shuffles an array', 'event', '.contains()', 'null', 'Is not a number', '.unshift()', 'text', 'text', 'text', 'Select all h1 elements', 'Create an h1 element']
var b = ['Object-Based', 'Let', 'Adds an item to the end of an array', 'e', '.includes()', 'true', 'Is a number', '.push()', 'radio', 'radio', 'radio', 'Select elements with the class x', 'Select all h1 elements']
var c = ['Procedural', 'Const', 'Removes an item from an array', 'prevent', '.matches()', 'false', 'Is true', '.pop()', 'button', 'button', 'button', 'Select the element with the id x', 'Select the first occurence of an h1 element']
var d = ['None of the above', 'All of the above', 'Adds an item to the beginning of an array', 'default', '.pop()', 'All of the above', 'Is false', '.toUpperCase()', 'checkbox', 'checkbox', 'checkbox', 'Create an element with the id x', 'Select the element with the id h1']
var correctAnswers = ['Object-Oriented', 'All of the above', 'Adds an item to the end of an array', 'event', '.includes()', 'Is not a number', '.pop()', 'text', 'radio', 'checkbox', 'Select the element with the id x', 'Create an h1 element']

score = 50;

function init() {
    
    header.appendChild(viewScores);
    header.appendChild(timerEl);

    gameText.appendChild(gameTitle);
    gameText.appendChild(introText);
    gameText.appendChild(startButton);
}

function start () {
    count = 30;
   
    resetScreen();
    renderQuiz();
    countDown();
    
}

function countDown() {
    timer = setInterval( function() {
        
        count--;
        score = score - 5;
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
    console.log(score);
    i++;
    renderQuiz(); 


});








init();
startButton.addEventListener('click', start);




