let question1 = prompt("Столиця Італії","1-Рим,2-Сеул,3-Мадрид");
let question2 = prompt("Найдовша річка світу","1-Ніл,2-Амазонка,3-Дніпро");
let question3 = prompt("Найбільший океан світу","1-Тихий,2-Південний,3-Атлантичний");

if(question1 ==1 && question2 == 2 && question3 == 1){
    alert("Всі відповіді правильні. Нараховано 6 балів");
}
else if((question1 !=1 && question2 == 2 && question3 == 1)|| (question1 ==1 && question2 != 2 && question3 == 1) || (question1 ==1 && question2 == 2 && question3 != 1)){
    alert("Одна відповідь неправильна. Нараховано 4 бали")
}
else if(question1 !=1 && question2 != 2 && question3 != 1){
    alert("Жодної правильної відповіді. Нараїовано 0 балів");
}