// ==> This design is used to create objects in steps. The idea is that Objects can be created in separately without adding methods. Necessary methods can latter be added to it
// ==> using the builder pattern, we can create an object and apply to it only the "steps" we need, which is a more flexible approach.

const carObject = {
    name: "Tesla V",
    passphrase: "I'm a Tesla S model"
}
const BeeObject = {
    name: "Bee",
    passphrase: "I'm a Bee"
}

function BuilderDesignPatterMobilityFunction(obj) {
    // start
    obj.start = () => {console.log(this.name, "has started Moving!!")}
    obj.stop = () => {console.log(this.name, "has stopped Moving!!")}
}

function BuilderDesignPatterVoiceFunction(obj) {
    obj.speak = () => {console.log("bzzzzzzzzzzzzzz")}
}

// Applying Mobility Function
BuilderDesignPatterMobilityFunction(carObject)
BuilderDesignPatterMobilityFunction(BeeObject)

// Applying Voice Function
BuilderDesignPatterVoiceFunction(BeeObject)