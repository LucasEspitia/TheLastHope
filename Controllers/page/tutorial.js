  let currentIndex = 0;
  tutorialBtn.addEventListener('click', () => {
    playEffect(0);
    tutorialCont.innerHTML = Tutorial_content;
    const tutorial = document.getElementById("tutorial");
    const backBtnT = document.getElementById("back-btn-t");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");
    const tags = document.querySelectorAll(".tag");
    const points = document.getElementById("points");
    const zombieAni = document.getElementById("Animat_zomb");
    const SurvivorAni = document.getElementById("Animat_survi");
  
                        //ANIMATIONS
     //begining
     tutorial.style.display = "block";
     setTimeout(() => {
       tutorial.style.opacity = "1";
     }, 300);                
   
     //points
     let position = 0;
     setInterval(()=>{
     position=(position+20)%160;
     points.style.backgroundPosition = `-${position}px 0px`;
    },1000/8);
   
    //Zombie 
    let positionZom = 0;
    setInterval(() => {
      positionZom = (positionZom + 80) % 240;
      zombieAni.style.backgroundPosition = `-${positionZom}px 0px`;
    }, 1000 / 8);
    
    //Survivor
    let positionSur = 0;
    setInterval(() => {
      positionSur = (positionSur + 80) % 240;
      SurvivorAni.style.backgroundPosition = `-${positionSur}px 0px`;
    }, 1000 / 8);
  
  
    
                        // EVENTS 
    
    backBtnT.addEventListener("click", () => {
      playEffect(0);  
      tutorial.style.opacity = "0";
    setTimeout(() => {
      tutorial.style.display = "none";
      currentIndex = 0;
      tags.forEach(tag => {
        tag.classList.remove("active", "next");
      });
    }, 500);
    tutorialCont.innerHTML = "";
  });
  
          //Control the carrusel
    //left
    prevBtn.addEventListener("click", () => {
      playEffect(0);
      tags[currentIndex].classList.remove("active");
      currentIndex--;
      if (currentIndex < 0) {
        currentIndex = tags.length - 1;
      }
      tags[currentIndex].classList.add("active");
  
    });
    //right
    nextBtn.addEventListener("click", () => {
      playEffect(0);
      tags[currentIndex].classList.remove("active");
      currentIndex++;
      if (currentIndex >= tags.length) {
        currentIndex = 0;
      }
      tags[currentIndex].classList.add("active");
    });
  });
  
  
  
  