

var cart ={}; 
$('document').ready(function(){
  loadGoods();
  CheckCart();
  showMiniCart();
});
function loadGoods(){
  $.getJSON('../goods.json', function(data){
    //console.log(data);
    var out = '';
    for(var key in data){
      out+='<div class="product-item">';
      out+='<img src="../'+data[key].image+'">';
      out+='<h3>'+data[key]['name']+'</h3>';
      out+='<p>Price '+data[key]['cost']+'</p>';
      out+='<button class="add-to-cart" data-art="'+key+'">Add to cart</button>';
      out+='</div>';
    }
    $('#goods').html(out);
    $('button.add-to-cart').on('click', addToCard); 
  })
}
function addToCard(){
  let articul = $(this).attr('data-art');
  if(cart[articul]!=undefined){
    cart[articul]++;
  }
  else{
    cart[articul] =1;
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log(cart);
  showMiniCart();

}
function CheckCart(){
  if(localStorage.getItem('cart')!=null){
    cart=  JSON.parse(localStorage.getItem('cart'));

  }
}
CheckCart();
function showMiniCart(){
  var out ='';

  $('#mini-cart').html(out);
}