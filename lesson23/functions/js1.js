// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.
let num1 = prompt("Введіть перше число");
let num2 = prompt("Введіть друге число");
function CheckNumbers(){
    if(num1<num2){
        alert("-1");
    }
    else if(num1>num2){
alert("1")
    }
    else if(num1 == num2){
        alert("0");
    }

}
CheckNumbers();

// 2 - Написать функцию, которая вычисляет факториал переданного ей числа.

function GetFactorial(){
    let n = prompt("Введіть число"," ");
    let result = 1;
    while(n){
        result *= n--;
    }
  alert(result);
}
GetFactorial();

// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.
function GetNumber(){
    let num31  =prompt("Введіть перше число");
    let num32  =prompt("Введіть друге число");
    let num33  =prompt("Введіть третє число");
    let num = num31 + num32 + num33;
    alert(num);
}
GetNumber();

// Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.
function GetSquare(){
    let a = prompt("Введіть ширину прямлкутника");
    let b = prompt("Введіть висоту прямлкутника");
    let value;
    if(a!=b){
    value = a*b;
        alert(value);
    }
    else if(a=b){   
    value = Math.pow(a,2);
    alert(value);
    }
}
GetSquare();

// Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
// Совершенное число – это число, равное сумме всех своих собственных делителей.

let num5 = prompt("Введіть число");

function GetPerfNum(num5) {
    let result = 0;
    for (let i = 1; i < num5; i++) {
        if (num5 % i == 0) {
            // console.log("делители этого числа: ", i);
            result += i;
        }

    };
    if (result == num5) {
        alert(`це досконале число:${num5}`);
    } else
        alert("не є досконалим числом");
}
GetPerfNum(num5);

// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, 
// и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную
//  ранее функцию, чтобы узнавать, совершенное число или нет. 

