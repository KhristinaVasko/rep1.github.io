let num5 = prompt("Введіть 5-значне число", " ");
let num51 = num5%10;
let num52 = (num5%100 - num51)/10;
let num53 = (num5%1000 - num51 - (num5%100 - num51))/100;
let num54 = ((num5%10000 - num51 -(num5%100 - num51))-(num5%1000 - num51 - (num5%100 - num51)))/1000;
let num55 = ((num5%100000 - num51 -(num5%100 - num51)) - (num5%1000 - num51 - (num5%100 - num51)) - ((num5%10000 - num51 -(num5%100 - num51))-
(num5%1000 - num51 - (num5%100 - num51))))/10000;
if(num55 == num51 && num52 == num54){
    alert("Число є паліндромом");
}
else{
    alert("Число не є паліндромом");
}
