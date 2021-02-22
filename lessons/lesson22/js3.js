let number = prompt("Введіть 3-значне число", " ");
let num1 = number%10;
let num2 = (number%100-num1)/10;
let num3 = (number-number%100)/100;

if(num1 == num2 || num1 == num3 || num2 == num3){
    alert("Число має однакові цифри");
}
else{
    alert("Всі цифри числа різні");
}
