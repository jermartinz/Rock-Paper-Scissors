
const options = ['paper', 'rock', 'scissors'];

function computerPlay(){
    return options[Math.floor(Math.random() * options.length)];

}
computerPlay();

const playerSelection = prompt('Select (Rock, Paper or Scissors): ').toLowerCase();
const computerSelection = computerPlay();

console.log(playerSelection);
console.log(computerSelection);

function round(playerSelection, computerSelection){
    
    if(computerSelection === playerSelection){
        return 'Tie!';
    }
    else if((computerSelection === 'rock' && playerSelection === 'scissors') || 
    (computerSelection === 'scissors' && playerSelection === 'paper') || (computerSelection === 'paper' && playerSelection === 'rock')){
        return 'Computer Win!';
    }else{
        return 'Human Win!';
    }
}
console.log(round(playerSelection, computerSelection));