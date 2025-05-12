/*Generals screen variables*/
const gameContainer = document.getElementById("game-container");
const menu =  document.getElementById("menu-container");
const logo=  document.getElementById("logo");
const music=  document.getElementById("music-player");

/*Canvas*/

const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");
const canvas2 = document.getElementById("panel_canvas");
const canvasCtx = canvas2.getContext("2d");

/*Canvas size*/

canvas.width = 630;
canvas.height = 690;
canvas2.width = 690;
canvas2.height = 90;
/*Help canvas*/

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const canvas2Width = canvas2.width;
const canvas2Height = canvas2.height;

                    /*Variables*/

/*Start Game*/
const start = document.getElementById("start");
const start_button = document.getElementById("start_button");
/*Cinematics*/

const btnCine = document.getElementById("play-btn");
const contCine = document.getElementById("cinematics-container");
let gameRunning = false;

/*Tutorial*/

const tutorialBtn = document.getElementById("tutorial-btn");
const tutorialCont = document.getElementById("tutorial-container");

/*Settings*/

const optionsMenuContainer = document.querySelector('#options-menu-container');
const settingsButton = document.querySelector('#settings');
const goMenuButton = document.getElementById("go_menu_btn");

/*Levels*/

const levelsBtn = document.getElementById("levels-btn");
const levelCnt = document.getElementById("levels-container");
let levelinprogress = 1;

/*Credits*/

const creditsBtn = document.getElementById("credits-btn");
const creditsContainer = document.getElementById("credits-container");

/*Music*/

const soundPanel = document.getElementById('sound-panel');
const musicToggle = document.getElementById('music-toggle');
const effectsToggle = document.getElementById('effects-toggle');
const audioPlayer = document.getElementById('audio-player');
const soundBton = document.getElementById('music-bck');
const playButton = document.getElementById('btn-open-container');
let currentTrackIndex;
let isFirstPlay = true;
let isMusicOn = false;
let isEffectsOn = true;
/*Start screen*/

const panelStart = document.getElementById('gamescreen_start');
let isStartGame = false;

/*Game*/
const DIRECTION_RIGHT = 4;
const DIRECTION_UP = 3;
const DIRECTION_LEFT = 2;
const DIRECTION_BOTTOM = 1;
let oneBlockSize = 30;
let wallSpaceWidth = oneBlockSize / 1.2;
let wallOffset = (oneBlockSize - wallSpaceWidth) / 2;
let wallInnerColor = "black";
let fps = 30;
let foodcount = 171;   //172
let foodeaten = 0;
let lives = 3;
let zombiesArray = [];
let score = 0;
let gameInterval;
/*Win*/
const winAnimation = document.querySelector('#win-animation');
let isgameWin = false;
/*Zombies*/
let zombie_1;
let zombie_2;
let zombie_3;
let zombie_4;
let zombie_5;
const level1 = {
  zombie1: {
    speed: oneBlockSize/10,
    range: 20
  },
  zombie2: {
    speed: oneBlockSize/15,
    range: 12
  },
  zombie3: {
    speed: oneBlockSize/12,
    range: 12
  },
  zombie4: {
    speed: oneBlockSize/16,
    range: 20
  }
};

const level2 = {
  zombie1: {
    speed: oneBlockSize/10,
    range: 10
  },
  zombie2: {
    speed: oneBlockSize/12,
    range: 15
  },
  zombie3: {
    speed: oneBlockSize/15,
    range: 14
  },
  zombie4: {
    speed: oneBlockSize/9,
    range: 15
  }
};
const level3 = {
  zombie1: {
    speed: oneBlockSize/8,
    range: 20
  },
  zombie2: {
    speed: oneBlockSize/10,
    range: 20
  },
  zombie3: {
    speed: oneBlockSize/12,
    range: 10
  },
  zombie4: {
    speed: oneBlockSize/9,
    range: 20
  }

};

/*Gameover*/
let hasDisplayedStartScreen = false;
let bestScore = localStorage.getItem("bestScore");

if(!bestScore){
  bestScore = 0;
}
bestScore = parseInt(bestScore);

                /*Music and Images as variables*/
/*Tracks and effects*/

const audioGameOver = new Audio("../Public/Sounds/music/gameover/gameover.mp3");
const audioCinematics = new Audio("../Public/Sounds/music/cinematics/cinematic.mp3");
const audiogameWin = new Audio("../Public/Sounds/music/Winning/Medicine.mp3")
const tracks = [
    "../Public/Sounds/music/ingame/song1.mp3",
    "../Public/Sounds/music/ingame/song2.mp3",
    "../Public/Sounds/music/ingame/song3.mp3",
    "../Public/Sounds/music/ingame/song4.mp3",
    "../Public/Sounds/music/ingame/song5.mp3",
    "../Public/Sounds/music/ingame/song6.mp3",
    "../Public/Sounds/music/ingame/song7.mp3",
    "../Public/Sounds/music/gameover/cinematic-dramatic-11120.mp3" 
   ];
   
  const effects = [
    "../Public/Sounds/effects/click.mp3",
    "../Public/Sounds/effects/picked.mp3",
    "../Public/Sounds/effects/bite.ogg",
    "../Public/Sounds/effects/collision.mp3",
    "../Public/Sounds/effects/life_get.mp3"
  ];

