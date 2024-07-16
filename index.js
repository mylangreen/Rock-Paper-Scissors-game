let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*(3 - 1 + 1)) + 1;
    if(computerChoice==1){
        return "rock";
    }
    else if(computerChoice == 2){
        return "paper";
    }
    else {
        return "scissors"
    };
};
function getHumanChoice(){
    let humanChoice = prompt("What's your choice: rock, paper or scissors?");
    return humanChoice;
};
function playRound(humanChoice,computerChoice){
    humanChoice.toLowerCase();
    console.log("your's :"+ humanChoice+"\nComputer's : "+ computerChoice);
    if (humanChoice == computerChoice) {
        console.log("It's a tie!")
    }
    else if (humanChoice == "rock" && computerChoice == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("You Win! Rock smash Scissors");
        humanScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "rock"){
        console.log("You lose! Rock smash Scissors");
        computerScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors"){
        console.log("You lose! Scissors cuts Paper");
        computerScore++;
    }
    else {
        console.log("You Win! Scissors cuts Paper");
        humanScore++;
    }
};
function playGame(){
    let rounds = 1;
    while(rounds<=5){
        playRound(getComputerChoice(),getHumanChoice());
        rounds++
    }
    console.log("Your score: "+humanScore+"\nComputer score: "+computerScore);
};
playGame();