// TS data types 


/**
 *  TypeScript's type system is powerful and flexible, allowing you to define various data types, including primitives, arrays, tuples, enums, objects, and special types like `unknown`, `null`, and `undefined`.
 */


// Primitives
let username: string = "Aziz Yahyaoui";
let email: string = "aziz@email.com";
let age: number = 27;
let salary: number = 1500.50;
//let bigNumber: bigint = 12345678901234567890n; // BigInt type for large integers //BigInt literals are not available when targeting lower than ES2020.
let isAuth: boolean = true;
let isAdmin: boolean = false;
let phoneNumber: string | number = "+2162292992929"; // Union type
let userId: number | string = 12345; // Union type

console.log(`Username: ${username}, Email: ${email}, Age: ${age}, Salary: ${salary}, Is Authenticated: ${isAuth}, Is Admin: ${isAdmin}, Phone Number: ${phoneNumber}, User ID: ${userId}`);
console.log(typeof userId)
//Arrays
let programmingLanguages: string[] = ["JavaScript", "TypeScript", "Python"];
let hobbies: Array<string> = ["Reading", "Gaming", "Traveling"]; // Array using generic type 
let scores: number[] = [85, 90, 78, 92];
let mixedArray: (string | number)[] = ["Alice", 30, "Bob", 25];// Mixed array with union types

// Tuples
let tupleExample: [number, string, boolean] = [1, "Alice", true]; // Tuple type


let x: any = 'anything'; // any type
let arr: any[] = [1, true, 'someString']; // any array

// Enums
// Classic Numeric Enums
enum Color { Red, Green, Blue }
let favoriteColor: Color = Color.Red; // Using enum
console.log(favoriteColor);

// Modern enums String enums 
enum UserRole {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}
let userRole: UserRole = UserRole.Admin;
let userRole2: UserRole = UserRole.User;

// Object
let user: {
    username: string;
    email: string;
    age: number;
    isActive: boolean;
} = {
    username: "Aziz Yahyaoui",
    email: "",
    age: 27,
    isActive: true
};

//Special types (unknown, null, undefined)
/**
 *  TypeScript provides a few "special types" that help handle uncertain or edge-case scenarios more safely.
    *  - `unknown`: Represents a value that could be of any type, but is safer than `any` because it requires type checking before use.
    * - `null`: Represents the intentional absence of any value.
    * - `undefined`: Represents a variable that has been declared but not assigned a value.
 *  These types help ensure that your code is more robust and type-safe, especially when dealing with dynamic data or APIs.
 */
let unknownValue: unknown; // unknown type is safer than any
let nullValue: null = null; // null type
let undefinedValue: undefined = undefined; // undefined type


// Type assertions
let someValue: any = "This is a string";
let stringLength: number = (someValue as string).length; // Using 'as' syntax

// Type assertions with angle brackets
let anotherValue: any = "This is another string";
let anotherStringLength: number = (<string>anotherValue).length; // Using angle brackets syntax

//let element = document.getElementById("root") as HTMLElement; // Type assertion for DOM element. ⚠️ Not allowed in `.tsx` (React) — prefer `as` in those cases


// Object with optional properties

let userWithOptional: {
    username: string;
    email?: string; // Optional property
    age: number;
    isActive: boolean;
} = {
    username: "Aziz Yahyaoui",
    age: 27,
    isActive: true
};

// Object with readonly properties
/**
 * The `readonly` modifier in TypeScript allows you to define properties that cannot be reassigned after their initial assignment. This is useful for creating immutable objects or ensuring that certain properties remain constant throughout the lifetime of an object.
 */

let userWithReadonly: {
    readonly username: string; // Readonly property
    email: string;
    age: number;
    isActive: boolean;
} = {
    username: "Aziz Yahyaoui",
    email: "aziz@email.xzy",
    age: 27,
    isActive: true
};

//Readonly is a best practice for properties that should not change after initialization, ensuring data integrity and preventing accidental modifications such as APIs, Databases connections, or configuration objects. 

// API configuration example
let apiConfig: {
    readonly baseUrl: string; // Readonly property
    readonly timeout: number; // Readonly property
} = {
    baseUrl: "https://api.example.com",
    timeout: 5000
};
// Attempting to modify a readonly property will result in a compile-time error
// apiConfig.baseUrl = "https://api.newexample.com"; // Error: Cannot assign to 'baseUrl' because it is a read-only property
