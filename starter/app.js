/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var globalScores, currentScores, activePlayer, dice, totalDice, gamePlaying;
globalScores = [0, 0];
currentScores = 01;
activePlayer = 0;
totalDice = 0;
gamePlaying = true;

document.querySelector('.dice').style.display = 'none';

var btnclick = document.querySelector(".btn-roll").addEventListener("click", function() {
    if(gamePlaying){
    dice = Math.floor(Math.random() * 6 + 1);
    totalDice += dice;
    document.querySelector("#current-" + activePlayer).innerHTML = totalDice;
    var diceDOM = document.querySelector(".dice");
    diceDOM.style.display = "block";
    diceDOM.src = "dice-" + dice + ".png";

    if (dice === 1) {
      globalScores[activePlayer] += totalDice;
      currentScores = document.querySelector("#score-" + activePlayer);
      currentScores.innerHTML = globalScores[activePlayer];
      if (currentScores.innerHTML >= 100) {
        gamePlaying = false;
        alert("Player " + (activePlayer + 1) + " won!");
      }
      totalDice = 0;
      if (activePlayer === 1) {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        activePlayer = 0;
      } else {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        activePlayer++;
      }
    }
  }
});


var btnHold = document.querySelector('.btn-hold').addEventListener('click', function(){
    if(gamePlaying){
    globalScores[activePlayer]+= totalDice;
    currentScores = document.querySelector('#score-' + activePlayer);
    currentScores.innerHTML = globalScores[activePlayer];
    if (currentScores.innerHTML >= 100) {
        gamePlaying = false;
        alert("Player " + (activePlayer + 1) + " won!");
      }
      totalDice = 0;
      if (activePlayer === 1) {
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
        activePlayer = 0;
      } else {
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
        activePlayer++;
      }
}
});
var newGameClick = document.querySelector('.btn-new').addEventListener("click", function(){
    location.reload();
});
