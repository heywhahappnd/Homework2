'use strict';

function Car(name, year, color, mileage, fuel) {
	this.name = name,
	this.year = year,
	this.color = color,
	this.mileage = mileage,
	this.fuel = fuel,

	this.accelerationOn = function() {
    
    if(this.fuel > 0) {
      this.isAccelerated = true;
    } else {
      console.log("Заправьте автомобиль")
    }
  },
  this.startMoving = function() {

    if(this.isAccelerated) {
      this.fuel -= 20;
      this.mileage += 5;
      console.log(`Машина ${this.brand} марки ${this.color} цвета поехала!`)
    } else {
      console.log("Включите сначала зажигание.")
    }
  },
  this.stopMoving = function() {

   if(this.isAccelerated) {
     this.isAccelerated = false;
     console.log("Машинка остановилась");
   } else {
     console.log("Зажигание и так выключено")
   }
  },
  this.refueling = function() {
    this.fuel = 100;
  }
}

const Suzuki = new Car("Suzuki", 2017, "Blue", 50, 0);
console.log(Suzuki);
const Lada = new Car("Lada", 2005, "Black", 150, 100);
console.log(Lada); 