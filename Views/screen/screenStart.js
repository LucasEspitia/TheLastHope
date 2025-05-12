//This is for the 
function screenStart() {
    if (!gameRunning) {
      let wasused = 0;
      if (wasused == 0) {
        wasused = 1;
        panelStart.style.display = "block";
        panelStart.innerHTML = startContent;
        const btnGameStart = document.getElementById("btn_start");
        btnGameStart.addEventListener("click", () => {
          panelStart.style.display = "none";
          panelStart.innerHTML = "";
          gameRunning = true;
          setTimeout(() => {
            runGameLoop();
          }, 200);
        });
      } else {
        panelStart.style.display = "block";
      }
    }
  }