
//It controls the levels...
function changelevel(){
  if(levelinprogress == 1){
      if(foodeaten == foodcount){
          canvas.style.display = "none";
          levelinprogress++;
          nextlevelmedium();
      }
  }else if(levelinprogress == 2){
      if(foodeaten == foodcount){
          canvas.style.display = "none";
          levelinprogress++;
          nextlevelhard();      
      }

  }else if(levelinprogress == 3){
      if(foodeaten == foodcount){
        win();
      }

  }
};

//This is for the level 1
function StartGame1(){
  playRandomTrack(); 
  restarSurvivorZombie();
  resetGame();
  positionVolumeinGame();
  screenStart();
}
//This is for the level 2
function nextlevelmedium(){
  gameRunning = false;
  resetPoints();
  stopGameLoop();
  foodeaten = 0;
  canvas.style.display = "block";
  screenStart();
  restarSurvivorZombie(); 
}

//This is for the level 3
function nextlevelhard(){
  gameRunning = false;
  resetPoints();
  stopGameLoop();
  foodeaten = 0;
  canvas.style.display = "block";
  screenStart();
  restarSurvivorZombie(); 
};


