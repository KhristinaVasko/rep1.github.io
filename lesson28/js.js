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

// Реализовать класс Employee, описывающий работника, и создать массив работников банка

class Employee{
  constructor(name, position, age){
    this.name = name;
    this.position = position;
    this.age = age;
  }
  
}
let emp1 = new Employee('Nina','meneger',25);
let emp2 = new Employee('Olga','administrator',24);
let emp3 = new Employee('Mykola','support',23);
let arr = [emp1,emp2,emp3];
console.log(arr);

class EmpTable {
  constructor(Empl) {
      this.arr = Empl

  }
  getHtml() {
      document.write(`<table > <thead>
      <tr>
          <th>Name</th>
          <th> Position</th>
          <th>Age</th>
      </tr>
  </thead>
  <tbody>`)
      for (let i of this.arr) {
          document.write(`   <tr  >
          <td> ${i.name}</td>
          <td>${i.position}</td>
          <td> ${i.age}</td>
      </tr>`)
      }
      document.write(` </tbody>
      </table>`)
  }
}

let Abank = new EmpTable(arr);
Abank.getHtml();

