function computerPlay () {
 var choice= ["Rock", "Paper", "Scissors"];
 var randomChoice = choice[Math.floor(Math.random() * choice.length)];
 return randomChoice;
}