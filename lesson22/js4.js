let year = prompt("Введіть рік", " ");
if(year%400 == 0 || year%4 == 0 && year%100 !=0 ){
alert("Рік високосний");
}
else{
    alert("Рік не високосний");
}