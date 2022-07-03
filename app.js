// Default variables
const choices = ['paper', 'rock', 'scissors'];
let humanScore = 0;
let computerScore = 0;
let roundStatus = '';
const resultCtn = document.querySelector('#status-container');
const resultRound = document.createElement('p')
const resultGame = document.createElement('p')
resultCtn.appendChild(resultRound)
resultCtn.appendChild(resultGame)

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
    let computerSelection = choices[Math.floor(Math.random() * choices.length)]; // Randomize choices array and store result
    // Compare choices store points for each winner and return status of the round
    if(computerSelection === playerSelection){
        roundStatus ='Tie round!';
        humanScore++;
        computerScore++;
        endgGame()
        return resultRound.textContent = `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
    }
    else if((computerSelection === 'rock' && playerSelection === 'scissors') || 
    (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')){
        roundStatus ='Computer win this round!';
        computerScore++;
        endgGame()
        return resultRound.textContent = `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
    }else{
        roundStatus = "Human win this round!";
        humanScore++;
        endgGame()
        return resultRound.textContent = `Computer select: ${computerSelection}. Human select: ${playerSelection}. ${roundStatus} Score: Human ${humanScore} - Computer: ${computerScore}`;
        
    }
    
}
function endgGame(){
    if(computerScore === 5 && computerScore > humanScore){
        rockBtn.remove()
        paperBtn.remove()
        scissorsBtn.remove()
        return resultGame.textContent = 'Computer wins the game!'
    }else if(humanScore === 5 && computerScore < humanScore){
        rockBtn.remove()
        paperBtn.remove()
        scissorsBtn.remove()
        return resultGame.textContent = 'Human wins the game!'
    }else if(computerScore === 5 && humanScore === 5){
        rockBtn.remove()
        paperBtn.remove()
        scissorsBtn.remove()
        return resultGame.textContent = 'Tie!'
    }
}







