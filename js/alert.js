var SkatchAlertClose = document.querySelectorAll(".AlertClose");

for(var i=0;i<SkatchAlertClose.length;i++){
SkatchAlertClose[i].addEventListener("click",function(e){
    this.parentElement.style.display="none";
});
}