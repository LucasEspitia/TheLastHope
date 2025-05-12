goMenuButton.addEventListener("click", () => {
  pauseGammeandGoToMenu();
});

function pauseGammeandGoToMenu(){
  const confirmed = confirm("Are you sure you want to exit the current game?"); 
  if (confirmed) {
    gameRunning = false;
    pauseTrack();
    deleteAll();
    resetGame();
    stopGameLoop();
    setTimeout(() => {
      playRandomTrack();
    },200)
  }
  if(isgameWin){
    PauseWinTrack();
    setTimeout(()=>{
      playRandomTrack();
    },100)
  } 
}

