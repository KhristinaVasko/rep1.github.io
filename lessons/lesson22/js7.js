let SquareSide = prompt("Введіть сторону квадрата", " ");
let CircleLength = prompt("Введіть довжину кола", " ");

let radius = CircleLength / (2* Math.PI);
if(SquareSide >= 2*radius){
    alert("Коло можна помістити в квадрат в квадрат")
}
else{

    alert("Коло не є вписаним");
}