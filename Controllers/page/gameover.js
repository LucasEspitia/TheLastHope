const ScreenGameOver = document.getElementById("gameover");

function Gameoverscreen(){
        hideContentGameover();
        setTimeout (() => {
            playSpecificTrack(7);
        },100);
        playAudio2();
        gameRunning = false;
        ScreenGameOver.innerHTML += gameOverContent;
        const game_over = document.getElementById("gameover-container");
        const back_menu = document.getElementById("back-to-menu-btn");
        const restart = document.getElementById("restart-button"); 
        const scoreText = document.getElementById("score-display");
        const bestScoreText = document.getElementById("best-score");
        localStorage.setItem("bestScore", bestScore);

        if (score > bestScore) {
            bestScore = score;
            localStorage.setItem('bestScore', bestScore);
          }
        bestScoreText.innerHTML = bestScore;  
        scoreText.innerHTML = score;
    restart.addEventListener("click",()=>{
        pauseTrack();
        resetGame();
        putGameoverCont(game_over);
        restarSurvivorZombie();
        pauseAudio2(); 
        setTimeout(()=>{
            playRandomTrack();
        },100)
        if(levelinprogress == 1){
            StartGame1();
        }else if(levelinprogress == 2){
            nextlevelmedium();
        }else if(levelinprogress == 3){
            nextlevelhard();
        }
    });   
        
    back_menu.addEventListener("click", () => {
        pauseTrack();
        isBackgroundActive = true;
        goBackContentGover(game_over);
        stopGameLoop();
        pauseAudio2();
        setTimeout(() =>{
            playRandomTrack();
        },200);
    

    });
}

