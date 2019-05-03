'use strict';

function Car3(brand, year, color, mileage, fuel) {
	this.brand = brand;
	this.year = year;
	this.color = color;
	this.mileage = mileage;
	this.fuel = fuel;
  this.isAccelerated = false;
}

Car3.prototype = {
  accelerationOn: function() {
    if (this.fuel > 0) {
      this.isAccelerated = true;
    } else {
      console.log("Заправьте автомобиль")
    }
  },
  startMoving: function() {
    if (this.isAccelerated) {
      this.fuel -= 20;
      this.mileage += 5;
      console.log(`Машина ${this.brand} марки ${this.color} цвета поехала!`)
    } else {
      console.log("Включите сначала зажигание.")
    }
  },
  stopMoving: function() {
    if (this.isAccelerated) {
     this.isAccelerated = false;
     console.log("Машинка остановилась");
   } else {
     console.log("Зажигание и так выключено")
   }
  },
  refueling: function() {
    this.fuel = 100;
  }  
};


console.log(Car3.prototype);

const Subaru = new Car3("Subaru", 2017, "Blue", 50, 0);
console.log(Subaru);

Subaru.accelerationOn();
Subaru.stopMoving();

const Daeweo = new Car3("Daeweo", 2005, "Black", 150, 100);
console.log(Daeweo);

Daeweo.stopMoving();
Daeweo.accelerationOn();
Daeweo.startMoving(); 