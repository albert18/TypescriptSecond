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