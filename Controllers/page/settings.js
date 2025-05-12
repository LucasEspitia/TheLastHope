settingsButton.addEventListener('click', () => {
  playEffect(0);
  optionsMenuContainer.innerHTML = settingsMenuContent;
  const volumeSlider = document.getElementById("volume-slider");
  const muteButton = document.getElementById("mute-button");
  const brightnessSlider = document.getElementById("brightness-slider");
  const gameContainer = document.getElementById("game-container");
  const backButton = document.querySelector("#options-menu #back-btn");
  const optionsMenu = document.getElementById("options-menu");

  let optionsOpen = false;

  optionsMenu.style.display = "block";
  setTimeout(() => {
    optionsMenu.style.opacity = "1";
  }, 100);

  optionsOpen = true;

  backButton.addEventListener("click", () => {
    playEffect(0);
    optionsMenu.style.opacity = "0";
    setTimeout(() => {
      optionsMenu.style.display = "none";
    }, 500);
    optionsOpen = false;
    optionsMenuContainer.innerHTML = "";
  });

  function setVolume(volume) {
    audioPlayer.volume = volume;
  }

  volumeSlider.addEventListener("input", () => {
    setVolume(volumeSlider.value);
  });

  muteButton.addEventListener("click", () => {
    if (audioPlayer.muted) {
      audioPlayer.muted = false;
      muteButton.innerText = "Mute";
    } else {
      audioPlayer.muted = true;
      muteButton.innerText = "Unmute";
    }
  });

  function setBrightness(brightness) {
    gameContainer.style.filter = `brightness(${brightness})`;
  }

  brightnessSlider.addEventListener("input", () => {
    setBrightness(brightnessSlider.value);
  });
});
