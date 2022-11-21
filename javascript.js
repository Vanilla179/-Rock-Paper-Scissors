let computerSelection = 0;
let playerSelection = 0;
let computerScore = 0;
let playerScore = 0;
const computerScoreSpan = document.querySelector("[data-computer-score]");
const yourScoreSpan = document.querySelector("[data-your-score]");

//get computer choice
function getComputerChoice(params) {
  let randNum = Math.floor(Math.random() * 3) + 1;
  if (randNum === 1) {
    computerSelection = "Rock";
    console.log(computerSelection);
  } else if (randNum === 2) {
    computerSelection = "Paper";
    console.log(computerSelection);
  } else {
    computerSelection = "Scissors";
    console.log(computerSelection);
  }
}

//play one round and check who won
function playRound() {
  //computer wins\\\
  if ((playerSelection === "Paper") & (computerSelection === "Rock")) {
    return "player";
  } else if (
    (playerSelection === "Scissors") &
    (computerSelection === "Paper")
  ) {
    return "player";
  } else if (
    (playerSelection === "Rock") &
    (computerSelection === "Scissors")
  ) {
    return "player";

    //player wins
  } else if ((computerSelection === "Paper") & (playerSelection === "Rock")) {
    return "computer";
  } else if (
    (computerSelection === "Scissors") &
    (playerSelection === "Paper")
  ) {
    return "computer";
  } else if (
    (computerSelection === "Rock") &
    (playerSelection === "Scissors")
  ) {
    return "computer";
  }
  //ties
  else if ((computerSelection === "Rock") & (playerSelection === "Rock")) {
    return "tie";
  } else if ((computerSelection === "Paper") & (playerSelection === "Paper")) {
    return "tie";
  } else if (
    (computerSelection === "Scissors") &
    (playerSelection === "Scissors")
  ) {
    return "tie";
  }
}

//play first to 5 and alert who won
function game() {
  if (playerScore < 5 && computerScore < 5) {
    getComputerChoice();
    let result = playRound(playerSelection, computerSelection);
    if (result === "player") {
      console.log("you win the round");
      playerScore++;
    } else if (result === "computer") {
      console.log("you lose the round");
      computerScore++;
    } else if (result === "tie") {
      console.log("tie");
    }

    if (result === "player") incrementScore(yourScoreSpan);
    if (result === "computer") incrementScore(computerScoreSpan);

    if (result === "player") {
      container.innerText = `You win ${playerSelection} Beats ${computerSelection} `;
    }
    if (result === "computer") {
      container.innerText = `You lose ${computerSelection} Beats ${playerSelection} `;
    }
    if (result === "tie") {
      container.innerText = `Tie`;
    }

    console.log(playerScore);
    console.log(computerScore);
  }
  if (computerScore >= 5) {
    container.innerText = `Game Over You Lose `;
    // alert("Game Over Computer Won");
  } else if (playerScore >= 5) {
    container.innerText = ` Game Over You Win  `;
    // alert("You Won");
  }
}

function setRock() {
  playerSelection = "Rock";
  console.log(playerSelection);
}

function setPaper() {
  playerSelection = "Paper";
  console.log(playerSelection);
}

function setSissors(params) {
  playerSelection = "Scissors";
  console.log(playerSelection);
}
const btn2 = document.querySelector(".btn2");
btn2.addEventListener("click", function () {
  setPaper();
  game();
});

const btn = document.querySelector(".btn1");
btn.addEventListener("click", function () {
  setRock();
  game();
});

const btn3 = document.querySelector(".btn3");
btn3.addEventListener("click", function () {
  setSissors();
  game();
});

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1;
}
const container = document.querySelector(".wrapper .rules");
