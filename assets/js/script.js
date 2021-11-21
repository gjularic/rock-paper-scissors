// Set up main variables and selected elements in DOM

let playerGameScore = document.getElementById("playerScore");
let computerGameScore = document.getElementById("computerScore");
const selectOption = document.querySelectorAll(".clickOption");
let gameResultShow = document.getElementById("result");
let playerOption
let computerOption


/*
Function to add event listeners
to each option selected by the player
*/
for (let option of selectOption) {
    option.addEventListener("click", function(event) {

        /*
        Used this option when I noticed that parentNode
        needs to be selected in order to get the id-s
        */
        playerOption = event.target.parentNode.id;

        /*
        playerOption = event.target.className;
        if (playerOption === "fas fa-hand-rock") {
            playerOption = 0;
        } else if (playerOption === "fas fa-hand-paper") {
            playerOption = 1;
        } else {
            playerOption = 2;
        }
        */
        console.log(playerOption);
        compRandomOption();
    })
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
    console.log(computerOption);
}