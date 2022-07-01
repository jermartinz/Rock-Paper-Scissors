// Default variables
const choices = ['paper', 'rock', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let roundStatus = '';
const resultCtn = document.querySelector('#status-container');
const result = document.createElement('p')
resultCtn.appendChild(result)

const rockBtn = document.querySelector('#rock-btn');
rockBtn.addEventListener('click', () => {
    round('rock');
});
const paperBtn = document.querySelector('#paper-btn')
paperBtn.addEventListener('click', () => {
    round('paper')
});
const scissorsBtn = document.querySelector('#scissors-btn')
scissorsBtn.addEventListener('click', () => {
    round('scissors')
});

function round(playerSelection){
    endgGame()
    let computerSelection = choices[Math.floor(Math.random() * choices.length)]; // Randomize choices array and store result
    // Compare choices store points for each winner and return status of the round
    if(computerSelection === playerSelection){
        roundStatus ='Tie round!';
        humanScore++;
        computerScore++;
        return result.textContent = `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
    }
    else if((computerSelection === 'rock' && playerSelection === 'scissors') || 
    (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')){
        roundStatus ='Computer win this round!';
        computerScore++;
        return result.textContent = `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
    }else{
        roundStatus = "Human win this round!";
        humanScore++;
        return result.textContent = `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
        
    }
    
}
function endgGame(){
    if(computerScore === 5 || humanScore === 5){
        rockBtn.remove();
        paperBtn.remove();
        scissorsBtn.remove();
        const checkButton = document.createElement('button');
        checkButton.textContent = 'Check Result'
        resultCtn.appendChild(checkButton)
        checkButton.addEventListener('click', () => {
            checkWinner();
        });
        
        return result.textContent = 'Game End!'
        
        }
}

function checkWinner(){
    
    if(computerScore > humanScore){
        return result.textContent = 'Computer wins the game!'
    }else if(computerScore < humanScore){
        return result.textContent = 'Human wins the game!'
    }else if(computerScore === humanScore){
        return result.textContent = 'Tie!'
    }
}
function resetGame(){

}





