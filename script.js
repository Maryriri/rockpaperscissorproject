

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function getHumanChoice() {
    let choice;
    do {
        choice = prompt("Enter your choice (rock, paper, or scissors):");
    } while (choice !== null && !["rock", "paper", "scissors"].includes(choice.toLowerCase()));
    
   
    return choice === null ? "" : choice.toLowerCase();
}


function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    humanChoice = humanChoice.toLowerCase();
    let roundWinner;

    if (humanChoice === computerChoice) {
        roundWinner = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        roundWinner = "You win!";
        humanScore++;
    } else {
        roundWinner = "Computer wins!";
        computerScore++;
    }

    console.log(roundWinner + " " + humanChoice + " vs " + computerChoice);
    return [humanScore, computerScore];
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        [humanScore, computerScore] = playRound(humanChoice, computerChoice, humanScore, computerScore);
    }

    if (humanScore > computerScore) {
        console.log("You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Computer wins the game!");
    } else {
        console.log("It's a tie! No one wins the game.");
    }

    console.log("Final scores - Human:", humanScore, "Computer:", computerScore);
}


playGame();