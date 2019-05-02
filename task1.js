'use strict';

const Car = {
  brand: "Toyota",
  year: 2015,
  color: "red",
  mileage: 100,
  fuel: 100,
  isAccelerated: false,
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

Car.startMoving();
Car.accelerationOn();
Car.startMoving();
Car.stopMoving();