// Default variables
const choices = ['paper', 'rock', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let roundStatus = '';

function round(){
    let computerSelection = choices[Math.floor(Math.random() * choices.length)]; // Randomize choices array and store result
    let playerSelection = prompt('Select (Rock, Paper or Scissors): ').toLowerCase(); // Ask the user for a choice and store the choice
    // Compare choices store points for each winner and return status of the round
    if(computerSelection === playerSelection){
        roundStatus ='Tie round!';
        humanScore++;
        computerScore++;
        return `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
    }
    else if((computerSelection === 'rock' && playerSelection === 'scissors') || 
    (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')){
        roundStatus ='Computer win this round!';
        computerScore++;
        return `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
    }else{
        roundStatus = "Human win this round!";
        humanScore++;
        return `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
    }
}

function game(){
    for(let i = 0; i <= 5; i++){ // Call function round() 5 times and print status of each round
        console.log(round());
    }
    // Game end result
    if(humanScore < computerScore){
        return 'Computer win!'
    }
    else if(humanScore === computerScore){
        return 'Tie!'
    }else if(humanScore > computerScore){
        return 'Human win!'
    }
}
console.log(game());

