//make var for quiz
var questions = document.querySelector('.question-area');
var timerElement = document.querySelector('.timer-count');
var startButton = document.querySelector('.start-button');


var timer;
var timerCount;
var isCorrect =false;
var winCounter =0;
var loseCounter=0;

//Page loads showing user Wins and Loses
function init(){
    getWins();
    getlosses();
}


// make a clickable start button 
function startGame(){
    isWin = false;
    timerCount = 60;

    startButton.disabled = true;
    renderBlanks();
    startTimer()
}
//function for win game indexing user score 
function winGame(){
    wordBlank.textContent = "winner winner chicken dinner!";
    winCounter++
    startButton.disabled = false;
    setWins()
}
//function for lose indexing user score 
function loseGame(){
    wordBlank.textContent = "You Lost, Don't give up!";
    loseCounter++
    startButton.disabled = false 
    setLosses()
}

//when start function is clicked make a timer to start indexing down 
function startTimer(){
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;
        if (timerCount >=0){
            if(isWin && timerCount > 0){
                clearInterval(timer);
                winGame();
            }
        }
        if(timerCount === 0){
            clearInterval(timer);
            loseGam();
        }
    }, 1000);
}

//when start click function happens present a  question 
function


//after question is answered listener activated to present another question



//when question is answered incorrectly time is subtracted from clock


//game is over when all questions are answered or the clock runs to zero



//after game is over box appears to add users initials and score





// after users initials and score entered give option to start again