var cart ={};
$.getJSON('../goods.json', function(data){
    var goods = data;
   // console.log(goods);
   CheckCart();
   console.log(cart);
showCart();

   function showCart(){
       if($.isEmptyObject(cart)){
           var out ='The basket is empty. Add ptoduct ';
 $('#my-cart').html(out);
       }
       else{

       
       var out ='';
       for(var key in cart){
        
           out+= '<button class="delete" data-art="'+key+'">x</button>';
           out+= '<img src="'+goods[key].image+'" padding-top="30px" max-width="300px">';
           out+= goods[key].name;
           out+= '<button class="minus" data-art="'+key+'">-</button>';
           out+= cart[key];
           out+= '<button class="plus" data-art="'+key+'">+</button>';
           out+= cart[key]*goods[key].cost;
           out += '<br>';
         
          


       }
$('#my-cart').html(out);
       $('.plus').on('click', plusGoods);
       $('.minus').on('click', minusGoods);
       $('.delete').on('click', deleteGoods);
    }
   }
 
   function plusGoods(){
       var articul = $(this).attr('data-art');
       cart[articul]++;
       cart[articul]++;
       showCart();

   }
   function minusGoods(){
    var articul = $(this).attr('data-art');
   delete cart[articul];
   saveCartToLS();
    showCart();

}

function deleteGoods(){
    var articul = $(this).attr('data-art');
    if(cart[articul]>1) {cart[articul]--;}
    else {delete cart[articul];   }
    saveCartToLS();
    showCart();

}
});

function CheckCart(){
    if(localStorage.getItem('cart')!=null){
      cart=  JSON.parse(localStorage.getItem('cart'));
    }
  }
  function saveCartToLS(){
localStorage.setItem('cart', JSON.stringify(cart));
  }
