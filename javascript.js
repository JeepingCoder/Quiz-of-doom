//make var for quiz
var questions = document.querySelector('.question-area');
var timerElement = document.querySelector('.timer-count');
var startButton = document.querySelector('.start-button');
var questionText = document.querySelector('.question-text');
var choicesDiv = document.querySelector('.choices');
//var buttons = document.querySelector(".buttons")

// var array = ['a','b', 'c', 'd']
// array[2]

// var object = {
//     name: 'Patrick',
//     age: 20,
//     height: '6ft'
// }
// object.age



var question = [

    {
        prompt: "What is 1+1",
        choices: {
            A: 1,
            B: 2,
            C: 3,
            D: 4
        },
        answer: "D. 2"
    },
    {
        prompt: "What is 1+2",
        choices: {
            A: 1,
            B: 2,
            C: 3,
            D: 4
        },
        answer: "C. 3"
    },
    {
        prompt: "what is 1+5",
        choices: {
            A: 1,
            B: 2,
            C: 3,
            D: 6
        },
        answer: "D. 6"

    },
    {
        prompt: "what is 1+5",
        choices: {
            A: 1,
            B: 2,
            C: 3,
            D: 6
        },
        answer: "D. 6"

    }
    //
]

questionText.textContent = question[0].prompt


var buttons = document.createElement('button');
buttons.addEventListener("click", function (displayQuestions) {
    document.body.appendChild()
})
//What is 1+1
//Look throught the choices, for each choices: create a startButton, display text on that startButton, append button to hoices var



question[0].prompt
question[0].choices.C //Patrick
question[0].answer
question[1].answer
question[1].choices.C //3

var buttons = document.createElement('button')


// {
//     var score: 0;
//     for (var i = 0; i < questions.length; i++)
//         var = response = window.prompt(questions[i].prompt)
//     if (response == questions[i].answer)
// }
// score++;
// alert("Great Job!")
// else {
//     alert("Try Again!")
// }
// {
//     alert(" you got" + score + "\" + questions.length)
// }
var timer;
var timerCount = 30;
// var isCorrect = false;
// var winCounter = 0;
// var loseCounter = 0;

// //Page loads showing user Wins and Loses
// function init() {
//     getWins();
//     getlosses();
// }


// // make a clickable start button 
// function startGame() {
//     isWin = false;
//     timerCount = 60;

//     startButton.disabled = true;
//     renderBlanks();
//     startTimer()
// }
// //function for win game indexing user score 
// function winGame() {
//     wordBlank.textContent = "winner winner chicken dinner!";
//     winCounter++
//     startButton.disabled = false;
//     setWins()
// }
// //function for lose indexing user score 
// function loseGame() {
//     wordBlank.textContent = "You Lost, Don't give up!";
//     loseCounter++
//     startButton.disabled = false
//     setLosses()
// }

//when start function is clicked make a timer to start indexing down 
function startTimer() {
    timer = setInterval(function () {
        timerCount--;
        timerElement.textContent = timerCount;

        // if (timerCount >= 0) {
        //     if (isWin && timerCount > 0) {
        //         clearInterval(timer);
        //         winGame();
        //     }
        // }
        if (timerCount <= 0) {
            clearInterval(timer);
            //loseGam();
        }
    }, 1000);
}

var index = 0;

function checkAnswer(event) {
    console.log(event.target.innerText)
    console.log(this.textContent)
    var pickedChoice = this.textContent;
    if (pickedChoice = "B.2")
        text = " Great Job! ";
      else
        text = " Better Luck Next Time "
    }
    //if pickedChoice equal to answer of that question: show correct
    //else if: show incorrect, substract time

    //if last question: end game

    //if not: index++, call displayQuestions()


function displayQuestions() {
    var choices = question[index].choices

    questionText.textContent = question[index].prompt

    for (var key in choices) {
        if (choices.hasOwnProperty(key)) {
            console.log(key + " -> " + choices[key]);

            var button = document.createElement('button');
            button.textContent = key + '. ' + choices[key]

            choicesDiv.appendChild(button)

            button.onclick = checkAnswer;
        }
    }

}

//when start click function happens present a  question 
startButton.addEventListener('click', function () {
    startTimer();
    //displayQuestions();
})


//after question is answered listener activated to present another question



//when question is answered incorrectly time is subtracted from clock


//game is over when all questions are answered or the clock runs to zero



//after game is over box appears to add users initials and score





// after users initials and score entered give option to start again