// Generics 

//warm up
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let strings: string[] = ["ABC","DEF","GHI","JKL"]
let bool: boolean[] = [true, false, true]

// ===>

let myArrays: Array<string | number | boolean>



//Generic Functions

const printArraysContents = <myArrays>(arrayContent:myArrays) =>{
    console.log(arrayContent)
}


myArrays = [1, 2, 3, 4, 5, 6, 7, 8, 9]
printArraysContents(myArrays)

myArrays = ["ABC","DEF","GHI","JKL"]
printArraysContents(myArrays)
