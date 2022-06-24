let computerSelection;
let playerSelection = "paper";
let playerScore = 0;
let computerScore = 0;

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

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "You win, paper beats rock";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "You lose, paper beats rock";
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "It's tie, paper vs paper!";
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "You win! Scissors beats paper!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "You lose! Scissors beats paper";
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    return "It's tie, scissors vs scissors!";
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "You win! Rock beats scissors";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "You lose! Rock bests scissors";
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "It's tie, rock vs rock!";
  }
}

function scoreChecker() {
  if (playerScore > computerScore) {
    console.log("You Wins");
  } else if (playerScore > computerScore) {
    console.log("Computer wins");
  } else {
    console.log("its tie!");
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    computerPlay();
    console.log(playRound(playerSelection, computerSelection));
  }

  scoreChecker();
}

game();
