// Grab the buttons from the page

const userButtons = document.querySelectorAll(".move-button");

// Get the computer-choice and outcome elements from HTML

const computerChoice = document.querySelector("#computer-choice");
const outcomeText = document.querySelector(".outcome-text");

// When the user chooses a move:

// Assign the user's choice to a variable

const getUserChoice = (event) => {
  return event.target.innerText;
};

// Generate a move for the computer

const getCompChoice = () => {
  const choices = ["Rock", "Paper", "Scissors"];
  const index = Math.floor(Math.random() * 3);
  computerChoice.innerText = choices[index];
  return choices[index];
};

// Work out the winner

const calculateWinner = (event) => {
  const winStates = {
    Paper: "Rock",
    Rock: "Scissors",
    Scissors: "Paper",
  };

  const userChoice = getUserChoice(event);
  const compChoice = getCompChoice();

  // Check if there is a tie
  if (userChoice === compChoice) {
    return "It's a tie!";
  }

  // Compare user and computer choice

  if (winStates[userChoice] === compChoice) {
    return "You win!";
  } else {
    return "You lose!";
  }
};

// Display the winner
function updateDOM(event) {
  outcomeText.textContent = calculateWinner(event);
}

// Write a function to add an eventlistener to an element

userButtons.forEach((element) => {
  element.addEventListener("click", updateDOM);
});
