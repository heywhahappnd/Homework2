'use strict';

function Car(brand, year, color, mileage, fuel) {
	this.brand = brand;
	this.year = year;
	this.color = color;
	this.mileage = mileage;
	this.fuel = fuel;
  this.isAccelerated = false;
}

Car.prototype = {
  accelerationOn: function() {
    if(this.fuel > 0) {
      this.isAccelerated = true;
    } else {
      console.log("Заправьте автомобиль")
    }
  },
  startMoving: function() {
    if(this.isAccelerated) {
      this.fuel -= 20;
      this.mileage += 5;
      console.log(`Машина ${this.brand} марки ${this.color} цвета поехала!`)
    } else {
      console.log("Включите сначала зажигание.")
    }
  },
  stopMoving: function() {
    if(this.isAccelerated) {
     this.isAccelerated = false;
     console.log("Машинка остановилась");
   } else {
     console.log("Зажигание и так выключено")
   }
  },
  refueling: function() {
    this.fuel = 100;
  }  
}


console.log(Car.prototype);

const Suzuki = new Car("Suzuki", 2017, "Blue", 50, 0);
console.log(Suzuki);

Suzuki.accelerationOn();
Suzuki.stopMoving();

const Lada = new Car("Lada", 2005, "Black", 150, 100);
console.log(Lada);

Lada.stopMoving();
Lada.accelerationOn();
Lada.startMoving(); 