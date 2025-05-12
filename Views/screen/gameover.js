const gameOverContent = `
<div id="gameover-container">
            <div id="Score_texts">
                <p>Your score: <span id="score-display"></span></p>
                <p>Your best score: <span id="best-score"></span></p>
            </div>
            <div id="gameover_phrase">
                 <p>Game Over</p>
            </div> 
            <p><button id="restart-button">Restart</button></p>
            <p><button id="back-to-menu-btn">Menu</button></p>
</div>
`;

function hideContentGameover(){
    goMenuButton.style.display = "none";
    canvas.style.display = "none";
    canvas2.style.display = "none";
    music.style.display = "none";
}
function goBackContentGover(game_over){
    game_over.style.display = "none";
    menu.style.display ="block";
    logo.style.display ="block";
    music.style.display = "block";
    music.style.top = "auto";
    music.style.right = "auto";
    music.style.bottom = "0";
    music.style.left =  "20px";
}
function putGameoverCont(game_over){
    game_over.style.display = "none";
    music.style.display = "block";
    goMenuButton.style.display = "block";
    canvas2.style.display = "block";
}