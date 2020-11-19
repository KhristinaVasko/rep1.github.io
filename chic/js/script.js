$(document).ready(function(){
    $('.slider').slick({
        // autoplay: true,
        nextArrow:"<button  class='slick-next pull-right'>Scroll</button>",
        dots: true,
    });
});
// modal window
document.getElementById('button-open').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display ='flex';
    document.querySelector('.slider').style.display ='none';
   
});
document.getElementById('close').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display ='none';
    document.querySelector('.slider').style.display ='block';
});
//open modal fron another button
document.getElementById('button-open1').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display ='flex';
    document.querySelector('.slider').style.display ='block';
});
document.getElementById('close').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display ='none';
});
// burger menu
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }