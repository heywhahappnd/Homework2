var transport = {
stop: null
};
var car = {
stop: true
};
car.__proto__ = transport;

console.log(car.stop); // true, потому что непосредственно в объкте car есть свойство stop со значением true (1)
delete car.stop; //удаляем это свойство из объекта
console.log(car.stop); // так как в самом объекте car уже нет свойства stop, оно продолжит искать в прототипе , то есть в объекте transport, получим null (2)
delete transport.stop; //удаляем свойство из объекта transport 
console.log(car.stop); // свойства stop теперь нет ни в самом объекте car, ни в его прототипе, выведет undefined (3) 