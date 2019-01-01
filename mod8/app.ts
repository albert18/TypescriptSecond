// Simple Generic
function echo(data: any) {
    return data;
}

// console.log(echo("Max"));
// console.log(echo(27));
// console.log(echo({name: "Max1", age: 27}));

/// Better Generic way -- its IDE support 
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27)); // specificly
console.log(betterEcho({name: "Max1", age: 27}));