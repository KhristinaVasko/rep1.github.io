let price = prompt("Ввеідть суму покупки", " ");
let SalePrice;
if(price>200 && price<300){
   SalePrice = price -(price * 0.03);
}
else if(price>300 && price<500){
    SalePrice =price -(price * 0.05);
}
else if(price>500){
    SalePrice = price -(price * 0.07);
}
alert("Остаточна сума = " + SalePrice);