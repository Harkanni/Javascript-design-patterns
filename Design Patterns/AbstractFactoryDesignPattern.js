// Abstract Design Pattern is some kind of an abstraction over the factory design patter
// This design patter allows us to create instances of an object that share some properties 
// For example an automobile company may produce different types of automobiles e.g, Ford, SUV, Tesla, Motorcycle, Bicycle, etc which have similar functions like Move, Park, etc. 
// The function is an abstraction that calls the Factory class.
// Factory designs can be implemented as such

class FactoryDesignClass {
    constructor(automobileType){
        this.name = automobileType
    }
    move(){console.log("Moving started")}
    stop(){console.log("Moving stopped")}
}
function FactoryDesignFunction(automobile){
    switch (automobile){
        case "car":
            return new FactoryDesignClass("car")
        case "motorcycle":
            return new FactoryDesignClass("motorcycle")
    }
}