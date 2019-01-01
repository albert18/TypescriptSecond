interface NamedPerson {
    firstName: string;
    age?: number; //? is optional
    [propName: string]: any; // not an array then give any name
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.firstName);
}

function changeName(person: NamedPerson) {
    person.firstName = "Anna"
}

const person:NamedPerson = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
    
}

// greet({firstName:"Max",age:27, })
changeName(person);
greet(person)
person.greet("anything;")

class Person implements NamedPerson {
    firstName: any;
    greet(lastName:string) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
}

const myPerson = new Person();
myPerson.firstName = "Maxim"
greet(myPerson);
myPerson.greet("Anything Maxim")


// Function Types
interface DoubleValueFunc {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function(value1:number, value2:number) {
    return(value1 + value2) * 2;
}

console.log(myDoubleFunction(10,20));