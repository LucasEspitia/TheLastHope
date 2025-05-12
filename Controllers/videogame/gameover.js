function restarSurvivorZombie(){
    createNewSurvivor();
    zombiesArray.splice(0, zombiesArray.length);
    CreateNewsZombies();
}

function restartGame(){
    restarSurvivorZombie(); 
    lives--;

    if(lives == 0){
        gameOver();
    }else if(lives > 0){
        screenStart();
        hasDisplayedStartScreen = true;
    }
}

function gameOver(){
    pauseTrack();
    clearInterval(gameInterval);
    Gameoverscreen();
}

function resetGame(){ 
    resetPoints();
    score = 0;
    lives = 3; 
    ScreenGameOver.innerHTML = "";
}
