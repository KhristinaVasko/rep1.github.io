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
  
  //scroll
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
  //cart
  const cartBtn = document.querySelector('.cart-btn');
  const closeCartBtn = document.querySelector('.close-cart');
  const clearCartBtn = document.querySelector('.clear-cart');
  const cartDOM = document.querySelector('.cart');
  const cartOverlay= document.querySelector('.cart-overlay');
  const cartItems= document.querySelector('.cart-items');
  const cartTotal= document.querySelector('.cart-total');
  const cartContent= document.querySelector('.cart-content');
  const productsDOM= document.querySelector('.products-center');
  //
  let cart = [];
  
  //getting products
  class Products{
  async getProducts(){
    try{
      let result = await fetch('products.json');
      let data = await result.json();
      return data;
      return result
    }
    catch (error){
      console.log(error);
    }
   
  }
  }
  // display prod
  class UI {
  
  }
  // local storage
  class Storage{
  
  }
  document.addEventListener("DOMContentLoaded",()=>{
    const ui = newUI();
    const products = new Products();
  
    //get all products
    products.getProducts().then(data => console.log(data));
  })