const settingsMenuContent = `
  <div id="options-menu">
    <div id="top-options">
      <button id="back-btn" class="btn-3d">X</button>
    </div>
    <div id="volume-control">
      <label for="volume-slider">Volume:</label>
      <input type="range" id="volume-slider" min="0" max="1" step="0.1" value="1">
      <button id="mute-button">Mute</button>
    </div>
    <div id="brightness-control">
      <label for="brightness-slider">Brightness:</label>
      <input type="range" id="brightness-slider" min="0.2" max="1" step="0.1" value="1">
    </div>
  </div>
`;