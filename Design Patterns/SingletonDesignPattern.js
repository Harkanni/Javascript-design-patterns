// SINGLETON DESIGN PATTERN
// The singleton design pattern is a design pattern mostly used in cases where we need a single point of truth in our application. This design creates immutable instances of objects in our application.
// It could be created in two ways.
    // 1. Using Object literals
    const SingletonObject = {
        start: () => console.log("Application started"),
        end: () => console.log("Application ended")
    }
    Object.freeze(SingletonObject)
    SingletonObject.start()  // Application started
    SingletonObject.end() // Application ended
    SingletonObject.name = "Akanni"
    console.log(SingletonObject) // Start and end methods

    // 2. Using Javascript classes.
    class SingletonClass {
        constructor(){}
        start(){console.log("Application started")}
        end() {console.log("Application ended")}
    }
    const objectInstance = new SingletonClass();
    Object.freeze(objectInstance);
    SingletonObject.start()  // Application started
    SingletonObject.end() // Application ended
    SingletonObject.name = "Akanni"
    console.log(SingletonObject) // Start and end methods