/**
 * Interfaces in TypeScript
 * 
 * Interfaces define the structure of objects, classes, or functions.
 * They enforce type safety and ensure consistency across implementations.
 * Interfaces can be extended to build complex shapes from simpler ones.
 * 
 * | Feature              | Syntax                       | Use Case                         |
 * |----------------------|------------------------------|----------------------------------|
 * | Object shape         | `interface User {}`          | Enforce object structure         |
 * | Optional field       | `email?: string`             | Fields that may be missing       |
 * | Readonly field       | `readonly id: number`        | Prevent mutation                 |
 * | Extending interface  | `interface A extends B`      | Reuse + extend base structures   |
 * | Implements in class  | `class X implements Y`       | Class shape contract             |
 * | Function signature   | `interface Fn { (): R }`     | Callbacks or function contracts  |
 */



// basic interface

interface User {
  readonly id: number; // readonly field
  name: string;
  email?: string; // optional field
  age: number | null;
  isActive: boolean;
  createdAt: Date;
  role: "admin" | "user" | "guest";
};

const Aziz: User = {
  id: 1,
  name: "Aziz",
  email: "azizz@email.xyz",
  age: 25,
  isActive: true,
  createdAt: new Date(),
  role: "admin",

};

const Bilel: User = {
  id: 2,
  name: "Bilel",
  age: 25,
  isActive: true,
  createdAt: new Date(),
  role: "user",
};


// Extending interfaces
interface AdminUser extends User {
  permissions: string[];
}

const admin: AdminUser = {
  id: 3,
  name: "Admin User",
  email: "admin@email.com",
  age: 30,
  isActive: true,
  createdAt: new Date(),
  role: "admin",
  permissions: ["read", "write", "delete"],
};


// Function using interface
console.log("---------------------- Interfaces with Functions ----------------------");
const createUser = (user: User): User => {
  console.log(`User created: ${user.name}`);
  return user;
}
createUser(Aziz);
console.log(Aziz)
createUser(Bilel);
console.log(Bilel);
// Function using extended interface
console.log("---------------------- Interfaces with Extended Types ----------------------");
const createAdminUser = (admin: AdminUser): AdminUser => {
  console.log(`Admin User created: ${admin.name}`);
  return admin;
}
createAdminUser(admin);
console.log(admin);

// Example of using interfaces with classes
console.log("---------------------- Interfaces with Classes ----------------------");
interface IUser {
  id: number;
  name: string;
  email?: string;
  age: number | null;
  isActive: boolean;
  createdAt: Date;
  displayInfo(): void;
  // method with parameter
  getIsActive:(message:string)=>string;

}

class UserClass implements IUser {
  id: number;
  name: string;
  email?: string;
  age: number | null;
  isActive: boolean;
  createdAt: Date;

  constructor(id: number, name: string, email: string | undefined, age: number | null, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.age = age;
    this.isActive = isActive;
    this.createdAt = new Date();
  }

  displayInfo(): void {
    console.log(`User Info - ID: ${this.id}, Name: ${this.name}, Email: ${this.email}, Age: ${this.age}, Active: ${this.isActive}`);
  }
  // method with arrow function syntax
  getIsActive = (message: string): string => {
    return `${message} - User ${this.name} is ${this.isActive ? "active" : "inactive"}`;
  }

}

const user1 = new UserClass(1, "Alice", "alice@gmail.com", 28, true);
user1.displayInfo();
console.log(user1.getIsActive("Status Check"));
const user2 = new UserClass(2, "Bob", undefined, null, false);
user2.displayInfo();
console.log(user2.getIsActive("Status Check"));

// Interfaces with Functions signatures
console.log("---------------------- Interfaces with Function Signatures ----------------------");

interface StringFormatter {
  (input: string): string;
}

const toUpperCase: StringFormatter = (input: string): string => {
  return input.toUpperCase();
}
const toLowerCase: StringFormatter = (input: string): string => {
  return input.toLowerCase();
}
const formatString = (formatter: StringFormatter, input: string): string => {
  return formatter(input);
}
console.log(formatString(toUpperCase, "hello world"));
console.log(formatString(toLowerCase, "HELLO WORLD"));