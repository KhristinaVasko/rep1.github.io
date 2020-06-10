$(document).ready(function(){

  //slider
  $('.slider').slick({
    infinite: true,
    autoplay: true,
    speed: 500,
    arrows: false,
    fade: true,
    cssEase: 'linear',
    dots: false,
  });
  // part of code for counting numbers in block 5
  $(".counter").counterUp({
    delay:10,
    time:1000})
  
});
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}



