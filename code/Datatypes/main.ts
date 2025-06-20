// TS data types 

// Primitives
let username: string = "Aziz Yahyaoui";
let email: string = "aziz@email.com";
let age: number = 27;
let salary: number = 1500.50;
let isAuth: boolean = true;
let isAdmin: boolean = false;
let phoneNumber: string | number = "+2162292992929"; // Union type
let userId: number | string = 12345; // Union type

//Arrays and Tuples
let programmingLanguages: string[] = ["JavaScript", "TypeScript", "Python"];
let hobbies: Array<string> = ["Reading", "Gaming", "Traveling"]; // Array using generic type 
let scores: number[] = [85, 90, 78, 92];
let mixedArray: (string | number)[] = ["Alice", 30, "Bob", 25];// Mixed array with union types

// Tuples
let tupleExample: [number, string, boolean] = [1, "Alice", true]; // Tuple type


let x: any = 'anything'; // any type
let arr: any[] = [1, true, 'someString']; // any array

// Enum
enum UserRole {
    Admin = "Admin",
    User = "User",
    Guest = "Guest"
}
let userRole: UserRole = UserRole.Admin; // Using enum
let userRole2: UserRole = UserRole.User; // Using enum


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

// Function with typed parameters and return type
function greetUser(name: string, age: number): string {
    return `Hello, ${name}! You are ${age} years old.`;
}
// Function with optional parameter
function greetUserOptional(name: string, age?: number): string {
    if (age) {
        return `Hello, ${name}! You are ${age} years old.`;
    } else {
        return `Hello, ${name}!`;
    }
}


