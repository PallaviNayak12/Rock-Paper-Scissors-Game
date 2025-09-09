const choices = document.querySelectorAll(".choice");
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");
const userScoreDisplay = document.getElementById("user-score");
const computerScoreDisplay = document.getElementById("computer-score");

let userScore = 0;
let computerScore = 0;

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    const computerChoice = getComputerChoice();
    const winner = getWinner(userChoice, computerChoice);

    userChoiceDisplay.textContent = `You: ${userChoice}`;
    computerChoiceDisplay.textContent = `Computer: ${computerChoice}`;
    winnerDisplay.textContent = `Result: ${winner}`;

    if (winner === "You Win 🎉") {
      userScore++;
      userScoreDisplay.textContent = userScore;
    } else if (winner === "Computer Wins 🤖") {
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
    }
  });
});

function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function getWinner(user, computer) {
  if (user === computer) {
    return "It's a Draw 😐";
  }

  if (
    (user === "rock" && computer === "scissors") ||
    (user === "paper" && computer === "rock") ||
    (user === "scissors" && computer === "paper")
  ) {
    return "You Win 🎉";
  } else {
    return "Computer Wins 🤖";
  }
}
