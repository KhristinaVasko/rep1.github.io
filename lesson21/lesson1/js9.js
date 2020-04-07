let x = prompt("number",' ');
let y = 0;
for(y; x; x = Math.floor(x / 10)) {
    y *= 10;
    y += x % 10;
}
alert(y);
