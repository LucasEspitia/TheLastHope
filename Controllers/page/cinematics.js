/*This is the first cinematic*/
function cinematic() {
    let eventOn = true;
    levelinprogress = 1;
  //Pause the music, and change for the cinematics music
    playEffect(0);
    pauseTrack();
    setTimeout(() => {
      playTrack3();
    }, 200);
    
    //Put the content and hide the menu
    contCine.innerHTML = cinContent;
    hideContent();
    //get the variables
    const jumpCine = document.getElementById("jump-cinematic");
    const texts = document.querySelectorAll(".text"); 
    //stop background and hide everything
    isBackgroundActive = false;  
    let timeouts = [];
  
    setTimeout(() => {
      jumpCine.style.display = "block";
    }, 2000);
  
    for (let i = 0; i < texts.length; i++) {
      texts[i].style.display ="block";
    }
  
    for (let i = 0; i < texts.length; i++) {  
      const timewait = i * 5000;  
      const timeout = setTimeout(() => {
        if (i > 0) {
          texts[i - 1].style.opacity = "0";
        }	
        if(i==2){
          setTimeout(() => { 
            jumpCine.innerText = "Click enter to start the Game or Press here";		
          }, 3000);
        }
        texts[i].style.opacity = "1";
  
        if (i === texts.length - 1) {
          jumpCine.style.display = "block"; 
          timeouts.push(setTimeout(() => {
            canvas.style.display = "block";
           
          }, 15000)); 
        }
      }, timewait);
      timeouts.push(timeout); 
    }
    //clicks

    jumpCine.addEventListener("click",()=>{
      for (let i = 0; i < timeouts.length; i++) {
        clearTimeout(timeouts[i]); 
      }
      jumpCine.style.display = "none";
      for (let i = 0; i < texts.length; i++) {
        texts[i].style.display ="none";
      }
      canvas.style.display = "block";
      contCine.innerHTML = "";
      playEffect(0);
      pauseTrack3();
      StartGame1();
    });
    document.addEventListener("keydown", function(event) {
      if (event.code === "Enter" && eventOn == true) {
        gameRunning = false;
        eventOn = false;
        for (let i = 0; i < timeouts.length; i++) {
          clearTimeout(timeouts[i]); 
        }
        jumpCine.style.display = "none";
        for (let i = 0; i < texts.length; i++) {
          texts[i].style.display ="none";
        }
        contCine.innerHTML = "";
        playEffect(0);
        pauseTrack3();
        StartGame1(); 
      } 
    }); 
  }