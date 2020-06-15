let carts = document.querySelectorAll('.product-card-add');
let products = [
    {
        name: 'Fresh banana',
        tag: 'banana',
        price: 6.25,
        inCart: 0 
    },
    {
        name: 'Fresh Red Seedless',
        tag: 'seedless',
        price: 8.15,
        inCart: 0 
    },
    {
        name: 'Organic Cucumber',
        tag: 'cucumber',
        price: 6.12,
        inCart: 0 
    },
    {
        name: 'Green Bell Pepper',
        tag: 'pepper',
        price: 3.35,
        inCart: 0 
    },
    {
        name: 'Green Cabbage',
        tag: 'cabbage',
        price: 6.25,
        inCart: 0 
    },
    {
        name: 'Organic Carrot',
        tag: 'carrot',
        price: 6.12,
        inCart: 0 
    },
    {
        name: 'Organic Sweet Corn',
        tag: 'corn',
        price: 6.12,
        inCart: 0 
    },
    {
        name: 'Sugar Snap Peas',
        tag: 'peas',
        price: 6.12,
        inCart: 0 
    },
    {
        name: 'Red Apple',
        tag: 'apple',
        price: 2.99,
        inCart: 0 
    },
    {
        name: 'Straberry',
        tag: 'straberry',
        price: 1.99,
        inCart: 0 
    },
    {
        name: 'Straberry Jam',
        tag: 'jam1',
        price: 9.99,
        inCart: 0 
    },
    {
        name: 'Cherry Jam',
        tag: 'jam2',
        price: 9.99,
        inCart: 0 
    }
];
for(i=0; i<carts.length; i++){
   carts[i].addEventListener('click', () => {
       products.forEach(cartNumbers());
    // cartNumbers(products[i]);
   })
}
function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    if(productNumbers){
       document.querySelector('.basket span').textContent = productNumbers;
    }
}

function cartNumbers(product){
    
    console.log("the product is", product);
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
    localStorage.setItem('cartNumbers', productNumbers + 1);
     document.querySelector('.basket span').textContent = productNumbers + 1;
    }else{
        localStorage.setItem('cartNumbers', 1);
         document.querySelector('.basket span').textContent = 1;
    }
}

onLoadCartNumbers();

