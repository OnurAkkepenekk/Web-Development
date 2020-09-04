var scores, roundScore, activePlayer,gamePlaying,lastDice;

init();

document.querySelector(".btn-roll").addEventListener("click", function () {
 
 if(gamePlaying){
   
  // Random number
  var dice1 = Math.floor(Math.random() * 6 + 1);
  var dice2 = Math.floor(Math.random() * 6 + 1);
  console.log(dice1,dice2);

  // Display the result
  document.getElementById('dice-1').style.display='block';
  document.getElementById('dice-2').style.display='block';
  console.log(dice1,dice2);

  document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
  document.getElementById('dice-2').src = 'dice-' + dice2 + '.png';

  
  // Update the round score IF the rolled number was NOT a 1
  if(dice1 !== 1 && dice2 !== 1){
    roundScore += (dice1 +dice2);
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }

  // One dice 
  /*if(dice===6 && lastDice===6){
    scores[activePlayer]=0;
    document.getElementById("score-" + activePlayer).textContent = '0';
  }
  else if (dice === 1) {
    //Next player
    nextPlayer();
  } else {
    //Add score
    roundScore += dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
    lastDice=dice;
  }*/
  }
});

document.querySelector(".btn-hold").addEventListener("click", function () {

  if(gamePlaying){
  // Add CURRENT score to global score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.getElementById("score-" + activePlayer).textContent = scores[activePlayer];

  var winningScore;
  var input =document.querySelector('.final-score').value;

  if(input){

    winningScore=input;
  }
  else{
    winningScore=100;
  }

  // Check if player won the game
  if (scores[activePlayer] >= winningScore) {
      
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.getElementById('dice-1').style.display='none';
    document.getElementById('dice-2').style.display='none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
    gamePlaying=false;
  } else {
    // Next player
    nextPlayer();
  }
}
});
document.querySelector(".btn-new").addEventListener("click", init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying=true;
  document.getElementById('dice-1').style.display='none';
  document.getElementById('dice-2').style.display='none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}

function nextPlayer() {
  roundScore = 0;

  document.getElementById("current-" + activePlayer).textContent = "0";
  document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");

  activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
  document.querySelector(".player-" + activePlayer + "-panel").classList.add("active");

  document.getElementById('dice-1').style.display='none';
  document.getElementById('dice-2').style.display='none';
}
