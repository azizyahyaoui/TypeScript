// Functions in TypeScript
// As Always Programming is about functions
// Functions are the building blocks of any program.

console.log("------------------- Basic Functions in TypeScript -------------------");

function add(num1: number, num2: number): number {
  return num1 + num2;
}

console.log("Sum of 5 and 10 is: " + add(5, 10));

function greet(name: string): string {
  return `Hello, ${name}!`;
}
console.log(greet("Aziz"));

// function with default parameters
console.log("------------------- Function with Default Parameters -------------------");
function greetWithDefault(name: string = "Guest"): string {
  return `Hello, ${name}!`;
}
console.log(greetWithDefault()); // No argument passed, uses default value
console.log(greetWithDefault("Alice"));


// function with rest parameters
console.log("------------------- Function with rest parameters -------------------");
function multiply(num1: number, ...args:number[]): number {
  let result = num1;
  for (let i = 0; i < args.length; i++) {
    result *= args[i];
  }
  return result;
}

console.log("Multiplication of 2, 3, and 4 is: " + multiply(2, 3, 4));

// function rest parameters combo with tuples
console.log("------------------- Function with Rest Parameters and Tuples -------------------");

function pointCoordinates(...points: [number, number][]): string {
  return points.map(point => `(${point[0]}, ${point[1]})`).join(", ");
}
//x,y,z coordinates
console.log(`Coordinates of points x, y, z are: ${pointCoordinates([1, 2], [3, 4], [5, 6])}`);

//----------------------------------------------------------------------------------------------
// Before complete the rest let's learn arrow functions to practice it all along.
// Arrow Functions in TypeScript
//----------------------------------------------------------------------------------------------
console.log("------------------- Arrow Functions in TypeScript -------------------");
const addArrow = (num1: number, num2: number): number => num1 + num2;
console.log("Sum of 5 and 10 using arrow function is: " + addArrow(5, 10));


// function with optional parameters
console.log("------------------- Function with Optional Parameters -------------------");
const greetOptional = (name: string, age?: number): string => {
  if (age) {
    return `Hello, ${name}! You are ${age} years old.`;
  }
  return `Hello, ${name}!`;
}
console.log(greetOptional("Alice", 30));
console.log(greetOptional("Bob"));

// function alias
console.log("------------------- Function Alias -------------------");
/**
 * Function alias is a way to create a new name for an existing function type.
 * This is useful for creating more readable code or for reusing function types.
 *
 */
type MathOperation = (num1: number, num2: number) => number;
const subtract: MathOperation = (num1, num2) => num1 - num2;
console.log("Subtraction of 10 and 5 is: " + subtract(10, 5));

