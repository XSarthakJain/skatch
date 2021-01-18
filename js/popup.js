var openPopup = document.getElementsByClassName("open-popup-btn");
var closePopup = document.getElementsByClassName("dismiss-popup-btn");

for (var iter = 0; iter < closePopup.length; iter++) {
closePopup[iter].addEventListener("click",function(e){
    this.parentNode.parentNode.classList.remove("SkatchPopupactive");
});}


for (var i = 0; i < closePopup.length; i++) {
openPopup[i].addEventListener("click",function(e){
  document.getElementById(this.getAttribute('popup-target')).classList.add("SkatchPopupactive");
});
} 