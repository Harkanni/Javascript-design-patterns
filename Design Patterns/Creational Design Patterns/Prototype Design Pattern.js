// This design pattern is used to create new objects from other objects so that the new object inherits the properties and methods of the previous object. This is the concept of prototypal inheritance
// 
const Player = {
    greet: () => console.log(this.name, 'says goodmorning'),
    health: 100,
}
const wizard = {
    name: "WIzard of Oz",
    attack: "Magic wand"
}
wizard.prototype = Player;