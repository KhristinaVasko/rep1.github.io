//slider
// $(document).ready(function(){
//     $('.slider').slick({
//         autoplay: true,
//         nextArrow:"<button  class='slick-next pull-right'>Scroll</button>",
//         dots: true
     
//     });
// })
$(document).ready(function(){
    $('.slider').slick({
        nextArrow:"<button  class='slick-next pull-right'>Scroll</button>",
        dots: true
    });
});

// styles for clickable language
$(function() {
    $(".header__lang-list-item").on("click", function(e) {
        $(this).addClass("active").siblings().removeClass("active");
    });
})

// burger menu
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    document.getElementById("burg-icon").style.display = "none";
    document.getElementById("burg-close").style.display = "block";

  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("burg-icon").style.display = "block";
    document.getElementById("burg-close").style.display = "none";
  }

  function chngimg() {
    var img = document.getElementById('imgplus').src;
    if (img.src.indexOf('img/icons/hamburger.svg')!=-1) {
        document.getElementById('imgplus').src  = 'img/icons/close.svg';
    }
     else {
       document.getElementById('imgplus').src = 'img/icons/hamburger.svg';
   }

}

// styles for clickable language in burger menu
$(function() {
    $(".burg-lang-list-item").on("click", function(e) {
        $(this).addClass("active").siblings().removeClass("active");
    });
})
// modal
document.getElementById('button-open').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display ='flex';
});
document.getElementById('close').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display ='none';
});

document.getElementById('button-open1').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display ='flex';
   
});
document.getElementById('close').addEventListener('click', 
function() {
    document.querySelector('.bg-modal').style.display ='none';
});