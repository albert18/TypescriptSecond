// Simple Generic
function echo(data: any) {
    return data;
}

// console.log(echo("Max"));
// console.log(echo(27));
// console.log(echo({name: "Max1", age: 27}));


// ---------------------------------------------------------
/// Better Generic way -- its IDE support 
function betterEcho<T>(data: T) {
    return data;
}

// console.log(betterEcho("Max").length);
// console.log(betterEcho<number>(27)); // specificly
// console.log(betterEcho({name: "Max1", age: 27}));


// ---------------------------------------------------------
//Build in Genetics - Array is a generic type by default
const testResults:Array<number> = [1.93, 2.33];
testResults.push(2.99);
// console.log(testResults);

// ---------------------------------------------------------
// Arrays
function printAll<T>(args:T[]) {
    args.forEach((element) => console.log(element));
}

// printAll(["Apple", "Banana", "Orange"]);



// ---------------------------------------------------------
// Generics Types
const echo2: <T>(data: T) => T = echo;
// console.log(echo2<string>("Something"));


// ---------------------------------------------------------
// Creating a Generic Class

class SimpleMath<T extends number | string> {
    baseValue: any;
    multiplyValue: any;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue
    }
}

const simpleMath = new SimpleMath<number>();
simpleMath.baseValue = 2;
simpleMath.multiplyValue = 90;
console.log(simpleMath.calculate());