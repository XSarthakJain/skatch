var menuIcon = document.querySelector("#HeaderMenuicon");
var menuItems = document.querySelector(".menuItems");
menuIcon.addEventListener("click",function(e){
    menuItems.classList.toggle('HeaderMenushow');
});


// Second Header
var leftHeaderMenu = document.querySelector("#LeftHeaderMenuicon");
var SlidindMenu = document.querySelector(".leftHeaderMenuOptions");
leftHeaderMenu.addEventListener("click",function(e){
    SlidindMenu.classList.toggle("leftSlidingMenuShow");
});