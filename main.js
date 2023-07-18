const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game
function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = (e.target.id);
    const computerChoice = getComputerChoice();

}

//Get computer choice
function getComputerChoice(){
    const rand = Math.random();
    if (rand < 0.34) {
        return 'rock';
    } else if(rand <= 0.67) {
        return 'paper';
    }
    else {
        return 'scissors';
    }
}

//Event listeners
choices.forEach(choice => choice.addEventListener('click', play));

