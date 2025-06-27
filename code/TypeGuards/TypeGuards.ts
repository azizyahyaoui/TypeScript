// TS Type Guards

/**
 * Type guards are a way to narrow down the type of a variable in TypeScript.
 * They allow you to check the type of a variable at runtime and provide a more specific type based on that check.
 * Type guards can be implemented using the `typeof` operator, the `instanceof` operator,
 * or custom type guard functions.
 *  Using `in` or Equality Narrowing( `===`, `!==`, `==`, `!=`)
 */

// Example of using `typeof` for type guards
console.log("---------------------- Type Guards with typeof ----------------------");

let value: string | number = "Hello, TypeScript!";
// let value: string | number = 42;

const isString = (value: string | number): value is string => {
  return typeof value === "string";
}

if (isString(value)) {
  console.log(`The value is a string: ${value.toUpperCase()}`);
} else {
  console.log(`The value is not a string, it's a number: ${value}`);
}

// Example of using `instanceof` for type guards
console.log("---------------------- Type Guards with instanceof ----------------------");

class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} says Woof!`);
  }
}

class Cat extends Animal {
  meow() {
    console.log(`${this.name} says Meow!`);
  }
}

const isDog = (animal: Animal): animal is Dog => {
  return animal instanceof Dog;
}
const isCat = (animal: Animal): animal is Cat => {
  return animal instanceof Cat;
}

const animals: Animal[] = [
  new Dog("Buddy"),
  new Cat("Whiskers"),
  new Dog("Max"),
  new Cat("Mittens"),
  new Animal("Horse")
];

animals.forEach(animal => {
  if (isDog(animal)) {
    animal.bark(); // Type narrowed to Dog
  } else if (isCat(animal)) {
    animal.meow(); // Type narrowed to Cat
  } else {
    console.log(`Unknown animal: ${animal.name}`); // Type narrowed to base Animal
  }
});

// Example of using custom type guard functions
console.log("---------------------- Custom Type Guard Functions ----------------------");

interface Car {
  type: 'car';
  wheels: number;
  drive(): void;
}

interface Boat {
  type: 'boat';
  sails: number;
  sail(): void;
}

type Vehicle = Car | Boat;

function isCar(vehicle: Vehicle): vehicle is Car {
  return vehicle.type === 'car'; // Type predicate
}

function operateVehicle(vehicle: Vehicle) {
  if (isCar(vehicle)) {
    console.log(`This car has ${vehicle.wheels} wheels`);
    vehicle.drive();
  } else {
    console.log(`This boat has ${vehicle.sails} sails`);
    vehicle.sail();
  }
}

const myCar: Car = { type: 'car', wheels: 4, drive: () => console.log("Driving...") };
const myBoat: Boat = { type: 'boat', sails: 2, sail: () => console.log("Sailing...") };

operateVehicle(myCar);
operateVehicle(myBoat);

// Example using 'in' operator
console.log("---------------------- Type Guards with 'in' operator ----------------------");

interface Circle {
  kind: 'circle';
  radius: number;
}

interface Square {
  kind: 'square';
  sideLength: number;
}

function calculateArea(shape: Circle | Square) {
  if ('radius' in shape) {
    return Math.PI * shape.radius ** 2;   // Type narrowed to Circle
  } else {
    return shape.sideLength ** 2;         // Type narrowed to Square
  }
}

console.log("Circle area:", calculateArea({ kind: 'circle', radius: 5 }));
console.log("Square area:", calculateArea({ kind: 'square', sideLength: 4 }));

// Example of Equality Narrowing
console.log("---------------------- Equality Narrowing ----------------------");

function printValue(x: string | number, y: string | boolean) {
  if (x === y) {
    // Both are strings here
    console.log(x.toUpperCase(), y.toLowerCase());
  } else {
    console.log("Values are different types");
  }
}

printValue("hello", "hello"); // Both strings
printValue(42, true); // Different types