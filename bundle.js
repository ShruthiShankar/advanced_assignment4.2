"use strict";
exports.__esModule = true;
//import keyword used to access function, interface
var namespac1 = require("./namespace1");
var car = namespac1.vehicle.displayNoOfWheels({ "NumberOfWheels": 4 });
console.log(car);
var bike = namespac2.vehicle.displayNoOfWheels();
console.log(bike);
