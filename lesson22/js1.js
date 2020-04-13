let userAge = prompt("your age", " ");
let message = (userAge>0 && userAge<12) ? alert("you're a child") : 
(userAge>12 && userAge<18) ? alert("you're a teenager") : 
(userAge>18 && userAge<60) ? alert("you're an adult") : 
(userAge>60) ?
alert("you're a pensioner") : alert(none);

