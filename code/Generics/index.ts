// Generics

/**
 * Generics in TypeScript allow you to create reusable components that work with any data type.
 *    - They provide type safety without losing flexibility.
 *    - You can define functions, classes, and interfaces that work with different types.
 *    - Use angle brackets <> to define generic type parameters(T,U,V..).
 * - FACT: generics are over all places such in `document.querySelector(".classElement")`, it just `document.querySelector<HTMLClassElement>(".classElement")`
 * 
 * Syntax:
 * - function:
 * 
 *      function identity<T>(arg: T): T {
 *        return arg;
 *      }
 *      
 *    - With arrow function:
 *      const getSecondElement = <T>(arg: T) => {return arg;}
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
const lastString = getLasElement(stringsArray)
console.log(`The last string is: ${lastString}`)



// Generics
console.log("------------------------------(Using Generics)------------------------------");
//Using the same example but now with Generics:


const getSecondElement = <ElementType>(item: ElementType[]) => {
  return item[1];
}

//Array of numbers
const phoneCode = [216, 218, 213, 1, 44, 81]
const secondNumber = getSecondElement(phoneCode)
console.log(`The second code number is: ${secondNumber}`);

//Array of strings
const countryArray = ["JP","UK","TN","USA","ALG"]
const secondCountry = getSecondElement(countryArray)
console.log(`The second country in the list is: ${secondCountry}`)





//Interface with generics
console.log("------------------------------(Interface with generics)------------------------------");




//Class with generics
console.log("------------------------------(Class with generics)------------------------------");




//Extending generics`<T extends U>`
console.log("------------------------------(Extending generics`<T extends U>`)------------------------------");














//Generics with default type `<T = DefaultType>`
console.log("------------------------------(Generics with default type `<T = DefaultType>`)------------------------------");


// Examples With the most useful function filter<T>, merge<T, U>,
console.log("------------------------------(filter<T>)------------------------------");



// merge<T, U>
console.log("------------------------------(merge<T, U>)------------------------------");