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
// modal window for counting calories
var modal = document.getElementById("myModal");
var btn = document.getElementById("modalbutton");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// counting calories
function counting() {
  var w = document.getElementById("weight").value;
  var h = document.getElementById("height").value;
  var a = document.getElementById("age").value;
  var s = document.getElementById("select");
  if(select='man'){
    var cal = 88.362 + (13.397 * +w) + (4.799 * +h) - (5.677 * +a);
  
  }
  else if(select='woman'){
    var cal = 447.593 + (9.247 * +w) + (3.098 * +h) - (4.33 * +a);
  
  }
  document.getElementById('cal').innerHTML = Math.floor(cal);
 
}
counting();