const resultsContainer = document.querySelector("#resultsContainer")
const scoreContainer = document.querySelector("section");
let playerChoice = document.createElement("p");
let pcChoice = document.createElement("p");
let playerScore = document.createElement("p");
let pcScore = document.createElement("p");
let score;
let intScorePlayer = 0;;
let intScorePc = 0;
const announceContainer = document.querySelector("#announceContainer");
let message = document.createElement("h3");
let score1C = document.querySelector("#score1C");
let score2C = document.querySelector("#score2C")
let reset = document.querySelector(".reset");


playerScore.classList.add("sectionPlayer"); 
pcScore.classList.add("sectionPc");



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

// creates function that plays a round measuring the playerSelection against the computerSelection to dermine the outcome message.
function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "Rock") {
        return score = "draw";
        } else if (computerSelection === "Paper") {
            return score = "loser"
        } else {
            return score = "winner"
    }   
}
    if (playerSelection === "paper") {
        if (computerSelection === "Paper") {
            return score = "draw";
        } else if (computerSelection === "Scissors") {
            return score = "loser"
        } else {
            return score = "winner";
        }
    }
    if (playerSelection === "scissors") {
        if (computerSelection === "Scissors") {
            return score = "draw";
        } else if (computerSelection === "Rock") {
            return score = "loser";
        } else {
            return score = "winner";
        }
    }
}
function removeTransform(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("select");
}

function selectRock(e) {
    e.classList.add("select");
    playerChoice.textContent = "You picked rock!";
    resultsContainer.appendChild(playerChoice);
    computerPlay();
    pcChoice.textContent = `The computer picked ${computerSelection}!`;
    resultsContainer.appendChild(pcChoice);
    playRound("rock", computerSelection);
}

function selectPaper(e) {
    e.classList.add("select");
    playerChoice.textContent = "You picked paper!";
    resultsContainer.appendChild(playerChoice);
    computerPlay();
    pcChoice.textContent = `The computer picked ${computerSelection}!`;
    resultsContainer.appendChild(pcChoice);
    playRound("paper", computerSelection);
}

function selectScissors(e) {
    e.classList.add("select");
    playerChoice.textContent = "You picked scissors!";
    resultsContainer.appendChild(playerChoice);
    computerPlay();
    pcChoice.textContent = `The computer picked ${computerSelection}!`;
    resultsContainer.appendChild(pcChoice);
    playRound("scissors", computerSelection);
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        if (button.classList.contains("rock")) { 
            selectRock(button);
        button.addEventListener("transitionend", removeTransform);
        if (score === "winner")  {
            intScorePlayer += 1;
            playerScore.innerHTML = `You: ${intScorePlayer}`;
            score1C.appendChild(playerScore);
            if (intScorePlayer === 5) {
                message.innerText = `Congratualtions, you have won with a score of ${intScorePlayer} : ${intScorePc} \nGood job!`;
                message.classList.add("announcement");
                announceContainer.appendChild(message);
            }
            }
        if (score === "loser") {
            intScorePc += 1;
            pcScore.innerHTML = `Computer: ${intScorePc}`;
            score2C.appendChild(pcScore);
            if (intScorePc === 5) {
                message.innerText = `Ouch! You have lost with a score of ${intScorePlayer} : ${intScorePc} \nTry again!`;
                message.classList.add("announcement");
                announceContainer.appendChild(message);
            }
            }
        }
        if (button.classList.contains("paper")) {
            selectPaper(button);
            button.addEventListener("transitionend", removeTransform);
            if (score === "winner")  {
                intScorePlayer += 1;
                playerScore.innerHTML = `You: ${intScorePlayer}`;
                score1C.appendChild(playerScore);
                if (intScorePlayer === 5) {
                    message.innerText = `Congratualtions, you have won with a score of ${intScorePlayer} : ${intScorePc} \nGood job!`;
                    message.classList.add("announcement");
                    announceContainer.appendChild(message);
                }
                }
                if (score === "loser") {
                    intScorePc +=1;
                    pcScore.innerHTML = `Computer: ${intScorePc}`;
                    score2C.appendChild(pcScore);
                    if (intScorePc === 5) {
                        message.innerText = `Ouch! You have lost with a score of ${intScorePlayer} : ${intScorePc} \nTry again!`;
                        message.classList.add("announcement");
                        announceContainer.appendChild(message);
                    }
                    }
             }
         if (button.classList.contains("scissors")) {
            selectScissors(button);
            button.addEventListener("transitionend", removeTransform);
            if (score === "winner")  {
            intScorePlayer += 1;
            playerScore.innerHTML = `You: ${intScorePlayer}`;
            score1C.appendChild(playerScore);
            if (intScorePlayer === 5) {
                message.innerText = `Congratualtions, you have won with a score of ${intScorePlayer} : ${intScorePc} \nGood job!`;
                message.classList.add("announcement");
                announceContainer.appendChild(message);
            }
            }
            if (score === "loser") {
                intScorePc +=1;
                pcScore.innerHTML = `Computer: ${intScorePc}`;
                score2C.appendChild(pcScore);
                if (intScorePc === 5) {
                    message.innerText = `Ouch! You have lost with a score of ${intScorePlayer} : ${intScorePc} \nTry again!`;
                    message.classList.add("announcement");
                    announceContainer.appendChild(message);
                }
                }
            }
        
    });
});

reset.addEventListener("click", (r) => {
    intScorePc = 0, intScorePlayer = 0;
    pcScore.remove(), playerScore.remove();
    message.remove();
    pcChoice.remove(), playerChoice.remove();
});



