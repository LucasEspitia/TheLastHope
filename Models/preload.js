function preLoadImages() {
    const images = [
      "../Public/Images/page/design/animation.png",
      "../Public/Images/page/design/copyright.png",
      "../Public/Images/page/design/death.png",
      "../Public/Images/page/design/Dog.png", 
      "../Public/Images/page/design/movement.png", 
      "../Public/Images/page/design/points.png",
      "../Public/Images/page/design/shoot.png",
      "../Public/Images/page/design/walls.png",
      "../Public/Images/page/design/wolf_back.png",
      "../Public/Images/page/design/wolf_front.png",
      "../Public/Images/page/design/wood-1700562_640.jpg",
      "../Public/Images/page/design/wood.png",
      "../Public/Images/page/design/Zombie3_left.png",   
      "../Public/Images/page/vector/left-btn.png", 
      "../Public/Images/page/logos/email.png",
      "../Public/Images/page/logos/facebook.png",
      "../Public/Images/page/logos/Instagram.png",
      "../Public/Images/page/logos/logo_game.png",
      "../Public/Images/page/logos/logo.png",
      "../Public/Images/page/logos/whatsapp.png",
      "../Public/Images/page/vector/health.png",
      "../Public/Images/page/vector/left-btn.png",
      "../Public/Images/page/vector/right-btn.png",
      "../Public/Images/page/vector/setting.png",
      "../Public/Images/page/vector/volume_off.png",
      "../Public/Images/page/vector/volume_on.png",
      "../Public/Images/videogame/frames/points.png"      
    ];
  
    for (let i = 0; i < images.length; i++) {
      const img = new Image();
      img.src = images[i];
    }
  };