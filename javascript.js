function computerPlay() {
 var choice= ["Rock", "Paper", "Scissors"];
 var randomChoice = choice[Math.floor(Math.random() * choice.length)];
 return randomChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock" && computerSelection == "Scissors" || playerSelection == "Paper" && computerSelection == "Rock" || playerSelection == "Scissors" && computerSelection == "Paper") {
        return `You win! ${playerSelection} beats ${computerSelection}!`;
    } else if (playerSelection == computerSelection) {
        return `${playerSelection} and ${computerSelection}. It's a tie!`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}.`;
    }
}

function capitalize(string) {
    let lowerCase = string.toLowerCase();
    let upperCase = lowerCase.charAt(0).toUpperCase() + lowerCase.slice(1);
    return upperCase;
}

const playerSelection = capitalize(prompt("Rock, Paper, Scissors. Choose one."));
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));