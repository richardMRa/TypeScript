"use strict";
let numbers = [0, 1, 2, 3];
let strings = ['H', 'O', 'L', 'A'];
let user = [1, 'Me'];
let mySize = 2;
console.log('enum size', mySize);
function voidFunction(n) {
    console.log('Void Function, param num is', n);
}
function optionalParam(income, taxYear = 2022) {
    if (taxYear < 2022) {
        return income * 1.2;
    }
    return income * 1.3;
}
console.log('optional params function', optionalParam(1200));
console.log('optional params function', optionalParam(1200, 2021));
//# sourceMappingURL=index.js.map