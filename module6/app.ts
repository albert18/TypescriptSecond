namespace MyMath {
    const PI = 3.14;

    export function calculateCircumference(diameter: number) {
    return diameter * PI;
    }

    export function calculateRectangle(width: number, length: number) {
    return width * length;
    }

}


console.log(MyMath.calculateRectangle(10,20))