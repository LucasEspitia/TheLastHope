const cinContent = `
	<div id="cinematicas">
		<div class="text">The virus has spread and there is no way out</div>
		<div class="text">You have what it takes to survive?</div>
		<div class="text">This is how you die</div>
		<div id="jump-cinematic">Click Enter or Press here to skip the cinematic</div>
	</div>`;
const startContent =  `
<button id="btn_start">Press here if you wanna start the game or press enter</button>
`;

function hideContent(){
	menu.style.display ="none";
    logo.style.display ="none";
    music.style.display = "none";
    gameContainer.style.backgroundImage = "none"
};