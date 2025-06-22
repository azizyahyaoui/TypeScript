// Void and Never types in TypeScript

/**
 * Void and Never return types in TypeScript
 *  - Void is used to indicate that a function does not return a value.
 *  - Never is used to indicate that a function will never complete (e.g., it throws an error or enters an infinite loop).
 *  - These types are useful for defining functions that have side effects or for error handling.
 */


// Function that returns void
console.log("------------------- Function that returns void -------------------");

const logMessage = (message: string): void => {
  console.log("Log: " + message);
}
logMessage("This is a message that does not return anything.");

// Function that never returns (throws an error)
console.log("------------------- Function that never returns -------------------");
const throwErrorFunc = (errorMessage: string): never => {
  throw new Error(errorMessage);
}

try {
  throwErrorFunc("This function will never return.");
} catch (error) { 
  if (error instanceof Error) { // should using type guard to check if error is an instance of Error
    console.error("Caught an error: " + error.message);
  } else {
    console.error("Caught an unknown error:", error);
  }
}


// ------------------- (Optional) Infinite loop example of never -------------------
console.log("------------------- Infinite loop example of never -------------------");
// This function will never complete, it runs indefinitely
const loopForever = (): never => {
  while (true) {}
}
// Uncommenting the line below will cause the program to hang indefinitely
console.log("This will never be printed because the function runs indefinitely.");
// loopForever(); // Uncommenting this line will cause the program to hang indefinitely


//  Exhaustiveness Checking with `never`
console.log("------------------- Exhaustiveness Checking with never -------------------");

// Define a union type for different shapes
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; side: number }
  | { kind: "rectangle"; width: number; height: number };

const area = (shape: Shape): number => {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius * shape.radius;
    case "square":
      return shape.side * shape.side;
    case "rectangle":
      return shape.width * shape.height;
    default:
      // This will never be reached if all cases are handled
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck; // This line ensures that all cases are handled
  }
}

// Example usage of the area function
const circle: Shape = { kind: "circle", radius: 5 };
const square: Shape = { kind: "square", side: 4 };

console.log("Area of circle:", area(circle)); // Area of circle: 78.53981633974483
console.log("Area of square:", area(square)); // Area of square: 16

// Uncommenting the line below will cause a TypeScript error if a new shape is added without handling it
// const triangle: Shape = { kind: "triangle", base: 3, height: 4 };
// console.log("Area of triangle:", area(triangle)); // This will cause a TypeScript error if not handled in the switch case

