const string1 = "rock";
const string2 = "paper";
const string3 = "scissors";

//get computer choice
function getComputerChoice(params) {
  let randNum = Math.floor(Math.random() * 1) + 1;
  if (randNum === 1) {
    const string1 = "rock";
    console.log(string1);
  } else if (randNum === 2) {
    const string2 = "paper";
    console.log(string2);
  } else {
    const string3 = "scissors";
    console.log(string3);
  }
}
getComputerChoice();

//get player choice
function playerchoise() {
  let player = prompt("choose rock,paper or scissors");
  if (player.toLowerCase() === string1.toLowerCase()) {
    console.log(string1);
  } else if (player.toLowerCase() === string2.toLowerCase()) {
    console.log(string2);
  } else if (player.toLowerCase() === string3.toLowerCase()) {
    console.log(string3);
  } else {
    console.log("please try again");
  }
}

playerchoise();

function Round(computerSelection, playerSelection) {
  if ((computerSelection === 1) & (playerSelection === string1.toLowerCase)) {
    console.log("hi");
  }
}
console.log(Round(playerchoise, getComputerChoice));
