// Function Overloading

/**
 * Function overloading allows you to define multiple function signatures for the same function name.
 * This is useful when you want to handle different types or numbers of parameters in a single function
 * while maintaining type safety.
 */

//overload signatures
/* 
const greet = (name: string): string;
const greet = (name: string, age: number): string;
 ==> Arrow functions cannot be overloaded in TypeScript.
 */

function greetUser(name: string): string;
function greetUser(name: string, age: number): string;

function greetUser(name: string, age?: number): string {
  if (age !== undefined) {
    return `Hello, ${name}. You are ${age} years old.`;
  }
  return `Hello, ${name}.`;
}

// Usage
console.log(greetUser("Aziz"));
console.log(greetUser("Aziz", 30));

