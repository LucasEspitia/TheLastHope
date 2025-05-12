function drawScore() {
    canvasCtx.font = "40px Chiller";
    canvasCtx.fillStyle = "#7f052a";
    canvasCtx.fillText(
        "SCORE: ",
        20,
        35
    );
    canvasCtx.fillText(
        score,
        125,
        35
    );
};
const imgHealth = new Image();
imgHealth.src = "../Public/Images/page/vector/health.png";
function drawLives(){
    canvasCtx.font = "40px Chiller";
    canvasCtx.fillStyle = "#7f052a";
    canvasCtx.fillText(
        "LIVES ",
        (canvas2Width/2)-40,
        35
    );
    for(let i = 0; i< lives; i++){
        canvasCtx.drawImage(
            imgHealth,
            (canvas2Width/2)-70 + (50 * i),
            40,
            
        )
    }       
}

