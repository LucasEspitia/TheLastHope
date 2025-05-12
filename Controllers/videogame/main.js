                                        /* Principal Cicle */
function gameLoop() {
    update();
    draw();
}; 

function update() {
    survivor.moveProcess();
    survivor.getPoints();
    updateZombie();
   checkZombieCollision_();
   changelevel();
}
function draw(){
 reset_canvas();
 survivor.draw();
 drawWalls();
 drawFoods();
 drawZombie();
 drawScore();
 drawLives();
 drawlive();
}

function runGameLoop(){
    gameInterval = setInterval(gameLoop, 1000/ fps);     
}

function stopGameLoop(){
  clearInterval(gameInterval);
}








