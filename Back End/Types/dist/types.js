"use strict";
//tsconfig.json recommended settings
/*
    "outDir": "./dist", (optional out directory)
    "rootDir": "./src",  (optional root directory (index.ts file))
    "noEmitOnError": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
*/
var _a;
//---------------------TypeScript Types ---------------------
//Arrays
//  Number type Array
let numbers = [0, 1, 2, 3];
//  String type Array
let strings = ['H', 'O', 'L', 'A'];
//Tuples - Fixed length Array
//  This will be compiled as a normal Array
//  Push method is not checked by typescript
//  Key value pairs use recommended 
let user = [1, 'Me'];
let mySize = 2 /* Size.Medium */;
console.log('enum size', mySize);
//Functions
//It is recommended to annotate the type of the return value.
//  Void - Function doesn't return a value.
function voidFunction(n) {
    console.log('Void Function, param num is', n);
}
// Functions can't be called with an amount of parameters greater than the defined ones
// but you can define optional params using "?" i.e., taxYear?: number. You can also use a default value.
function optionalParam(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log('optional params function', optionalParam(1200));
console.log('optional params function', optionalParam(1200, 2021));
// console.log(optionalParam(1200, 2021, 3)) -> this throws error because of the amount of params.
//Objects 
//  You can set optional object properties by using "?" i.e., number?: number
//  You can set properties to read only so you won't be able to change them. i.e., readonly id: number
let employee = {
    id: 1,
    name: 'Richard',
    retire: (date) => {
        console.log(date);
    }
};
let employeeType = {
    id: 1,
    name: 'Richard',
    retire: (date) => {
        console.log(date);
    }
};
//Union types
// with union types we can give a variable or a function parameter more than one type
// we create union types by using "|" i.e, weight: number | string"
function kgToLbs(weight) {
    // Narrowing
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
//Literal Types
//  To limit the values we can asign to a variable
let quantity;
let quantity2;
//Nullable Types
// 
function greet(name) {
    if (name) {
        console.log('Hola', name.toUpperCase());
    }
    console.log('Hola!');
}
greet(null);
greet(undefined);
greet('Richard');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
// Optional property access operator
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
// Optional element access operator
// to check if elements on array are truthy.
// customers?.[0]
// Optional call
// if log is referencing a function, if not it will return null
let log = null;
log === null || log === void 0 ? void 0 : log('a');
//# sourceMappingURL=types.js.map