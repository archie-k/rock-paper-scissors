const rockButton = document.querySelector(".btn-rock");
const paperButton = document.querySelector(".btn-paper");
const scissorsButton = document.querySelector(".btn-scissors");
const resultText = document.querySelector(".results-text");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

let computerSelection;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

computerPlay();
rockButton.addEventListener("click", function () {
  playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
  playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});
scissorsButton.addEventListener("click", () => {
  playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});

function computerPlay() {
  let randomNumber = Math.round(Math.random() * 2);
  if (randomNumber == 0) {
    computerSelection = "rock";
  } else if (randomNumber === 1) {
    computerSelection = "paper";
  } else {
    computerSelection = "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  computerPlay();
  if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    resultText.textContent = "You win, paper beats rock";
    scoreChecker();
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultText.textContent = "You lose, paper beats rock";
    scoreChecker();
  } else if (playerSelection === "paper" && computerSelection === "paper") {
    resultText.textContent = "It's tie, paper vs paper!";
  }

  if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    resultText.textContent = "You win! Scissors beats paper!";
    playerScoreDisplay.textContent = playerScore;
    scoreChecker();
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultText.textContent = "You lose! Scissors beats paper";
    scoreChecker();
  } else if (
    playerSelection === "scissors" &&
    computerSelection === "scissors"
  ) {
    resultText.textContent = "It's tie, scissors vs scissors!";
  }

  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    resultText.textContent = "You win! Rock beats scissors";
    scoreChecker();
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    resultText.textContent = "You lose! Rock bests scissors";
    scoreChecker();
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    resultText.textContent = "It's tie, rock vs rock!";
  }
}

function scoreChecker() {
  if (playerScore === 5) {
    resultText.textContent = "You wins";
  } else if (computerScore === 5) {
    resultText.textContent = "Computer wins";
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    computerPlay();
    scoreChecker();
  }
}

game();
