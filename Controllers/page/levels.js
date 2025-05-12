levelsBtn.addEventListener('click', () => {
  playEffect(0);
  levelCnt.innerHTML = lvlContent; 
  const lvlBckButton = document.getElementById("back-btn-lvl");
  const easy = document.getElementById("easy_img");
  const medium = document.getElementById("medium_img");
  const hard = document.getElementById("hard_img");
  const leveleasy = document.getElementById("level-button-easy");
  const levelmedium = document.getElementById("level-button-medium");
  const levelhard = document.getElementById("level-button-hard");


        //Events
  //Make the panel
  levelCnt.style.display = "block"; 
  setTimeout(() => {
    levelCnt.style.opacity = "1";
  }, 100); 
  //Go back
  lvlBckButton.addEventListener('click', () =>{
    playEffect(0);
    levelCnt.style.display = "none"; 
  setTimeout(() => {
    levelCnt.style.opacity = "0";
  }, 400); 
  levelCnt.innerHTML = " ";
});
//Events to the game

//Easy
leveleasy.addEventListener('click',() => {
  levelinprogress = 1;
  playEffect(0);
  closeevetything();
  StartGame1();
});

//Medium
levelmedium.addEventListener('click',() => {
  levelinprogress = 2;
  playEffect(0);
  positionVolumeinGame();
  closeevetything();
  nextlevelmedium();
});

//Hard
levelhard.addEventListener('click',() => {
  levelinprogress = 3;
  playEffect(0);
  closeevetything();
  positionVolumeinGame();
  nextlevelhard();
  
});

       //Animations
 //Easy level
 let positioneasy = 0;
 setInterval(() => {
   positioneasy = (positioneasy + 75) % 1575;
   easy.style.backgroundPosition = `-${positioneasy}px 0px`;
 }, 15);

  //Medium level
let positionmed = 0;
  setInterval(() => {
    positionmed = (positionmed + 75) % 225;
    medium.style.backgroundPosition = `-${positionmed}px 0px`;
  }, 1600 / 8);

  //Hard Level
let positionhard = 0;  
  setInterval(() => {
    positionhard = (positionhard+ 75) % 150;
    hard.style.backgroundPosition = `-${positionhard}px 0px`;
  }, 3600 / 8);
});
