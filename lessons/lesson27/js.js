
let fruits = [
    {name: "Orange", price: 120, bought: false,amount: 1},
    {name:"Banana",price: 340, bought: true,amount: 1},
    {name:"Kiwi", price:240, bought:false,amount: 1},
    ];

    // сортуєм масив (некуплені продукти виводяться спочатку)
    fruits.sort(function (a, b) {
        return a.bought - b.bought;
    })
    console.log(fruits);
    
    