// Factory design patterns are used when we want to create objects that have some similar properties in common. 
// For example an automobile company may produce different types of automobiles e.g, Ford, SUV, Tesla, Motorcycle, Bicycle, etc which have similar functions like Move, Park, etc. 
// They could create a single Factory class or Object that creates instances of these various automobiles.
// Factory designs can be create in two ways
    // 1. Using Functions
    function FactoryDesignFunction(automobileType){
        this.type = automobileType
        this.move = () => {console.log(this.type, "has started Moving!")}
    }
    FactoryDesignFunction.prototype.stop = function(){
        console.log(this.type, "has stopped moving!")
    }

    const carFactory = new FactoryDesignFunction("car")
    carFactory.type // "Car"
    carFactory.move // "Car has started moving"
    carFactory.stop // "Car has stopped moving"

    // 2. Using Classes
    class FactoryDesignClass {
        constructor(automobileType){
            this.type = automobileType           
        }
        move(){console.log(this.type, "has started Moving!")}
        stop(){console.log(this.type, "has stopped moving!")}
    }
    const TeslaFactory = new FactoryDesignClass("Tesla")
    TeslaFactory.type // "Tesla"
    TeslaFactory.move // "Tesla has started moving"
    TeslaFactory.stop // "Tesla has stopped moving"
 
    
    