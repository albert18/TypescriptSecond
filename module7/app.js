"use strict";
function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    firstName: "Max",
    hobbies: ["Cooking", "Sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    }
};
// greet({firstName:"Max",age:27, })
changeName(person);
greet(person);
person.greet("anything;");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.firstName + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.firstName = "Maxim";
greet(myPerson);
myPerson.greet("Anything Maxim");
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    firstName: "Super Al",
    greet: function (lastName) {
        console.log("Some Hellow");
    }
};
console.log(oldPerson.firstName);
