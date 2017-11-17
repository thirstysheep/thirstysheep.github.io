// JavaScript Document.
window.onload = function(){
  var oTop = document.getElementById("to_top");
  window.onscroll = function(){
    var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
    if (currentScroll > 0) {
         window.requestAnimationFrame(smoothscroll);
         window.scrollTo (0,currentScroll - (currentScroll/5));
    }
  }
  oTop.onclick = function(){
    document.documentElement.scrollTop = document.body.scrollTop =0;
  }
}  


