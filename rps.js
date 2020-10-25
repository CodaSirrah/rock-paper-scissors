// creates function that returns either rock, paper or scissors as computer input.
function computerPlay() {
    let x = Math.floor(Math.random()*3);
    if (x === 0) {
        computerSelection = "Rock";
    } else if (x === 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
}
let score = 0;
// creates function that plays a round measuring the playerSelection against the computerSelection to dermine the outcome message.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
        return message = console.log("You drew!");
        } else if (computerSelection === "Paper") {
            score -= 1;
            return message = console.log("You lost! Paper beats rock.");
        } else {
            score += 1;
            return message = console.log("You won! Rock beats scissors.");
    }   
}
    if (playerSelection === "paper") {
        if (computerSelection === "Paper") {
            return message = console.log("You drew!");
        } else if (computerSelection === "Scissors") {
            score -= 1;
            return message = console.log("You lost! Scissors beats Paper.");
        } else {
            score += 1;
            return message = console.log("You won! Paper beats rock!");
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "Scissors") {
            return message = console.log("You drew!");
        } else if (computerSelection === "Rock") {
            score -= 1;
            return message = console.log("You lost! Rock beats scissors.");
        } else {
            score += 1;
            return message = console.log("You won! Scissors beats paper.");
        }
    }
}

// creates a function that loops calls the playRound function 5 times and tallies the total score.
function game() {
let i;
    for (i = 0; i < 5; i++) {
        computerPlay();
        console.log(playRound(prompt("Rock, Paper or Scissors?:").toLowerCase(), computerSelection));
        console.log("Total Score: " + score);
    }
}
// call the game function.
game();

// prints the final outcome of the match. Did you win, lose or draw?
if (score === 0) {
    console.log("In a best of five you are equals.");
} else if(score < 0) {
    console.log("The computer has beaten you!");
} else {
    console.log("Congratulations! You have bested the computer.")
}