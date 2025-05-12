/*MUSIC*/

//Play the beggining 
start_button.addEventListener('click', () => {
  if (isFirstPlay) {
    start.style.display = "none";
    playRandomTrack();
    isFirstPlay = false;
  }
});

// Random music
function getRandomTrackIndex() {
  return Math.floor(Math.random() * tracks.length);
}

// Preload music
function loadTrack(trackIndex) {
  currentTrackIndex = trackIndex;
  audioPlayer.src = tracks[currentTrackIndex];
  audioPlayer.load();
  playTrack();
}

function playRandomTrack() {
  if (audioPlayer.muted) {
    loadTrack(getRandomTrackIndex());
  } else {
    loadTrack(getRandomTrackIndex());
    playTrack();
  }
}

// Play a specific track
function playSpecificTrack(trackIndex) {
  loadTrack(trackIndex);
}

//Play the gameover Song
function playAudio2(){
  audioGameOver.play();
}
function pauseAudio2(){
  audioGameOver.pause();
}
audioGameOver.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

//Play the cinematics
function playTrack3(){
  audioCinematics.play();
}
function pauseTrack3(){
  audioCinematics.pause();
}
//Play the gameWin
function PlayWinTrack(){
  audiogameWin.play(); 
}
function PauseWinTrack(){
  audiogameWin.pause();
}

// Mute audio functions
function muteAudio2() {
  audioGameOver.volume = 0;
}

function muteTrack3() {
  audioCinematics.volume = 0;
}
function muteWinTrack() {
  audiogameWin.volume = 0;
}

// Unmute audio functions
function unmuteWinTrack() {
  audiogameWin.volume = 1;
}
// Unmute audio functions
function unmuteAudio2() {
  audioGameOver.volume = 1;
}

function unmuteTrack3() {
  audioCinematics.volume = 1;
}

// Load and play the next song
audioPlayer.addEventListener('ended', function() {
  playRandomTrack();
});

// Toggle music on/off
function toggleMusic() {
  if(!isMusicOn){
    playTrack();
  }
  audioPlayer.muted = !audioPlayer.muted;
  musicToggle.classList.toggle('active', !audioPlayer.muted);

  if (audioPlayer.muted) {
    // Mute audio 2 and track 3 and 4
    muteWinTrack();
    muteAudio2();
    muteTrack3();
  } else {
    // Unmute audio 2 and track 3 and 4
    unmuteWinTrack();
    unmuteAudio2();
    unmuteTrack3();
  }
}


// Play
function playTrack() {
  if (!audioPlayer.muted) {
    audioPlayer.play();
    isMusicOn = true;
  }
}

// Pause
function pauseTrack() {
  audioPlayer.pause();
  isMusicOn = false;
}

// Repeat 
musicToggle.addEventListener('click', toggleMusic);

/* EFFECTS */

// Preload effects
function preloadEffects() {
  for (let i = 0; i < effects.length; i++) {
    let audio = new Audio(effects[i]);
    audio.load();
  }
}
preloadEffects();

function playEffect(index) {
  if (isEffectsOn) {
    let audio = new Audio(effects[index]);
    audio.play();
  }
}

function toggleEffects() {
  isEffectsOn = !isEffectsOn;
  effectsToggle.classList.toggle('active', isEffectsOn);
  if (isEffectsOn) {
    playEffect(0);
  } 
}

effectsToggle.addEventListener('click', toggleEffects);

/* GENERAL CLICKS */

// Open
playButton.addEventListener("click", () => {
  if(gameRunning){
    stopGameLoop();
  }

  playEffect(0);
  soundPanel.style.display = "block";
});

// Close
soundBton.addEventListener("click", () => {
  if(gameRunning){
    runGameLoop();
  }
  playEffect(0);
  soundPanel.style.display = "none";
});

// Trigger click effect on effects toggle button click
effectsToggle.addEventListener('click', () => {
  playEffect(0);
});
