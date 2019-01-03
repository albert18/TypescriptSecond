// A decorator is just a function / appending by the @ sign
// Note to remove the warning need to enable/add experimentalDecorators in tsconfig
function logged(constructorFN: Function) {
    console.log(constructorFN);
}

@logged
class Person {
    constructor() {
        console.log("Hi!")
    }
}

// Create a factory
function logging(value: boolean) {
    return value ? logged : null;
}

@logging(true) // you can set to boolean/ it will print in console
class Car {

}

// Advance Decorator
function printable(constructorFN: Function) {
    constructorFN.prototype.print = function() {
        console.log(this);
    }
}

@logging(true)
@printable
class Plant {
    name = "Green Plant";
}
const plant = new Plant();
(<any>plant).print();

