// Реализовать класс, описывающий окружность.
class Kolo{
    constructor(radius) {
        this.radius = radius;
      }
      get getRadius() {
        return this.radius;
    }

    set setRadius(radius) {
        this.radius = radius;
    }
    
      get diametr() {
        return this.radius*2;
      }

      calcArea() {
      console.log( "Площа кола = " + Math.pow(this.radius,2) * Math.PI);
      }
      calcLength(){
         console.log("Довжина кола = " + Math.PI*this.diametr);
      }
}

const circle = new Kolo(5);

console.log("Радіус кола = " + circle.radius);   
console.log("Діаметр кола = " + circle.diametr);
circle.calcArea();
circle.calcLength();

// Реализовать класс, описывающий простой маркер

class Marker {
  color = 'darkgrey'
  amountInk = 10
  printText(){
      let line1 = prompt("Введіть текст"," ");
      let letter = 0.5;
      var n = line1.length;
      if(n<=this.amountInk*letter){
          console.log("Рядок = " + line1);
      }
      else{
          console.log(line1 + " Чорнилa не вистачить для цього тексту");
      }
  }
  
}
let marker1 = new Marker();
marker1.printText();

// Реализовать класс, описывающий заправляющийся маркер, унаследовав его от простого маркера и добавив метод для заправки маркера.

class FullMarker extends Marker{
   amountInk = 100
  fillMarker(){
   console.log(`Маркер заправлений на ${this.amountInk} %`);
  }
}
let markerf2 = new FullMarker;
markerf2.fillMarker();





