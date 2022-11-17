const Car = require("./class")

var car1 = new Car('red'); //constructor를 실행하는 것이다.
var car2 = new Car('blue');
var car3 = new Car('green');
console.log(car1.returnColor())
console.log(car2.returnColor())
console.log(car3.returnColor())