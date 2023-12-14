// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9
function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
}
// pre-made a function. You can use this function to present an alert to say someone wins
let isGameOver = false;
function winningAlert(winner) {
  // checkWinner();

  if (confirm(`Horraaay, ${winner} wins!`)) {
    isGameOver = true;
    // restartGame();

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
  if (isGameOver) return;
  console.log(`Button number ${index} is clicked`);
  if (player == "X" && document.getElementById(index).innerHTML == "") {
    player = "O";
    fillButton(index, player);
    cells[index - 1] = "O";
    checkWinner();
  } else if (player == "O" && document.getElementById(index).innerHTML == "") {
    player = "X";
    fillButton(index, player);
    cells[index - 1] = "X";
    checkWinner();
  }
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */

function checkWinner() {
  console.log(cells);
  if (cells[0] === cells[1] && cells[1] === cells[2] && cells[1] === "X") {
    player = "X";
    winningAlert(player);

    // restartGame();
  } else if (
    cells[0] === cells[1] &&
    cells[1] === cells[2] &&
    cells[2] === "O"
  ) {
    player = "O";
    winningAlert(player);
  } else if (
    cells[0] === cells[4] &&
    cells[4] === cells[8] &&
    cells[8] === "O"
  ) {
    player = "O";
    winningAlert(player);
  } else if (
    cells[0] === cells[4] &&
    cells[4] === cells[8] &&
    cells[8] === "X"
  ) {
    player = "X";
    winningAlert(player);
  } else if (
    cells[0] === cells[3] &&
    cells[3] === cells[6] &&
    cells[6] === "X"
  ) {
    player = "X";
    winningAlert(player);
  } else if (
    cells[0] === cells[3] &&
    cells[3] === cells[6] &&
    cells[6] === "O"
  ) {
    player = "O";
    winningAlert(player);
  } else if (
    cells[2] === cells[4] &&
    cells[4] === cells[6] &&
    cells[6] === "O"
  ) {
    player = "O";
    winningAlert(player);
  } else if (
    cells[2] === cells[4] &&
    cells[4] === cells[6] &&
    cells[6] === "X"
  ) {
    player = "X";
    winningAlert(player);
  } else if (
    cells[2] === cells[5] &&
    cells[5] === cells[8] &&
    cells[8] === "X"
  ) {
    player = "X";
    winningAlert(player);
  } else if (
    cells[2] === cells[5] &&
    cells[5] === cells[8] &&
    cells[8] === "O"
  ) {
    player = "O";
    winningAlert(player);
  } else if (
    cells[6] === cells[7] &&
    cells[7] === cells[8] &&
    cells[8] === "O"
  ) {
    player = "O";
    winningAlert(player);
  } else if (
    cells[6] === cells[7] &&
    cells[7] === cells[8] &&
    cells[8] === "X"
  ) {
    player = "X";
    winningAlert(player);
  } else if (
    cells[3] === cells[4] &&
    cells[4] === cells[5] &&
    cells[5] === "O"
  ) {
    player = "O";
    winningAlert(player);
  } else if (
    cells[3] === cells[4] &&
    cells[4] === cells[5] &&
    cells[5] === "X"
  ) {
    player = "X";
    winningAlert(player);
    // } else {
    //   draw();
    // }
  }
  // function restartGame() {
  //   for (let i = 0; i < 9, i + 1; ) {
  //     document.getElementById(i).innerHTML == "";
  //   }
  // }
  // function draw() {
  //   for (let i = 0; i < 9, i + 1; ) {
  //     if (document.getElementById(i).innerHTML !== "") {
  //       alert("Draw");
  //       isGameOver = true;
  //     }
  //   }
}
