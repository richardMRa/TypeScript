//tsconfig.json recommended settings
/*
    "outDir": "./dist", (optional out directory)
    "rootDir": "./src",  (optional root directory (index.ts file))
    "noEmitOnError": true,
    "noUnusedLocals": true,                           
    "noUnusedParameters": true,                                  
    "noImplicitReturns": true,
*/

//TypeScript Types 

//Arrays

//  Number type Array
let numbers: number[] = [0,1,2,3]

//  String type Array
let strings: string[] = ['H', 'O', 'L', 'A']

//Tuples - Fixed length Array

//  This will be compiled as a normal Array
//  Push method is not checked by typescript
//  Key value pairs use recommended 

let user: [number, string] = [1, 'Me'];

//Enum - group of related variables

    //Use const to generate more optimized code

const enum Size {Small = 1, Medium, Large}
let mySize = Size.Medium;
console.log('enum size', mySize)


//Functions

//It is recommended to annotate the type of the return value.
    
//  Void - Function doesn't return a value.
function voidFunction(n: number): void　{
    console.log('Void Function, param num is', n)
}

// functions can't be called with an amount of parameters greater than the defined ones
// but you can define optional params using "?" i.e., taxYear?: number. You can also use a default value.
function optionalParam(income: number, taxYear = 2022): number　{

    if (taxYear < 2022){
        return income * 1.2
    }
    
    return income * 1.3

}

console.log('optional params function', optionalParam(1200))
console.log('optional params function', optionalParam(1200, 2021))
// console.log(optionalParam(1200, 2021, 3)) -> this throws error because of the amount of params.