// create array with the possible choices, generate random number and use number to select a value in the array.
function getComputerChoice() {
  rockPaperScissors = ['rock', 'paper', 'scissors']
  x = Math.floor(Math.random() * 3);
  choice = rockPaperScissors[x];
  return choice;
}

// compare the players choice with the computers choice and determin the winner of the round; 7 possible combinations
function playRound(playerSelection, computerSelection) {
  console.log(playerSelection, computerSelection)
  if (playerSelection === 'rock' && computerSelection === 'scissors') { 
    return "you win! rock beats paper!";
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    return "you win! paper beats rock!";
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "you win! scissors beats paper!";
  } else if (playerSelection === computerSelection) {
    return "it was a tie!";
  } else {
    return `you lose! ${computerSelection} beats ${playerSelection}`;
  }
}



function game() {
  let playerScore = 0;
  let computerScore = 0;

  // run the game for five rounds, each round prompts the player and then uses the getComputerChoice function to generate a random selection for the computer. those results are then used as arguments for the playRound function which are stored in the variable result. 
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('What is your choice?').toLowerCase();
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(result);

    //Check the result variable string contents to determine if the computer or player have scored and increment accordingly
    if (result.substr(0, 5) == 'you w') {
      playerScore++;
    } else if (result.substr(0, 5) == 'you l') {
      computerScore++;
    }
  }

  // log the results of the game
  console.log('the final score was ', playerScore, computerScore);
  (playerScore > computerScore) ? console.log('You beat the computer!') : console.log('The computer has bested you, mate!');
}

game();