// Generics

/**
 * -----------------------------------------------------------------------------------------------------------------
 * Generics in TypeScript allow you to create reusable components that work with any data type.
 *    - They provide type safety without losing flexibility.
 *    - You can define functions, classes, and interfaces that work with different types.
 *    - Use angle brackets <> to define generic type parameters(T,U,V..).
 * - FACT: generics are over all places such in `document.querySelector(".classElement")`, it just `document.querySelector<HTMLClassElement>(".classElement")` or even with maps : map = New Map<string, number>();
 *                                                                     map = New Map<number, Map<string, number>>();
 *    - Array also are generics `interface Array<T>{....}}`
 * -----------------------------------------------------------------------------------------------------------------
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

const getFirstElement = (item: (number | string)[]) => { // using union types could solve the eslint not assignable issue
  return item[0];
}

//Array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const firstNumber = getFirstElement(numbers)
console.log(`The First number is: ${firstNumber}`);

//Array of strings
const stringsArray = ["JP", "UK", "TN", "USA", "ALG"]
const firstString = getFirstElement(stringsArray) //eslint: not assignable
console.log(`The First string is: ${firstString}`) // Still returns JP



// Using any
console.log("------------------------------(Using any)------------------------------");

const getLasElement = (item: any[]) => { // using any could solve the issue but is make ur code lose type safety
  return item[item.length - 1];
}

//Array of numbers
const numbArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const lastNumber = getLasElement(numbers)
console.log(`The last number is: ${lastNumber}`);

//Array of strings
const strArray = ["JP", "UK", "TN", "USA", "ALG"]
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
const countryArray = ["JP", "UK", "TN", "USA", "ALG"]
const secondCountry = getSecondElement(countryArray)
console.log(`The second country in the list is: ${secondCountry}`)



//Interface with generics
console.log("------------------------------(Interface with generics)------------------------------");


interface ApiResponseInter<APIData> {
  status: number;
  message: string;
  data: APIData;
}


interface Users {
  id: number;
  name: string;
  email: string;
}


interface Products {
  id: number;
  name: string;
  price: number;
}


const userApiResponse: ApiResponseInter<Users> = {
  status: 200,
  message: "User fetched successfully",
  data: {
    id: 1,
    name: "Aziz Dev",
    email: "aziz@example.dev"
  }
};
console.log(`Fetching data from user API:\n ${JSON.stringify(userApiResponse, null, 2)}`);

const productsApiResponse: ApiResponseInter<Products> = {
  status: 200,
  message: "Product details retrieved",
  data: {
    id: 99,
    name: "TS Coding Book",
    price: 42.5
  }
};

console.log(`Fetching data from products API:\n ${JSON.stringify(productsApiResponse, null, 2)}\n`);




//Types with generics
console.log("------------------------------(Types with generics)------------------------------");

/**
 * Using data pagination is a good idea for Generic type alias for paginated results
 */


type PaginationResults<DataTypes> = {
  currentPage: number;
  totalPages: number;
  items: DataTypes[];
}


type Books = {
  readonly id: number;
  title: string;
  author: string;
}

type EBooks = Books & {
  format: string;
  fileSizeMB: number;
};

type BLogs = {
  readonly blogId: number;
  blogTitle: string;
  blogAuthor: string;
}


const book: Books = {
  id: 1,
  title: "TypeScript Tactics",
  author: "TS Dev"
}

const secBook: Books = {
  id: 2,
  title: "Generics Unleashed",
  author: "TS author"
}

const ebook: EBooks = {
  id: 42,
  title: "TypeScript Mastery",
  author: "Aziz Dev",
  format: "EPUB",
  fileSizeMB: 4.2
};
const blog: BLogs = {
  blogId: 1,
  blogTitle: "TypeScript Generics",
  blogAuthor: "Med Aziz"
}

const getPaginatedBooks = (): PaginationResults<Books | EBooks | BLogs> => {
  return {
    currentPage: 1,
    totalPages: 5,
    items: [book, secBook, ebook, blog]
  }
}

console.log(`Fetching data from books API:\n ${JSON.stringify(getPaginatedBooks(), null, 2)}\n`)
/* 
const books = getPaginatedBooks();
console.log("First book:", books.items[0]); */


//Class with generics
console.log("------------------------------(Class with generics)------------------------------");


// Generic class definition

class DataStorage<T> {
  items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return [...this.items];
  }

  remove(item: T): void {
    this.items = this.items.filter(i => i !== item);
  }
}

// Example usage with strings
const stringStorage = new DataStorage<string>();
stringStorage.add("Aziz’s first item");
stringStorage.add("Aziz’s second item");
console.log(stringStorage.getAll());

// Example with a custom type
type ABook = {
  title: string;
  author: string;
};

const bookStorage = new DataStorage<ABook>();
bookStorage.add({ title: "TypeScript Tonic", author: "Aziz Dev" });
console.log(bookStorage.getAll());


//Extending generics`<T extends U>`
console.log("------------------------------(Extending generics`<T extends U>`)------------------------------");

// Example: Only allow objects with an 'id' property
interface HasId {
  id: number;
}

function printId<T extends HasId>(item: T): void {
  console.log(`ID is: ${item.id}`);
}

const userWithId = { id: 123, name: "Aziz" };
printId(userWithId); // OK

// const invalid = { name: "NoId" };
// printId(invalid); // Error: Property 'id' is missing


//Generics with default type `<T = DefaultType>`
console.log("------------------------------(Generics with default type `<T = DefaultType>`)------------------------------");

type ApiResult<T = string> = {
  status: number;
  data: T;
};

const defaultResult: ApiResult = { status: 200, data: "Default string data" };
const numberResult: ApiResult<number> = { status: 200, data: 42 };

console.log(defaultResult);
console.log(numberResult);

// Examples With the most useful function filter<T>, merge<T, U>,
console.log("------------------------------(filter<T>)------------------------------");

function myFilter<T>(arr: T[], predicate: (item: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of arr) {
    if (predicate(item)) result.push(item);
  }
  return result;
}

const nums = [1, 2, 3, 4, 5];
const evenNums = myFilter(nums, n => n % 2 === 0);
console.log("Even numbers:", evenNums);

const words = ["TS", "JS", "C#", "Go"];
const longWords = myFilter(words, w => w.length > 2);
console.log("Long words:", longWords);

// merge<T, U>
console.log("------------------------------(merge<T, U>)------------------------------");

function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: "Aziz" }, { age: 30, country: "TN" });
console.log("Merged object:", merged);