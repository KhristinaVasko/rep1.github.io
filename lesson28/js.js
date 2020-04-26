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


