function win(){
  winAnimation.innerHTML += win_content;
  const winLetters = document.querySelector("#win-letters");
  isgameWin = true;
  drawWin();
  pauseTrack();
  stopGameLoop();
  winAnimation.classList.add('won');
  setTimeout(() => {
    winLetters.classList.add('win');
  }, 2000);
  setTimeout(()=>{
    PlayWinTrack();
  },100)
  }    
 