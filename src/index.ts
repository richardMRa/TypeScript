//tsconfig.json recommended settings
/*
    "outDir": "./dist", (optional out directory)
    "rootDir": "./src",  (optional root directory (index.ts file))
    "noEmitOnError": true,
    "noUnusedLocals": true,                           
    "noUnusedParameters": true,                                  
    "noImplicitReturns": true,
*/

//---------------------TypeScript Types ---------------------

//Arrays

//  Number type Array
let numbers: number[] = [0, 1, 2, 3]

//  String type Array
let strings: string[] = ['H', 'O', 'L', 'A']

//Tuples - Fixed length Array

//  This will be compiled as a normal Array
//  Push method is not checked by typescript
//  Key value pairs use recommended 

let user: [number, string] = [1, 'Me'];

//Enum - group of related variables

//  Use const to generate more optimized code

const enum Size { Small = 1, Medium, Large }
let mySize = Size.Medium;
console.log('enum size', mySize)


//Functions

//It is recommended to annotate the type of the return value.

//  Void - Function doesn't return a value.

function voidFunction(n: number): void {
    console.log('Void Function, param num is', n)
}

// Functions can't be called with an amount of parameters greater than the defined ones
// but you can define optional params using "?" i.e., taxYear?: number. You can also use a default value.

function optionalParam(income: number, taxYear = 2022): number {

    if (taxYear < 2022) {
        return income * 1.2
    }

    return income * 1.3

}

console.log('optional params function', optionalParam(1200))
console.log('optional params function', optionalParam(1200, 2021))
// console.log(optionalParam(1200, 2021, 3)) -> this throws error because of the amount of params.

//Objects 
//  You can set optional object properties by using "?" i.e., number?: number
//  You can set properties to read only so you won't be able to change them. i.e., readonly id: number

let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: 'Richard',
    retire: (date: Date) => {
        console.log(date)
    }
}

//employee.id = 2       -- Throws error because id property is set to read only.    


//---------------------Advanced Types---------------------

//Type aliases
//  You set the shape of your object so you don't have to redeclare the property types again when initializing new objects.

type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let employeeType: Employee = {
    id: 1,
    name: 'Richard',
    retire: (date: Date) => {
        console.log(date)
    }
}

//Union types
// with union types we can give a variable or a function parameter more than one type
// we create union types by using "|" i.e, weight: number | string"
function kgToLbs(weight: number | string): number {
    // Narrowing

    if (typeof weight === 'number') {
        return weight * 2.2
    }

    return parseInt(weight) * 2.2

}

kgToLbs(10)
kgToLbs('10kg')

//Intersection types
//  Variables that can be both types

type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

//Literal Types
//  To limit the values we can asign to a variable

let quantity: 50 | 100;

type Quantity = 50 | 100;
let quantity2: Quantity;

type Metric = 'cm' | 'inch'

//Nullable Types
// 

function greet(name: String | null | undefined): void {

    if (name) {
        console.log('Hola', name.toUpperCase());
    }

    console.log('Hola!')

}

greet(null) 
