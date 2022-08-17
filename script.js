// create array with the possible choices, generate random number and use number to select a value in the array.
function getComputerChoice() {
  rockPaperScissors = ['rock', 'paper', 'scissors']
  x = Math.floor(Math.random() * 3);
  choice = rockPaperScissors[x];
  return choice;
}

// compare the players choice with the computers choice and determin the winner of the round
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection)
  if (playerSelection === 'rock' && computerSelection === 'scissors') { 
    playerScore++;
    return "you win! rock beats paper!";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    let playerScore =+ 1;
    return "you win! paper beats rock!";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    let playerScore =+ 1;
    return "you win! scissors beats paper!";
  } else if (computerSelection === 'rock' && playerSelection === 'scissors') { 
    let computerScore =+ 1;
    return "you lose! rock beats paper!";
  } else if (computerSelection === 'paper' && playerSelection === 'rock') {
    let computerScore =+ 1;
    return "you lose! paper beats rock!";
  } else if (computerSelection === 'scissors' && playerSelection === 'paper') {
    let computerScore =+ 1;
    return "you lose! scissors beats paper!";
  } else if (playerSelection === computerSelection) {
    return "it was a tie!";
  }
}



function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('What is your choice?').toLowerCase();
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(result);

    //Check to see if the result was a win or a loss increment player score if win increment computer score if loss
    if (result.substr(0, 5) == 'you w') {
      playerScore++;
    } else if (result.substr(0, 5) == 'you l') {
      computerScore++;
    }
  }
  console.log('the final score was ', playerScore, computerScore);
  (playerScore > computerScore) ? console.log('You beat the computer!') : console.log('The computer has bested you, mate!');
}

game();