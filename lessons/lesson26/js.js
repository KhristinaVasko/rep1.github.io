// Создать объект, описывающий автомобиль
let car = {
    producer: "Honda",
    model: "accord",
    releaseYear:"2017",
    avarageSpeed: 120,
    output: function(){
      console.log('Інфо:\n' + this.producer + "\n" + this.model+ "\n" + this.releaseYear+ "\n" + this.avarageSpeed);
    },
    distanceTime: function(){
        let distance = prompt("Введіть вістань, км", " ");
        let time = distance/this.avarageSpeed;
        let t = time%4 ==0;
        if (time >= t) {
            rest = 1;
            timeAll = time + rest;
            console.log("Час для пройдення дистанції: " + timeAll + " год");
        }
        else{
            console.log("Час для пройдення дистанції: " + time + " год");
        }
    }  
}
car.output()
car.distanceTime()

// Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: 
let MathActions = {
    numerator1: 4,
    denominator1: 5,
    numerator2: 7,
    denominator2: 10,
    
    add: function(){
      let firstDrib = this.numerator1 / this.denominator1;
      let secondDrib = this.numerator2 / this.denominator2;
      let res1 = firstDrib+secondDrib
      console.log(`додавання:` + res1); 
    },
    multiply: function(){
      let num4= this.numerator1*this.numerator2;
      let den4 = this.denominator1* this.denominator2;
      res2 = num4/den4;
      console.log("множення: " + res2);
    },
    diff: function(){
      let firstDrib3 = this.numerator1 / this.denominator1;
      let secondDrib3 = this.numerator2 / this.denominator2;
      let res3 = firstDrib3-secondDrib3;
      console.log(`віднімання:` + res3.toFixed(3)); 
    },
    division: function(){
      let num5 = this.numerator1*this.denominator2;
      let den5 = this.numerator2*this.denominator1;
      let res5 = num5/den5;
      console.log("Віднімання: " + res5);
    }
}
MathActions.multiply()
MathActions.add()
MathActions.diff()
MathActions.division()

// Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: 

let dataTime = {
  hours: "00",
  minutes: "00",
  seconds: "00",
  // Функция вывода времени на экран;
  outputTime: function(){
    console.log(`Час: ${this.hours} : ${this.minutes} : ${this.seconds}`);
  },
  // Функция изменения времени на переданное количество секунд;
  ChanheSecond: function(){
   
 let changeS =prompt("Введіть число, на скільки зміняться секунди"," ");

if(changeS>=60){
      this.minutes++;
      this.seconds=changeS-60;
      console.log(`змінений час: ${this.hours} : 0${this.minutes} : 0${this.seconds}`);
    }
    else{
      this.seconds=changeS;
      console.log(`змінений час: ${this.hours} : ${this.minutes} : ${this.seconds}`);
    }
  
},

}
dataTime.outputTime()
dataTime.ChanheSecond()