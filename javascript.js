const string1 = "rock";
const string2 = "paper";
const string3 = "scissors";
let computerSelection = 0;
let playerSelection = 0;

//get player choice
function playerchoice() {
  let player = prompt("choose rock,paper or scissors best of 3");
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
    console.log("error please try again");
    playerSelection = 0;
  }
}

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

//1 = rock
//2 = paper
//3 = scissors

//play one round and check who won
function playRound(computerSelection, playerSelection) {
  //computer wins\\\
  if ((playerSelection === 2) & (computerSelection === 1)) {
    return "computer";
  } else if ((playerSelection === 3) & (computerSelection === 2)) {
    return "computer";
  } else if ((playerSelection === 1) & (computerSelection === 3)) {
    return "computer";

    //player wins
  } else if ((computerSelection === 2) & (playerSelection === 1)) {
    return "player";
  } else if ((computerSelection === 3) & (playerSelection === 2)) {
    return "player";
  } else if ((computerSelection === 1) & (playerSelection === 3)) {
    return "player";
  }
  //ties
  else if ((computerSelection === 1) & (playerSelection === 1)) {
    return "tie";
  } else if ((computerSelection === 2) & (playerSelection === 2)) {
    return "tie";
  } else if ((computerSelection === 3) & (playerSelection === 3)) {
    return "tie";
  }
}
//play best of 3 and check you won
function game() {
  let computerscore = 0;
  let playerscore = 0;

  while (playerscore < 5 && computerscore < 5) {
    playerchoice();
    getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === "player") {
      console.log("you win the round");
      playerscore++;
    } else if (result === "computer") {
      console.log("you lose the round");
      computerscore++;
    } else if (result === "tie") {
      console.log("tie");
    }

    console.log(playerscore);
    console.log(computerscore);
  }

  if (computerscore > playerscore) {
    alert("game over computer won");
  } else if (playerscore > computerscore) {
    alert("You Won");
  } else if (playerscore === computerscore) {
    alert("draw");
  }
}

game();
