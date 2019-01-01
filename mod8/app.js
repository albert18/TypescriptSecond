"use strict";
// Simple Generic
function echo(data) {
    return data;
}
// console.log(echo("Max"));
// console.log(echo(27));
// console.log(echo({name: "Max1", age: 27}));
// ---------------------------------------------------------
/// Better Generic way -- its IDE support 
function betterEcho(data) {
    return data;
}
// console.log(betterEcho("Max").length);
// console.log(betterEcho<number>(27)); // specificly
// console.log(betterEcho({name: "Max1", age: 27}));
// ---------------------------------------------------------
//Build in Genetics - Array is a generic type by default
var testResults = [1.93, 2.33];
testResults.push(2.99);
// console.log(testResults);
// ---------------------------------------------------------
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
// printAll(["Apple", "Banana", "Orange"]);
// ---------------------------------------------------------
// Generics Types
var echo2 = echo;
// console.log(echo2<string>("Something"));
// ---------------------------------------------------------
// Creating a Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = 2;
simpleMath.multiplyValue = 40;
console.log(simpleMath.calculate());
