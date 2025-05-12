const Tutorial_content = ` <div id="tutorial">
    <div id="top-tutorial">
        <button id="back-btn-t" class="btn-3d">X</button>
    </div>
    <div id="tutorial-body">
        <div id="tag-container">
            <div class="tag active" id="movement-tag">
                <h2>Movement</h2>
                <img src="Public/Images/page/design/movement.png">
                <p>Use the arrow keys to move the survivor up, down, left and right.</p>
            </div>
            <div class="tag" id="shoot-tag">
                <h2>Shoot</h2>
                <img src="Public/Images/page/design/shoot.png">
                <p>Press the spacebar to shoot your gun and kill the zombies.</p>
            </div>
            <div class="tag" id="bonus-tag">
                <h2>Bonus</h2>
                <div id="bonus">
                  <div id = "grave"> 
                   <img src="Public/Images/videogame/design/grave.png">
                   <p>Take it to get more points</p>
                  </div>
                  <div id="bullets">
                    <img src="Public/Images/videogame/design/ammo.png">
                    <p>Take it to get ammo</p>
                  </div>
                  <div id="points-cont"> 
                     <div id="points"></div>  
                  <p>Take it to get points and unlock nxt lvl</p> 
                  </div>
                </div>
            </div>
            <div class="tag" id="lose-life-tag">
                <h2>Lose a Life</h2>
                <div id="Animat_lose">
                  <div id="Animat_survi"></div>
                  <div id="Animat_zomb"></div>
                  <p>Avoid colliding with enemies, avoid bites...</p>
                </div>  
            </div>
        </div>
        <div id="tutorial-nav-container">
            <button id="prev-btn"><img src="Public/Images/page/vector/left-btn.png"></button>
            <button id="next-btn"><img src="Public/Images/page/vector/right-btn.png"></button>
        </div>
    </div>
</div>`;