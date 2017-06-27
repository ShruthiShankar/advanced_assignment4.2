
//import keyword used to access function, interface
import * as namespac1 from "./namespace1";
import * as namespace2 from "./namespace2";

 let car = namespac1.vehicle.displayNoOfWheels({"NumberOfWheels":4});
 console.log(car);

 let bike = namespac2.vehicle.displayNoOfWheels();
 console.log(bike);