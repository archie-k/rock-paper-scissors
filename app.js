let computerSelection;
let playerSelection = "paper";

function computerPlay() {
  let randomNumber = Math.round(Math.random() * 2);
  console.log(randomNumber);
  if (randomNumber == 0) {
    computerSelection = "rock";
  } else if (randomNumber === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
  console.log(computerSelection);
}

function singleRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    return "You win, paper beats rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "You lose, paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's tie, paper vs paper!";
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You win! Scissors beats paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You lose! Scissors beats paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's tie, scissors vs scissors!";
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You win! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You lose! Rock bests scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's tie, rock vs rock!";
  }
}
computerPlay();
console.log(singleRound(playerSelection, computerSelection));
