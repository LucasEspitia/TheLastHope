class Zombies{   
      constructor(x,y,width, height, speed, animFramesDown, animFramesUp, animFramesRight, animFramesLeft, range){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.speed = speed;
        this.direction = 1;
        this.frameCount = 3;
        this.currentFrame = 1;
        this.animationFramesDown = animFramesDown;
        this.animationFramesUp = animFramesUp;
        this.animationFramesLeft = animFramesLeft;
        this.animationFramesRight = animFramesRight; 
        this.range = range;

        this.imageCache = {};
        this.loadImages();
        
        this.ramdomTargetIndex = parseInt(
            Math.random() * ramdomTargetForZombies.length
            );
        setInterval(() => {
             this.changeRamdomDirection();
        }, 1000);    
    
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

    changeRamdomDirection(){
        this.ramdomTargetIndex += 1;
        this.ramdomTargetIndex = this.ramdomTargetIndex % 4;
    } 
 
    moveProcess() {
        if(this.isInRange()){
        this.target = survivor;
        }else{
            this.target = ramdomTargetForZombies[this.ramdomTargetIndex]
        }
         this.changeDirectionIfPossible();
         this.moveForwards();
         if (this.checkCollisions()) {
             this.moveBackwards();
             return;
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

    isInRange() {
        let xDistance = Math.abs(survivor.getMapX() - this.getMapX());
        let yDistance = Math.abs(survivor.getMapY() - this.getMapY());
        if (
            Math.sqrt(xDistance * xDistance + yDistance * yDistance) <=  
            this.range
        ) {
            return true;
        }
        return false;
    }

    changeDirectionIfPossible(){
        let tempDirection = this.direction;
        this.direction = this.calculateNewDirection(
            map,
            parseInt(this.target.x / oneBlockSize),
            parseInt(this.target.y / oneBlockSize)
        );
        if(typeof this.direction == "undefined"){
            this.direction = tempDirection;
            return
        }
    
        this.moveForwards();
        if(this.checkCollisions()){
            this.moveBackwards();
            this.direction = tempDirection;
        }else{
            this.moveBackwards();
        }
    }
    calculateNewDirection(map, destX, destY){
        let mp = [];
        for(let i =0; i<map.length; i++){
            mp[i] = map[i].slice();
        }
        let queue = [{
            x:this.getMapX(),
            y: this.getMapY(),
            moves: []
        }];
        while(queue.length > 0){
            let poped = queue.shift();
            if(poped.x == destX && poped.y == destY){
                return poped.moves[0];
            }else{
                mp[poped.y][poped.x] = 1;
                let neighborList = this.addNeighbors(poped, mp);
                for(let i = 0; i < neighborList.length; i++){
                    queue.push(neighborList[i]);

                }
            }
        }
        return DIRECTION_UP; 
    }
    addNeighbors(poped, mp) {
        let queue = [];
        let numOfRows = mp.length;
        let numOfColumns = mp[0].length;
    
        if (
            poped.x - 1 >= 0 &&
            poped.x - 1 < numOfColumns &&
            mp[poped.y][poped.x - 1] != 1
        ) {
            let tempMoves = poped.moves.slice();
            tempMoves.push(DIRECTION_LEFT);
            queue.push({ x: poped.x - 1, y: poped.y, moves: tempMoves });
        }
        if (
            poped.x + 1 >= 0 &&
            poped.x + 1 < numOfColumns &&
            mp[poped.y][poped.x + 1] != 1
        ) {
            let tempMoves = poped.moves.slice();
            tempMoves.push(DIRECTION_RIGHT);
            queue.push({ x: poped.x + 1, y: poped.y, moves: tempMoves });
        }
        if (
            poped.y - 1 >= 0 &&
            poped.y - 1 < numOfRows &&
            mp[poped.y - 1][poped.x] != 1
        ) {
            let tempMoves = poped.moves.slice();
            tempMoves.push(DIRECTION_UP);
            queue.push({ x: poped.x, y: poped.y - 1, moves: tempMoves });
        }
        if (
            poped.y + 1 >= 0 &&
            poped.y + 1 < numOfRows &&
            mp[poped.y + 1][poped.x] != 1
        ) {
            let tempMoves = poped.moves.slice();
            tempMoves.push(DIRECTION_BOTTOM);
            queue.push({ x: poped.x, y: poped.y + 1, moves: tempMoves });
        }
        return queue;
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

  //This is just ramdom positions in case that th player is out of range...
  let ramdomTargetForZombies = [    
    { x: 1 * oneBlockSize, y: 1 * oneBlockSize },   
    { x: 1 * oneBlockSize, y: (map.length - 2) * oneBlockSize },  
    { x: (map[0].length - 2) * oneBlockSize, y: oneBlockSize },
    {
        x: (map[0].length - 2) * oneBlockSize,
        y: (map.length - 2) * oneBlockSize,
    },
];

