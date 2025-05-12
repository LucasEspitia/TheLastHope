creditsBtn.addEventListener("click", () => {
  playEffect(0);
  creditsContainer.innerHTML = creditsContent;
  const backbuttoncre = document.getElementById("back-credits");
  
  creditsContainer.style.display = "block";
  setTimeout(() => {
    creditsContainer.style.opacity = "1";
  }, 100);
  
  //go back 
  backbuttoncre.addEventListener("click", () => {
  playEffect(0);
  creditsContainer.style.opacity = "0";
  setTimeout(() => {
    creditsContainer.style.display = "none";
  }, 500);
  creditsContainer.innerHTML = "";
});    
});
  
  