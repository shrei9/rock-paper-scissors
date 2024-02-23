let playerScore = 0, computerScore = 0;
const choice = [`rock`, `paper`, `scissors`];

const gameButtons = document.querySelector('.gameButtons');
let resultText = document.querySelector('#resultText');

gameButtons.addEventListener('click', (event) => {
    event.stopPropagation();
  switch (event.target) {
    case document.querySelector('.rock'): 
    playRound('rock');
    break;
    case document.querySelector('.paper'):
    playRound('paper');
    break;
    case document.querySelector('.scissors'):
    playRound('scissors');
    break;
  }
});

function playRound(playerSelection) {

    if(playerScore < 5 && computerScore < 5) {

    let computerSelection = choice[Math.floor(Math.random() * choice.length)]

    if (
        ((playerSelection === `paper` && computerSelection === `rock`) ||
        (playerSelection === `scissors` && computerSelection === `paper`)) ||
        (playerSelection === `rock` && computerSelection === `scissors`)) {
        playerScore += 1;
    }
    else if (playerSelection === computerSelection) console.log('');
    else computerScore += 1;

    resultText.textContent = `You ${playerScore} : PC ${computerScore}`;
}

else if (playerScore === 5 || computerScore === 5) {    
    alert((playerScore > computerScore) ? "Player won" : "PC won");
    endGame();
}
}

function endGame() {
    playerScore = 0;
    computerScore = 0;
    resultText.textContent = '';
}
