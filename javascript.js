const string1 = "rock";
const string2 = "paper";
const string3 = "scissors";
let computerSelection = 0;
let playerSelection = 0;

//get player choice
function playerchoice() {
  let player = prompt("choose rock,paper or scissors");
  if (player.toLowerCase() === string1.toLowerCase()) {
    console.log(string1);
    playerSelection = 1;
  } else if (player.toLowerCase() === string2.toLowerCase()) {
    playerSelection = 2;
    console.log(string2);
  } else if (player.toLowerCase() === string3.toLowerCase()) {
    playerSelection = 3;
    console.log(string3);
  } else {
    console.log("please try again");
  }
}

playerchoice();
//get computer choice
function getComputerChoice(params) {
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    computerSelection = 1;
    console.log(string1);
  } else if (randNum === 2) {
    computerSelection = 2;
    console.log(string2);
  } else {
    computerSelection = 3;
    console.log(string3);
  }
}

getComputerChoice();

function playRound(computerSelection, playerSelection) {
  if ((playerSelection === 2) & (computerSelection === 1)) {
    //player win
    console.log("paper beats rock you win");
  } else if ((playerSelection === 3) & (computerSelection === 2)) {
    console.log("scissors beats paper you win");
  } else if ((playerSelection === 1) & (computerSelection === 3)) {
    console.log("rock beats scissors you win");
    //computer win
  } else if ((computerSelection === 2) & (playerSelection === 1)) {
    console.log("paper beats rock you lose");
  } else if ((computerSelection === 3) & (playerSelection === 2)) {
    console.log("scissors beats paper you lose");
  } else if ((computerSelection === 1) & (playerSelection === 3)) {
    console.log("rock beats scissors you lose");
  }
  //ties
  else if ((computerSelection === 1) & (playerSelection === 1)) {
    console.log("tie");
  } else if ((computerSelection === 2) & (playerSelection === 2)) {
    console.log("tie");
  } else if ((computerSelection === 3) & (playerSelection === 3)) {
    console.log("tie");
  }
}

playRound(computerSelection, playerSelection);
