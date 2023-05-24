// This design pattern is used to create new objects from other objects so that the new object inherits the properties and methods of the previous object. This is the concept of prototypal inheritance
// 
const Player = {
    greet: function() {console.log(this.name, 'says Good morning')},
    health: 100,
}
const wizard = {
    name: "WIzard of Oz",
    attack: "Magic wand"
}
Object.setPrototypeOf(wizard, Player)
wizard.greet() // => Wizard of Oz says Good morning
wizard.health = 100