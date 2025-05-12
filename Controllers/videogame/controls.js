//KEYBOARD EVENTOS
window.addEventListener("keydown", (event) => {
    let k = event.keyCode
    setTimeout(() =>  {
        if(k == 37 || k == 65 ){ 
            //left arrow and "a"
            survivor.nextDirection = DIRECTION_LEFT;
            //console.log("left");
        }else if(k == 38 || k == 87 ){
            //up arrow and "w"
            survivor.nextDirection = DIRECTION_UP;
            //console.log("up");
        }else if(k == 39 || k == 68 ){ 
            //right arrow and "d"
            survivor.nextDirection = DIRECTION_RIGHT;
            //console.log("right");
        }else if( k == 40 || k == 83){ 
            //bottom arrow and "s"
            survivor.nextDirection = DIRECTION_BOTTOM;
            //console.log("down");      
        }else if(k==27){
            if(gameRunning){
                pauseGammeandGoToMenu();
            }
        }
    })

})
document.addEventListener("keydown", (event) => {
  if (event.keyCode == 13 || event.keyCode == 32) { // Enter or Space
    if (!gameRunning && panelStart.style.display == "block") {
      panelStart.style.display = "none";
      panelStart.innerHTML = "";
      gameRunning = true;
      setTimeout(()=>{
        runGameLoop();
      },200);
    }
  }
});
