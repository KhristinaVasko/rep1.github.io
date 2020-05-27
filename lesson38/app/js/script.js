$(document).ready(function(){
    $('.slider').slick({
        arrows: false,
        autoPlay:true,
        dots:false,
        adaptiveHeight: true,
        autoplay: true,
        speed:1000,
        autolaySpeed: 100,
    }
    
    );
    
}); 
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
