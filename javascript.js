//get computer choice
function getComputerChoice(params) {
  let randNum = Math.floor(Math.random() * 3) + 1;
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
function playerSelection() {
  let player = prompt("choose rock,paper or scissors").toLowerCase;

  console.log(player);
}
playerSelection();
