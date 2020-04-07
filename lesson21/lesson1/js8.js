let WholeAmount = prompt("Введіть кількість грошей в кошельку:", ' ');
let ChocolatePrice = prompt("Введіть ціну шоколадки:",' ');
alert("Кількість шоколадок, які можна купити:" + Math.floor(WholeAmount/ChocolatePrice));
alert("Остача грошей:" + WholeAmount % ChocolatePrice);