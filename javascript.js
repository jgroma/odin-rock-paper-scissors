//computer makes a random choice
function computerPlay() {
    var choice = ["Rock", "Paper", "Scissors"];
    var randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;

}

//let computerSelection = computerPlay();

//plays a single round of game
function playRound() {
    if (roundsPlayed == 5) {
        checkScore();
    } else {
        if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
            roundsPlayed += 1;
            playerScore += 1;
            //console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
            roundResult.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
            score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
        } else if (playerSelection == computerSelection) {
            //console.log(`${playerSelection} and ${computerSelection}. It's a tie!`);
            roundsPlayed += 1;
            roundResult.innerHTML = `${playerSelection} and ${computerSelection}. It's a tie!`;
            score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
        } else {
            roundsPlayed += 1;
            computerScore += 1;
            //console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
            roundResult.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;
            score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
        }
    }
    //if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        //roundsPlayed += 1;
       // playerScore += 1;
        //console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
       // roundResult.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
       // score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
    //} else if (playerSelection == computerSelection) {
        //console.log(`${playerSelection} and ${computerSelection}. It's a tie!`);
        //roundsPlayed += 1;
       // roundResult.innerHTML = `${playerSelection} and ${computerSelection}. It's a tie!`;
        //score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
   // } else {
        //roundsPlayed += 1;
        //computerScore += 1;
        //console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
       // roundResult.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;
       // score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
    //}
}

let playerSelection;

let computerSelection;

//turns the first letter of a string into uppercase and the rest into lowercase (e.g. 'ROCK', 'rock', 'rOcK' will all be turned into 'Rock')
//function capitalize(string) {
//let lowerCase = string.toLowerCase();
//let upperCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
//return upperCase;
//}

//checks if playRound function works:
//const playerSelection = capitalize(prompt("Rock, Paper, Scissors. Choose one."));
//const computerSelection = computerPlay();
//console.log(playRound(playerSelection, computerSelection));

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

//plays five rounds of the game, records the score and announces the winner at the end
//function game() {
//for (let i = 0; i < 5; i++) {
//const playerSelection = capitalize(prompt("Rock, Paper, Scissors. Choose one."));
//const computerSelection = computerPlay();
//playRound(playerSelection, computerSelection);
//roundsPlayed += 1;
//console.log(`Player: ${playerScore} Computer: ${computerScore}`);
//if (roundsPlayed == 5 && playerScore > computerScore) {
//console.log("You win this game!");
//} else if (roundsPlayed == 5 && playerScore < computerScore) {
//console.log("You lose this game!");
//} else if (roundsPlayed == 5 && playerScore == computerScore) {
//console.log("It's a tie!")
//}
//}
//}

//game();

function checkScore() {
    if (roundsPlayed == 5 && playerScore > computerScore) {
        winOrLose.innerHTML = "Congratulations! You won the game.";
    } else if (roundsPlayed == 5 && playerScore < computerScore) {
        winOrLose.innerHTML = "Game over. You lost the game.";
   } else if (roundsPlayed == 5 && playerScore == computerScore) {
        winOrLose.innerHTML = "It's a tie! No one won the game.";
   }
};

const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    //alert("You chose rock");
    playerSelection = "Rock";
    computerSelection = computerPlay();
    playRound();
    //roundsPlayed += 1;
    roundNumber.innerHTML = `Round: ${roundsPlayed}`;
    //console.log(computerPlay());
    //console.log(playerSelection);
    //console.log(computerSelection);
    //if (roundsPlayed == 5){
    //    checkScore();
    //}
    checkScore();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = computerPlay();
    playRound();
    //roundsPlayed += 1;
    roundNumber.innerHTML = `Round: ${roundsPlayed}`;
    checkScore();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = computerPlay();
    playRound();
    //roundsPlayed += 1;
    roundNumber.innerHTML = `Round: ${roundsPlayed}`;
    checkScore();
});


const roundResult = document.querySelector('.round-result');


const score = document.querySelector('.score');

const roundNumber = document.querySelector('.round-number');

const winOrLose = document.querySelector ('h1');