let playerChoice, pcChoice;
const choice = [`rock`, `paper`, `scissors`];

function getPcChoice(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getPlayerChoice() {
    return parseInt(prompt("0 - rock\n1 - paper\n2-scissors", "0"));
}

function play(playerSelection, computerSelection) {
    if ((playerChoice === `paper` && pcChoice === `rock`) || (playerChoice === `scissors` && pcChoice === `paper`) || (playerChoice === `rock` && pcChoice === `scissors`)) {
        console.log("Player won");
    }
    else if (playerChoice === pcChoice) console.log("draw");
    else console.log("PC won");
}

playerChoice = choice[getPlayerChoice()];
pcChoice = choice[getPcChoice(2, 0)];

play(playerChoice, pcChoice);





