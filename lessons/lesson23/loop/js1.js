// Подсчитать сумму всех чисел в заданном пользователем диапазоне.
var num1 = Number(prompt("Введіть перше число з діапазону", " "));
var num2 = Number(prompt("Введіть останє число з діапазону", " "));

let sum1 = 0;
for (var i = num1; i <= num2; i++) {
   sum1 += i;
}
console.log(sum1);

// просить 2 числа и найти только наибольший общий делитель.
let x = prompt("Введіть перше число", " ");
let y = prompt("Введіть друге число", " ");
function DIL (x, y) {
	if (y > x) return DIL(y, x);
	if (!y) return x;
	return DIL(y, x % y);
}
alert(DIL(x,y));


// Запросить у пользователя число и вывести все делители этого числа.

let num3 = Number(prompt("Введіть число"," "));

outer: for(i=0;i<num3;i++){
  
    if(num3%i == 0){
        console.log("Дільник " + i);
    }
    
}
// пределить количество цифр в введенном числе.
// let n= prompt("Введіть число"," ")
function countDigits(n) {
   for(var i = 0; n > 1; i++) {
      n /= 10;
   }
   return i;
}
var num = prompt("Введіть число", " ");
console.log('В числі %s знаків', countDigits(num));

// циклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести 
// результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.

let num61 = Number(prompt("Введіть перше число", " "));
let num62 = Number(prompt("Введіть друге число", " "));
let symbol = prompt("Введіть знак");
 while(true){
 switch(symbol){
    case '+':{
    alert(num61 + num62);
    }
    case '-':{
        alert(num61-num62);
        break;
    }
    case '*':{
        alert(num61*num62);
        break;
    }
    case '/':{
        alert(num61/num62);
        break;
    }
  
}}

// Запросить у пользователя число и на сколько цифр его сдвинуть.
//  Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).
let num7 = prompt("Введіть число")
let count = prompt('Введите число','2'),
    arr = num7.split``;
 
for(let i = 0; i < +count; i++) arr.push(arr.shift());
alert(arr.join``);

// Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.
var dayName = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
while(true){
for (var i = 0; i < dayName.length; i++) {
    alert(dayName[i]);
 }

}
// Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.
for (var i = 2; i <= 10; i++) {
   for (let j = 1; j <= 10; j++) {
       console.log(`${i}*${j}=${i * j}`);
   }
}