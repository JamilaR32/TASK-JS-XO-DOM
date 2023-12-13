// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  if (confirm(`Horraaay, ${winner} wins!`)) {
    // The code here will be exectued if you press on OK button that will pop on the window
  }
}

// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
let cells = ["", "", "", "", "", "", "", "", ""];
let player = "O";
function clickButton(index) {
  console.log(`Button number ${index} is clicked`);
  if (player == "X" && document.getElementById(index).innerHTML == "") {
    player = "O";
    fillButton(index, player);
    cells[index - 1] = "O";
  } else if (player == "O" && document.getElementById(index).innerHTML == "") {
    player = "X";
    fillButton(index, player);
    cells[index - 1] = "X";
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */

function checkWinner() {
  if (
    (cells[0] == "O" && cells[1] == "O" && cells[2] == "O") ||
    (cells[0] == "X" && cells[1] == "X" && cells[2] == "X")
  ) {
    winningAlert(player);
  } else if (
    (cells[0] == "O" && cells[4] == "O" && cells[8] == "O") ||
    (cells[0] == "X" && cells[4] == "X" && cells[8] == "X")
  ) {
    winningAlert(player);
  }
}
// function restartGame
