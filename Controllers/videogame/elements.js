                                                             /*Survivor*/
 //Create the player and update some of its methods...

 function createNewSurvivor(){
    survivor =  new Survivor (
        oneBlockSize * 10,
        oneBlockSize * 17,
        oneBlockSize,
        oneBlockSize,
        oneBlockSize/8,
        animationFramesDown,
        animationFramesUp,
        animationFramesRight,
        animationFramesLeft
    );
    //console.log(survivor);
}

function updateSurvivor(){
   survivor.moveProcess();
   survivor.getPoints();
} 

                                                                    /*Zombies*/

//Create the Zombies, also it has some conditions to different level...
  function CreateNewsZombiesLevel(zombiesLevel) {
    zombie_1 = new Zombies(
        oneBlockSize*9,
        oneBlockSize*10,
        oneBlockSize,
        oneBlockSize,
        zombiesLevel.zombie1.speed,
        zombie_1_down,
        zombie_1_up,
        zombie_1_right,
        zombie_1_left,
        zombiesLevel.zombie1.range 
    );

    zombie_2 = new Zombies(
        oneBlockSize*11,
        oneBlockSize*10,
        oneBlockSize,
        oneBlockSize,
        zombiesLevel.zombie2.speed,
        zombie_2_down,
        zombie_2_up,
        zombie_2_right,
        zombie_2_left,
        zombiesLevel.zombie1.range 
    );

    zombie_3 = new Zombies(
        oneBlockSize*9,
        oneBlockSize*11,
        oneBlockSize,
        oneBlockSize,
        zombiesLevel.zombie3.speed,
        zombie_3_down,
        zombie_3_up,
        zombie_3_right,
        zombie_3_left,
        zombiesLevel.zombie2.range 
    );


    zombie_4 = new Zombies(
        oneBlockSize*10,
        oneBlockSize*11,
        oneBlockSize,
        oneBlockSize,
        zombiesLevel.zombie3.speed,
        zombie_4_down,
        zombie_4_up,
        zombie_4_right,
        zombie_4_left,
        zombiesLevel.zombie4.range 
    );

    zombiesArray.push(zombie_1);
    zombiesArray.push(zombie_2);
    zombiesArray.push(zombie_3);
    zombiesArray.push(zombie_4);
    
    
    if(levelinprogress == 3){
        zombie_5 = new Zombies(
            oneBlockSize * 10,
            oneBlockSize * 11,
            oneBlockSize,
            oneBlockSize,
            oneBlockSize/15,
            zombie_5_down,
            zombie_5_up,
            zombie_5_right,
            zombie_5_left,
            12
        );

        zombiesArray.push(zombie_5);
    }
    for(let i = 0; i< zombiesArray.length; i++){
        //console.log(zombiesArray[i]);
    }
}
//Draw the Zombies and updat...
function drawZombie(){
    for(let i = 0; i<zombiesArray.length; i++){
        zombiesArray[i].draw();
    }
}

function updateZombie(){
    for(let i = 0; i< zombiesArray.length; i++){
        zombiesArray[i].moveProcess();
     }
}
//For each level there is different variables...
function  CreateNewsZombies(){
    if(levelinprogress == 1){
        CreateNewsZombiesLevel(level1);
    }else if(levelinprogress == 2){
        CreateNewsZombiesLevel(level2);
    }else if(levelinprogress == 3){
        CreateNewsZombiesLevel(level3);
    }
}
//In case of collition
function checkZombieCollision_(){
    if(survivor.checkZombieCollision()){
        playEffect(2);
        gameRunning = false;
        stopGameLoop();
        restartGame();
    }
  }


