//computer makes a random choice
function computerPlay() {
    var choice = ["Rock", "Paper", "Scissors"];
    var randomChoice = choice[Math.floor(Math.random() * choice.length)];
    return randomChoice;

}


//plays a single round of game
function playRound() {
    if (playerScore == 5 || computerScore == 5) {
        checkScore();
    } else {
        if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
            roundsPlayed += 1;
            playerScore += 1;
            roundResult.innerHTML = `You win! ${playerSelection} beats ${computerSelection}!`;
            score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
        } else if (playerSelection == computerSelection) {
            roundsPlayed += 1;
            roundResult.innerHTML = `${playerSelection} and ${computerSelection}. It's a tie!`;
            score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
        } else {
            roundsPlayed += 1;
            computerScore += 1;
            roundResult.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;
            score.innerHTML = `Player score: ${playerScore}  Computer score: ${computerScore}`;
        }
    }
}

let playerSelection;

let computerSelection;

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


//announces the winner of the game
function checkScore() {
    if ((playerScore == 5 || computerScore == 5) && playerScore > computerScore) {
        winOrLose.innerHTML = "Congratulations! You won the game.";
    } else if ((playerScore == 5 || computerScore == 5) && playerScore < computerScore) {
        winOrLose.innerHTML = "Game over. You lost the game.";
   } else if ((playerScore == 5 || computerScore == 5) && playerScore == computerScore) {
        winOrLose.innerHTML = "It's a tie! No one won the game.";
   }
};

//player selection
const rock = document.querySelector('#rock');
rock.addEventListener('click', () => {
    playerSelection = "Rock";
    computerSelection = computerPlay();
    playRound();
    roundNumber.innerHTML = `Round: ${roundsPlayed}`;
    checkScore();
});

const paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
    playerSelection = "Paper";
    computerSelection = computerPlay();
    playRound();
    roundNumber.innerHTML = `Round: ${roundsPlayed}`;
    checkScore();
});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', () => {
    playerSelection = "Scissors";
    computerSelection = computerPlay();
    playRound();
    roundNumber.innerHTML = `Round: ${roundsPlayed}`;
    checkScore();
});


const roundResult = document.querySelector('.round-result');


const score = document.querySelector('.score');

const roundNumber = document.querySelector('.round-number');

const winOrLose = document.querySelector ('h1');