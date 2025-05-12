let bgIntervalId = null;
let x = 0;
let isBackgroundActive = true;

const game_container = document.querySelector('#game-container');
const imagesbackground = [
                'Public/Images/page/screen/screen_1.png',
                'Public/Images/page/screen/screen_2.png', 
                'Public/Images/page/screen/screen_3.png', 
                'Public/Images/page/screen/screen_4.png', 
                'Public/Images/page/screen/screen_5.png',
                'Public/Images/page/screen/screen_6.png', 
                'Public/Images/page/screen/screen_7.png',
                'Public/Images/page/screen/screen_8.png',
                ]; 

const preloadedImages = imagesbackground.map(imgSrc => {
  const img = new Image();
  img.src = imgSrc;
  return img;
});


function changeBackgroundImage() {
  if(isBackgroundActive == true){
  game_container.style.backgroundImage = `url(${preloadedImages[x].src})`;
  x++;
  if (x === preloadedImages.length) {
    x = 0;
   }
  }
}
setInterval(changeBackgroundImage, 5000);

function takeoutBackground(){
  if(isBackgroundActive==false){
    game_container.style.backgroundImage = "none";
  }

}
setInterval(takeoutBackground, 60);
