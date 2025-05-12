const spriteSheet = new Image();
spriteSheet.src = "../Public/Images/videogame/frames/points.png";

const spriteWidth = 15;
const spriteHeight = 15;

function drawSprite(x, y, frame) {
    canvasContext.drawImage(
        spriteSheet,
        frame * spriteWidth,
        0,
        spriteWidth,
        spriteHeight,
        x,
        y,
        spriteWidth,
        spriteHeight
    );
}

let frameIndex = 0;

setInterval(() => {
    frameIndex = (frameIndex + 1) % 8;
  }, 90);

function drawFoods() {
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if (map[i][j] == 2) {
                drawSprite(j * oneBlockSize + oneBlockSize / 3, i * oneBlockSize + oneBlockSize / 3, frameIndex);
            }
        }
    }
}
function resetPoints(){
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map[0].length; j++) {
            if(map[i][j] ==  4){
                    map[i][j] = 2;
             }
        }
    }
 }

/* function getlife(){
    let helpPoints = count     

}  */
    