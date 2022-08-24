//TypeScript Types 

//Arrays

    //Number type Array
let numbers: number[] = [0,1,2,3]

    //String type Array
let strings: string[] = ['H', 'O', 'L', 'A']

//Tuples - Fixed length Array

    //This will be compiled as a normal Array
    //Push method is not checked by typescript
    //Key value pairs use recommended 

let user: [number, string] = [1, 'Me'];

//Enum - group of related variables

    //Use const to generate more optimized code

const enum Size {Small = 1, Medium, Large}
let mySize = Size.Medium;
console.log(mySize)


