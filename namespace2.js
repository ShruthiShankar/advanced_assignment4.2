//export keyword makes the namespace, interface and function visible outside the file
var vehicle;
(function (vehicle) {
    function displayNoOfWheels() {
        return "Car has 4 wheels";
    }
    vehicle.displayNoOfWheels = displayNoOfWheels;
})(vehicle || (vehicle = {}));
