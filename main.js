const choices = document.querySelectorAll('.choice');
const score = document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('score');
const modal = document.querySelector('.modal');
const scoreboard = {
    player: 0,
    computer: 0
}

//Play game
function play(e){
    restart.style.display = 'inline-block';
    const playerChoice = (e.target.id);

}

//Event listeners
choices.forEach(choice => choice.addEventListener('click', play));

