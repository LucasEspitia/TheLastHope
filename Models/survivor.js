class Survivor{     
     constructor(x,y,width, height, speed, animFramesDown, animFramesUp, animFramesRight, animFramesLeft){
         this.x = x;
         this.y = y;
         this.width = width;
         this.height = height;
         this.speed = speed;
         this.direction = 1;
         this.nextDirection = this.direction;
         this.frameCount = 3;
         this.currentFrame = 1;
         this.currentAnimationFrames = this.animationFramesDown;
         this.animationFramesDown = animFramesDown;
         this.animationFramesUp = animFramesUp;
         this.animationFramesLeft = animFramesLeft;
         this.animationFramesRight = animFramesRight; 
 
         this.imageCache = {};
         this.loadImages();
 
         setInterval(() => {
             this.changeAnimation();
         }, 200);
     }
 
     loadImages() {
         const allFrames = [
           ...this.animationFramesRight,
           ...this.animationFramesDown,
           ...this.animationFramesUp,
           ...this.animationFramesLeft,
         ];
     
         allFrames.forEach((frame) => {
           const img = new Image();
           img.src = frame;
           this.imageCache[frame] = img;
         });
       }
 
     moveProcess() {
         this.changeDirectionIfPossible();
         this.moveForwards();
         if (this.checkCollisions()) {
             this.moveBackwards();
             return;
         }
     }
     getPoints(){
     for (let i = 0; i < map.length; i++) {
         for (let j = 0; j < map[0].length; j++) {
             if(map[i][j] == 2 && 
                  this.getMapX() == j &&
                   this.getMapY() == i
                 ){
                     playEffect(1);
                     map[i][j] = 4;
                     score += 10;
                     foodeaten++;
                 }
             }
         }
     }
     getlife(){
        for (let i = 0; i < map.length; i++) {
            for (let j = 0; j < map[0].length; j++) {
                if(map[i][j] == 5 && 
                     this.getMapX() == j &&
                      this.getMapY() == i
                    ){
                        playEffect(3);
                        map[i][j] = 4;
                        lives++;
                    }
                }
            }
        }
     moveBackwards() {
         switch (this.direction) {
             case DIRECTION_RIGHT: // Right
                 this.x -= this.speed;
                 break;
             case DIRECTION_UP: // Up
                 this.y += this.speed;
                 break;
             case DIRECTION_LEFT: // Left
                 this.x += this.speed;
                 break;
             case DIRECTION_BOTTOM: // Bottom
                 this.y -= this.speed;
                 break;
         }
     }
      moveForwards() {
         switch (this.direction) {
             case DIRECTION_RIGHT: // Right
                 this.x += this.speed;
                 break;
             case DIRECTION_UP: // Up
                 this.y -= this.speed;
                 break;
             case DIRECTION_LEFT: // Left
                 this.x -= this.speed;
                 break;
             case DIRECTION_BOTTOM: // Bottom
                 this.y += this.speed;
                 break;
         }
     }
 
     checkCollisions() {
         let isCollided = false;
         if (
             map[parseInt(this.y / oneBlockSize)][
                 parseInt(this.x / oneBlockSize)
             ] == 1 ||
             map[parseInt(this.y / oneBlockSize + 0.9999)][
                 parseInt(this.x / oneBlockSize)
             ] == 1 ||
             map[parseInt(this.y / oneBlockSize)][
                 parseInt(this.x / oneBlockSize + 0.9999)
             ] == 1 ||
             map[parseInt(this.y / oneBlockSize + 0.9999)][
                 parseInt(this.x / oneBlockSize + 0.9999)
             ] == 1
         ) {
             isCollided = true;
         }
         return isCollided;
     }
 
     checkBounds = () => {
     if (survivor.x > canvasWidth) {
         survivor.x = 0;
     } else if (survivor.x < 0) {
         survivor.x = canvasWidth;
     } else if (survivor.y > canvasHeight) {
         survivor.y = 0;
     } else if (survivor.y < 0) {
         survivor.y = canvasHeight;
     }
 };
 
     checkZombieCollision(){
         for(let i = 0; i<zombiesArray.length; i++){
             let zombies = zombiesArray[i];
             if(
                 zombies.getMapX() == this.getMapX() &&
                 zombies.getMapY() == this.getMapY()
             ){
                 //console.log("hit");
                 return true
             }
         }
         return false
     }
     changeDirectionIfPossible(){
         if(this.direction == this.nextDirection) return;
 
         let tempDirection = this.direction;
         this.direction = this.nextDirection;
         this.moveForwards();
         if(this.checkCollisions()){
             this.moveBackwards();
             this.direction = tempDirection;
         }else{
             this.moveBackwards();
         }
     }
     changeAnimation() {
         this.currentFrame = (this.currentFrame + 1) % this.frameCount;
     }
     changeAnimationFrames() {
         switch (this.direction) {
           case DIRECTION_RIGHT:
             this.currentAnimationFrames = this.animationFramesRight;
             break;
           case DIRECTION_BOTTOM:
             this.currentAnimationFrames = this.animationFramesDown;
             break;
           case DIRECTION_LEFT:
             this.currentAnimationFrames = this.animationFramesLeft;
             break;
           case DIRECTION_UP:
             this.currentAnimationFrames = this.animationFramesUp;
             break;
         }
       }
 
       draw(){
         canvasContext.save()
         canvasContext.translate(
             this.x + oneBlockSize/2, 
             this.y + oneBlockSize/2
         );
         canvasContext.translate(
             -this.x - oneBlockSize/2, 
             -this.y - oneBlockSize/2
         );
         this.changeAnimationFrames();
         this.checkBounds();
         
         const img = this.imageCache[this.currentAnimationFrames[this.currentFrame]];
 
         canvasContext.drawImage(
             img,
             0,
             0, 
             oneBlockSize,
             oneBlockSize,
             this.x, 
             this.y,
             this.width,
             this.height
         );
         canvasContext.restore();
     }
          
 
     getMapX(){
         return parseInt(this.x/oneBlockSize);
     }
     getMapY(){
         return parseInt(this.y/oneBlockSize);
     }
     getMapXRighSide(){
         return parseInt((this.x * 0.9999/oneBlockSize)/oneBlockSize);
     }
     getMapYRighSide(){
         return parseInt((this.y * 0.9999/oneBlockSize)/oneBlockSize);
     }
  }

