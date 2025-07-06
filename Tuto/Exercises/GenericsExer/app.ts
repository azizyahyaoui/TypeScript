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


// Let's test async function 

/* const asyncFunction = async ():string => { // The return type of an async function or method must be the global Promise<T> type. Did you mean to write 'Promise<string>'?"

}
 */

// let's do it right now

type Users = {
    readonly id: number;
    username: string;
    email?: string;
}


const MyUsers: Users = {
    id: 1,
    username: "adminAdmin",
    email: "admin@mail.xyz"
}

const asyncFunction = async (userData:Users): Promise<Users> =>{
    return userData;
}

console.log(`Fetching user data: \n ${JSON.stringify(asyncFunction(MyUsers))}`);