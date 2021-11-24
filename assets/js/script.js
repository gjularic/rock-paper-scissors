// Set up main variables and selected elements in DOM

let playerGameScore = document.getElementById("playerScore");
let computerGameScore = document.getElementById("computerScore");
const selectOption = document.querySelectorAll(".clickOption");
let gameResultShow = document.getElementById("result");
let playerOption;
let computerOption;
let playerScoreNum = 0;
let computerScoreNum = 0;


/*
Function to add event listeners
to each option selected by the player
*/
for (let option of selectOption) {
    option.addEventListener("click", function(event) {

        playerOption = event.target.parentNode.id;

        compRandomOption();
        gameResult();
        restartGame();

    });
}


/*
Function to get the random number
and attach it to string
*/
function compRandomOption () {

    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        computerOption = "rock";
    } else if (randomNumber === 1) {
        computerOption = "paper";
    } else {
        computerOption = "scissors";
    }

}


/*
Function to compare the picks,
adjust the score and display the winner
*/
function gameResult () {

    if (playerOption === computerOption) {
        gameResultShow.innerHTML = "You both picked the same, <br>it's a DRAW!";
    } else if (playerOption === "rock" && computerOption === "scissors") {
        gameResultShow.innerHTML = "You picked Rock, <br>Computer picked Scissors. <br>YOU WON!";
        playerScoreNum += 1;
    } else if (playerOption === "scissors" && computerOption === "rock") {
        gameResultShow.innerHTML = "You picked Scissors, <br>Computer picked Rock. <br>YOU LOST!";
        computerScoreNum += 1;
    } else if (playerOption === "paper" && computerOption === "rock") {
        gameResultShow.innerHTML = "You picked Paper, <br>Computer picked Rock. <br>YOU WON!";
        playerScoreNum += 1;
    } else if (playerOption === "rock" && computerOption === "paper") {
        gameResultShow.innerHTML = "You picked Rock, <br>Computer picked Paper. <br>YOU LOST!";
        computerScoreNum += 1;
    } else if (playerOption === "scissors" && computerOption === "paper") {
        gameResultShow.innerHTML = "You picked Scissors, <br>Computer picked Paper. <br>YOU WON!";
        playerScoreNum += 1;
    } else {
        gameResultShow.innerHTML = "You picked Paper, <br>Computer picked Scissors. <br>YOU LOST!";
        computerScoreNum += 1;
    }

    /* Player and computer game score changed to integers */
    playerGameScore.innerText = playerScoreNum;
    computerGameScore.innerText = computerScoreNum;

}

/*
Function checks who has scored 10 points first,
displays corresponding text and restart button
that will reload the whole page
*/
function restartGame () {

    if (playerScoreNum === 10) {
        document.getElementById("gameContainer").innerHTML = "<div class='restartGameWrap'><div id='restartWin'>You were first to score 10 points! You Won the Game! Click 'Play again' to restart.</div><button class='restart-btn'>Play Again</button></div>";
    }

    if (computerScoreNum === 10) {
        document.getElementById("gameContainer").innerHTML = "<div class='restartGameWrap'><div id='restartLoss'>Computer was first to score 10 points! You Lost the Game! Click 'Play again' to restart.</div><button class='restart-btn'>Play Again</button></div>";
    }

    document.querySelector('.restart-btn').addEventListener('click', function(){
        window.location.reload();
        return false;
      });
      
}