/*Zombies images*/
//Frames zombie_1
const zombie_1_up = [
  '../Public/Images/videogame/frames/zombies/Zombie_1_up1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_1_up2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_1_up3.png'
];
const zombie_1_down = [
  '../Public/Images/videogame/frames/zombies/Zombie_1_down1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_1_down2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_1_down3.png'
];
const zombie_1_right = [
  '../Public/Images/videogame/frames/zombies/Zombie_1_right1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_1_right2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_1_right3.png'
];
const zombie_1_left= [
  '../Public/Images/videogame/frames/zombies/Zombie_1_left1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_1_left2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_1_left3.png'
];
//Frames zombie_2
const zombie_2_up = [
  '../Public/Images/videogame/frames/zombies/Zombie_2_up1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_2_up2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_2_up3.png'
];
const zombie_2_down = [
  '../Public/Images/videogame/frames/zombies/Zombie_2_down1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_2_down2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_2_down3.png'
];
const zombie_2_right = [
  '../Public/Images/videogame/frames/zombies/Zombie_2_right1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_2_right2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_2_right3.png'
];
const zombie_2_left= [
  '../Public/Images/videogame/frames/zombies/Zombie_2_left1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_2_left2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_2_left3.png'
];
//Frames zombie 3
const zombie_3_up = [
  '../Public/Images/videogame/frames/zombies/Zombie_3_up1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_3_up2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_3_up3.png'
];
const zombie_3_down = [
  '../Public/Images/videogame/frames/zombies/Zombie_3_down1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_3_down2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_3_down3.png'
];
const zombie_3_right = [
  '../Public/Images/videogame/frames/zombies/Zombie_3_right1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_3_right2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_3_right3.png'
];
const zombie_3_left= [
  '../Public/Images/videogame/frames/zombies/Zombie_3_left1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_3_left2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_3_left3.png'
];
//Frames zombie 4
const zombie_4_up = [
  '../Public/Images/videogame/frames/zombies/Zombie_4_up1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_4_up2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_4_up3.png'
];
const zombie_4_down = [
  '../Public/Images/videogame/frames/zombies/Zombie_4_down1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_4_down2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_4_down3.png'
];
const zombie_4_right = [
  '../Public/Images/videogame/frames/zombies/Zombie_4_right1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_4_right2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_4_right3.png'
];
const zombie_4_left= [
  '../Public/Images/videogame/frames/zombies/Zombie_4_left1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_4_left2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_4_left3.png'
];

//Frames zombie 5
const zombie_5_up = [
  '../Public/Images/videogame/frames/zombies/Zombie_5_up1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_5_up2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_5_up3.png'
];
const zombie_5_down = [
  '../Public/Images/videogame/frames/zombies/Zombie_5_down1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_5_down2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_5_down3.png'
];
const zombie_5_right = [
  '../Public/Images/videogame/frames/zombies/Zombie_5_right1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_5_right2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_5_right3.png'
];
const zombie_5_left= [
  '../Public/Images/videogame/frames/zombies/Zombie_5_left1.png',
  '../Public/Images/videogame/frames/zombies/Zombie_5_left2.png',
  '../Public/Images/videogame/frames/zombies/Zombie_5_left3.png'
];
/*Survivor Frames */
const animationFramesRight = [
  '../Public/Images/videogame/frames/survivor/purple_right_frames1.png',
  '../Public/Images/videogame/frames/survivor/purple_right_frames2.png',
  '../Public/Images/videogame/frames/survivor/purple_right_frames3.png',
  ];

const animationFramesDown = [
  '../Public/Images/videogame/frames/survivor/purple_down_frames1.png',
  '../Public/Images/videogame/frames/survivor/purple_down_frames2.png',
  '../Public/Images/videogame/frames/survivor/purple_down_frames3.png'
 ];
const animationFramesUp = [
  '../Public/Images/videogame/frames/survivor/purple_up_frames1.png',
  '../Public/Images/videogame/frames/survivor/purple_up_frames2.png',
  '../Public/Images/videogame/frames/survivor/purple_up_frames3.png'
 ];
const animationFramesLeft = [
  '../Public/Images/videogame/frames/survivor/purple_left_frames1.png',
  '../Public/Images/videogame/frames/survivor/purple_left_frames2.png',
  '../Public/Images/videogame/frames/survivor/purple_left_frames3.png'
 ];