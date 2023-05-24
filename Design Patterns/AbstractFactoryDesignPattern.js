// Abstract Design Pattern is some kind of an abstraction over the factory design patter
// This design patter allows us to create instances of an object that share some properties 
// For example an automobile company may produce different types of automobiles e.g, Ford, SUV, Tesla, Motorcycle, Bicycle, etc which have similar functions like Move, Park, etc. 
// The function is an abstraction that calls the Factory class.
// Factory designs can be implemented as such

class Car {
    constructor(){
        this.name = "Car"
    }
    start(){console.log("Chacabum")}
    move(){console.log("Moving started")}
    stop(){console.log("Moving stopped")}

}

class Truck {
    constructor(){
        this.name = "Car"
    }
    start(){console.log("RUMMMMMMMMMMMMMMMMM")}
    move(){console.log("Moving started")}
    stop(){console.log("Moving stopped")}

}

class Motorcycle {
    constructor(){
        this.name = "Car"
    }
    start(){console.log("SSSSSSSSSSSSSSSSSSSSSSSSSSSSSS")}
    move(){console.log("Moving started")}
    stop(){console.log("Moving stopped")}

}
const VehicleFactory = {
    createVehicle: function () {
        switch (automobile){
            case "car":
                return new Car()
            case "motorcycle":
                return new Motorcycle()
            case "truck" :
                return new Truck()
            default :
                return null
        }
    }
}

const car = VehicleFactory.createVehicle("car")
const truck = VehicleFactory.createVehicle("truck")
const motorcycle = VehicleFactory.createVehicle("motorcycle")