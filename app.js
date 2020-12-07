// Lets create a car object with some Default values
var car = {
    make: 'Default',
    model: 'Default',
    getCarInfo: function() {
        return this.make + ' ' + this.model;  
    }
}

var Volvo = {
    make: 'Volvo',
    model: 'S80'
}

// don't do this EVER! for demo purposes only!!! Now Volvo inherits from car. So when calling a method that doesn't exist on Volvo it will go to Car to find it
Volvo.__proto__ = car;

// Now we can use the getCarInfo()
console.log(Volvo.getCarInfo());

// Here we get Volvo because of the prototype chain. It first looks on the Volvo object for that property, finds it then stops. JavaScript engin starts at the top of the chain, works its way down till it finds what is looking for.
console.log(Volvo.make);

var Honda = {
    make: 'Honda'   
}

Honda.__proto__ = car;

//This will return "Honda Default" as the object has a value for make but not for model. So the prototype is car and finds the model value of Default
console.log(Honda.getCarInfo());

car.getCarFullInfo = function() {
    return this.model + ', ' + this.make;   
}

console.log(Volvo.getCarFullInfo());
console.log(Honda.getCarFullInfo());