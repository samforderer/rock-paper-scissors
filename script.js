// create array with the possible choices, generate random number and use number to select a value in the array.
function getComputerChoice() {
  rockPaperScissors = ['rock', 'paper', 'scissors']
  x = Math.floor(Math.random() * 3);
  computerSelection = rockPaperScissors[x];
}

function playSingleRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') { 
    return "you win!";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "you win!";
  }


}





console.log(getComputerChoice());
let playerSelection = prompt('What is your choice?');

playSingleRound(playSingleRound, computerSelection);