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
/* asyncFunction(MyUsers).then(user => {
    console.log(`Fetching user data: \n`, user);
});
 */

// Get index of an item from an array
type Cars = {
    readonly id: number,
    brand: string,
    yearModel: string,
    color: string,
}

let carsNumberPlate: number[] = [216,213,1,8,84,125]

let carsArray: Cars[] = [
    { id: 1, brand: "Toyota", yearModel: "2020", color: "Red" },
    { id: 2, brand: "Honda", yearModel: "2019", color: "Blue" },
    { id: 3, brand: "Ford", yearModel: "2021", color: "Black" },
    { id: 4, brand: "BMW", yearModel: "2018", color: "White" }
]


const getItemIndex = <ArrayItems>(table: ArrayItems[], arrayItem: ArrayItems ): number =>{
    return table.findIndex(
        (item) => item === arrayItem
    );
}
const findIndexBy=<T>(array: T[],predicate: (item: T) => boolean): number => {
    return array.findIndex(predicate);
}

const carIndex = findIndexBy(carsArray, (car) => car.id === 3);
console.log(`Car found at index: ${carIndex}`); //

const carPlateIndex = findIndexBy(carsNumberPlate,(plate) =>  plate === 84)
console.log(`Car Plate found at index: ${carPlateIndex}`);

