var viewScores = document.querySelector('#viewscores');
var timerEl = document.querySelector('#timer');
var startButton = document.querySelector('.start-button');

var count = 75;
var timer;

function countDown() {

    timer = setInterval( function() {
        
        count--;
        timerEl.textContent = 'Time: ' + count;

        if(count === 0) {
            clearInterval(timer);
        }


    }, 1500);

}

countDown();
