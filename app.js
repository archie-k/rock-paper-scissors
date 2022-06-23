console.log("Welcome home!");

function computerPlay() {
  let randomNumber = Math.round(Math.random() * 2);
  if (randomNumber == 0) {
    console.log("Rock");
    return "Rock";
  } else if (randomNumber === 1) {
    console.log("Paper");
    return "Paper";
  } else {
    console.log("Scissors");
    return "Scissors";
  }
}
