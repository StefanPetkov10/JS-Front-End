class Vehicle {
    type;
    model;
    parts = {};
    fuel;

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts.engine = parts.engine;
        this.parts.power = parts.power;
        this.parts.quality = parts.engine * parts.power;
        this.fuel = fuel;
    }
    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}


let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);
