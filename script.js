// Grab the buttons from the page

const userButtons = document.querySelectorAll(".move-button");

// Get the computer-choice and outcome elements from HTML

const computerChoice = document.querySelector("#computer-choice");
const outcomeText = document.querySelector(".outcome-text");

// When the user chooses a move:

// Assign the user's choice to a variable

const getUserChoice = (event) => {
  const userChoice = event.target.innerText;
  return "User chose: " + userChoice;
};

// Generate a move for the computer

// Work out the winner

// Display the winner

// Write a function to add an eventlistener to an element

function updateDOM(event) {
  outcomeText.textContent = getUserChoice(event);
}

userButtons.forEach((element) => {
  element.addEventListener("click", updateDOM);
});
