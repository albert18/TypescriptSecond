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

//////////////////// Method Decorators
function editable(value: boolean) {
    return function(target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

class Project {
    projectName: string;

    constructor(name: string) {
    this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000)
    }
}

const project = new Project("Super Project");
project.calcBudget();
project.calcBudget = function() {
  console.log(2000)  
};
project.calcBudget();