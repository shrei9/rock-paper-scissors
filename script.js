let playerChoice, computerChoice;
const choice = [`rock`, `paper`, `scissors`];

function getPlayerChoice() {
    let temp = prompt("Rock, paper or scissors?");
    temp = temp.trim();
    return temp.toLowerCase();
}

function play() {

    playerChoice = getPlayerChoice();
    computerChoice = choice[Math.floor(Math.random() * choice.length)]

    if ((playerChoice === `paper` && computerChoice === `rock`) ||
        (playerChoice === `scissors` && computerChoice === `paper`) ||
        (playerChoice === `rock` && computerChoice === `scissors`)) {
        console.log("Player won");
    }
    else if (playerChoice === computerChoice) console.log("draw");
    else console.log("PC won");
}

play();





