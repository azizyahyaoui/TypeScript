// Generics

/**
 * Generics in TypeScript allow you to create reusable components that work with any data type.
 *    - They provide type safety without losing flexibility.
 *    - You can define functions, classes, and interfaces that work with different types.
 *    - Use angle brackets <> to define generic type parameters(T,U,V..).
 * 
 * Syntax:
 * - function:
 * 
 *      function identity<T>(arg: T): T {
 *        return arg;
 *      }
 * 
 * - Interface:
 * 
 *    interface APiResponse<U>{
 *      data: T;
 *      status: number;
 *    }
 * 
 * - Class:
 *      
 *    class Box<T> {
 *      constructor(public content: T) {}
 *    }
 * 
 * - `<T extends U>`      ==>  Add constraint to T.
 * - `<T = DefaultType>`  ==>  Provide default generic type.
 */



console.log("------------------------------(Without Generics)------------------------------");

/* const getFirstElement =(item:number[])=>{
  return item[0];
} */

const getFirstElement =(item:(number| string)[])=>{ // using union types could solve the eslint not assignable issue
  return item[0];
}

//Array of numbers
const numbers = [1,2,3,4,5,6,7,8,9]
const firstNumber = getFirstElement(numbers)
console.log(`The First number is: ${firstNumber}`);

//Array of strings
const stringsArray = ["JP","UK","TN","USA","ALG"]
const firstString = getFirstElement(stringsArray) //eslint: not assignable
console.log(`The First string is: ${firstString}`) // Still returns JP



// Using any
console.log("------------------------------(Using any)------------------------------");

const getLasElement =(item:any[])=>{ // using any could solve the issue but is make ur code lose type safety
  return item[item.length -1];
}

//Array of numbers
const numbArray = [1,2,3,4,5,6,7,8,9]
const lastNumber = getLasElement(numbers)
console.log(`The last number is: ${lastNumber}`);

//Array of strings
const strArray = ["JP","UK","TN","USA","ALG"]
const lastString = getLasElement(stringsArray) //eslint: not assignable
console.log(`The last string is: ${lastString}`) // Still returns JP



// Generics
console.log("------------------------------(Using Generics)------------------------------");





//
console.log("------------------------------()------------------------------");


//
console.log("------------------------------()------------------------------");



// Examples With the most useful function filter<T>, merge<T, U>,
console.log("------------------------------(filter<T>)------------------------------");



// merge<T, U>
console.log("------------------------------(merge<T, U>)------------------------------");