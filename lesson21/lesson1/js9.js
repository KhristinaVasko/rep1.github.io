const num4 = prompt("Number", 0);
const n14 = num4%10;
const n24 = (num4%100 - n14)/10;
const n34 = (num4 - num4%100)/100;
console.log(n34, n24, n14);