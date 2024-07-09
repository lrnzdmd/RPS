    let playerScore = 0;
    let cpuScore = 0;
    let roundNumber = 1;
    let gameActive = true;
    let roundText = 0;
    let cpuScoreDiv = 0;
    let playerScoreDiv = 0;
    let restart = 0;

    document.addEventListener("DOMContentLoaded", function() {
      let buttons = document.querySelectorAll(".playerside button");
      roundText = document.querySelector(".header h2");
      playerScoreDiv = document.querySelectorAll(".playerscore div");
      cpuScoreDiv = document.querySelectorAll(".cpuscore div");
      restart = document.querySelector("#restartgame");
      restart.addEventListener("click", resetGame);
      for (let i = 0 ; i < buttons.length ; i++) {
          buttons[i].addEventListener("click", getPlayerMove);
      }
    });

    function wait(ms){
      return new Promise(resolve => setTimeout(resolve,ms));
    }

    function getPlayerMove(event){
      let button = event.currentTarget;
      let playerChoice = button.id.slice(1);
      if (gameActive) {
      PlayRound(playerChoice)
      }
    }

    function GetComputerSign() {
      let choices = ["rock", "paper", "scissors"];
      let move = choices[Math.floor(Math.random() * choices.length)];
      return move;
    }
    function PlayRound(playerMove){

      

      let pbutton = document.getElementById("p" + playerMove);

      let computerMove = GetComputerSign();

      let cbutton = document.getElementById("c"+computerMove);

      if (playerMove == computerMove) {
        pbutton.style.backgroundColor = "gray";
        cbutton.style.backgroundColor = "gray";
      }
      else if (playerMove == "rock" && computerMove == "paper" || playerMove =="paper" && computerMove == "scissors" || playerMove == "scissors" && computerMove == "rock")
      {
        pbutton.style.backgroundColor = "red";
        cbutton.style.backgroundColor = "green";
        cpuScoreDiv[cpuScore].style.backgroundColor = "green";
        roundNumber++;
        cpuScore++;
        
      }
      else {
        pbutton.style.backgroundColor = "green";
        cbutton.style.backgroundColor = "red";
        playerScoreDiv[playerScore].style.backgroundColor = "green";
        playerScore++;
        roundNumber++;
      }
      gameActive = false;
      
      if (playerScore === 3) {
        restart.style.display = "block";
        restart.textContent = "You win. Click here to restart game";
      }
      else if (cpuScore === 3) {

        restart.style.display = "block";
        restart.textContent = "Cpu win. Click here to restart game";

      }
      else {
      
      restoreColor();
      }
     

      
      
    
  }
async function restoreColor(){
  await wait(2000);
  let buttons = document.querySelectorAll("button");
  for(let i = 0; i<buttons.length; i++){
    buttons[i].style.backgroundColor = "white";
  }
  roundText.textContent = "Round " + roundNumber;
  gameActive= true;
}

function resetGame() {
  playerScore = 0;
  cpuScore = 0;
  roundNumber = 1;
  for (let i = 0; i<3 ; i++){
    playerScoreDiv[i].style.backgroundColor = "#1f2937";
    cpuScoreDiv[i].style.backgroundColor = "#1f2937";

  }
  let buttons = document.querySelectorAll("button");
  for(let i = 0; i<buttons.length; i++){
    buttons[i].style.backgroundColor = "white";
  }
  roundText.textContent = "Round " + roundNumber;
  
  restart.style.display = "none";
  gameActive = true;
  
}