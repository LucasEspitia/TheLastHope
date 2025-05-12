function drawWin(){
    winAnimation.style.display = "block"
    canvas.style.display = "none";
    canvas2.style.display = "none";
    music.style.display = "none";
    goMenuButton.style.right = "50%"
  }
  function deleteAll() {
    isBackgroundActive = true;
    canvas.style.display = "none";
    canvas2.style.display = "none";
    music.style.display = "none";
    menu.style.display = "block";
    logo.style.display = "block";
    music.style.display = "block";
    music.style.top = "auto";
    music.style.right = "auto";
    music.style.bottom = "0";
    music.style.left = "20px";
    goMenuButton.style.display = "none";
    goMenuButton.style.right = "auto";
    goMenuButton.style.right = "150px";
    winAnimation.classList.remove('won');
    winAnimation.style.zIndex = "0"; 
    winAnimation.innerHTML = "";
    winAnimation.style.display = "none";
  }