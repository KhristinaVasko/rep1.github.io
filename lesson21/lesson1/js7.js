let WholeVolume = prompt("Введіть об'єм пам'яті на флешці, Гб", ' ');
let MbInGb = 1024;
alert("Вміститься файлів:" + Math.floor(WholeVolume * MbInGb /820));