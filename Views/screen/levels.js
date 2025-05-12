const lvlContent = `    
<div id="top-levels">
    <button id="back-btn-lvl" class="btn-3d">X</button>
</div>
<div id="level-cards">
    <div class="level-card">
        <h2>Easy level</h2>
        <div id="easy_img"></div>
    <div class="card-overlay"></div>
        <button id="level-button-easy">Play</button>
    </div>
    <div class="level-card">
        <h2>Medium level</h2>
        <div id="medium_img"></div>
    <div class="card-overlay"></div>
        <button id="level-button-medium">Play</button>
    </div>
    <div class="level-card">
        <h2>Hard level</h2>
        <div id="hard_img"></div>
    <div class="card-overlay"></div>
        <button id="level-button-hard">Play</button>
    </div>
</div> `;

function closeevetything(){
    levelCnt.style.display = "none"; 
    setTimeout(() => {
      levelCnt.style.opacity = "0";
    }, 400); 
    levelCnt.innerHTML = " ";
    isBackgroundActive = false;
    menu.style.display ="none";
    logo.style.display ="none";
    music.style.display = "none";
    gameContainer.style.backgroundImage = "none"
    canvas2.style.display = "block";
    goMenuButton.style.display = "block";
    music.style.display ="block";
  }