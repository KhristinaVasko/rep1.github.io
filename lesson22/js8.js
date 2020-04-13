let us = prompt("Введіть суму в доларах"," ");
let valuta = prompt("Введіть бажану валюту(EUR,UAN,AZN)"," ");
if(valuta == "EUR"){
    let outVE = us * 1.09;
    alert("Вихідна сума становить " + outVE)
}
else if(valuta == "UAN"){
    let outVG = us * 0.037;
    alert("Вихідна сума становить " + outVG)
}
else if(valuta == "AZN"){
    let outVA = us * 0.59;
    alert("Вихідна сума становить " + outVA)
}
else{
    alert("Введено хибну валюту");
}

