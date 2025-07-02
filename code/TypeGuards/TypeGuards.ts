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


// Type guard with interfaces:
console.log("------------------------ Type guard with interfaces ------------------------")

enum Tags{
  Employee = "Employee",
  Manager = "manager"
}

interface Person{
  readonly id: number | string;
  username : string;
  age: Number;  
  getDetails() :void;
}

interface Person{
  email: string;
  address: (string | number)[] 
}



const MedAziz: Person={ //interface merging
  id: "1",
  username: "Med AZiz",
  age: 27,
  email:"aziz@mail.xyz",
  address:["Tunisia.Siliana","Bargou", 6100],
  getDetails() {
      return `User with id:${this.id}, username:${this.username}, age: ${this.age}, email: ${this.email}, located-in: ${this.address}`
  },
}


interface Employee extends Person{
  tag: Tags.Employee,
  slaray: number,
  occupation: string,
  department: string,
}

const Bilel: Employee= {
  tag: Tags.Employee,
  id: "2",
  username: "Bilel Nahal",
  age: 27,
  email:"biN@email.xyz",
  address: ["Tunisia.Siliana","Bargou", 6100],
  slaray: 2000,
  occupation: "Nuers",
  department: "Medical",
  getDetails(){
    return `User with id:${this.id}, username:${this.username}, age: ${this.age}, ocuppation:${this.occupation}, department: ${this.department}, email: ${this.email}, located-in: ${this.address}`
  }
}

const Tarek: Employee = {
  tag: Tags.Employee,
  id: "4",
  username: "Tarek Ben Salah",
  age: 30,
  email: "Tarek@email.xyz",
  address: ["Tunisia.Tunis", "Centre Ville", 1000],
  slaray: 2500,
  occupation: "Developer",
  department: "IT",
  getDetails() {
    return `User with id:${this.id}, username:${this.username}, age: ${this.age}, ocuppation:${this.occupation}, department: ${this.department}, email: ${this.email}, located-in: ${this.address}`;
  }
};

const Ghofran: Employee = {
  tag: Tags.Employee,
  id: "5",
  username: "Ghofran Trabelsi",
  age: 28,
  email: "Ghofran@email.xyz",
  address: ["Tunisia.Sfax", "Sakiet Ezzit", 3021],
  slaray: 2200,
  occupation: "Designer",
  department: "Creative",
  getDetails() {
    return `User with id:${this.id}, username:${this.username}, age: ${this.age}, ocuppation:${this.occupation}, department: ${this.department}, email: ${this.email}, located-in: ${this.address}`;
  }
};

const Chiheb: Employee = {
  tag: Tags.Employee,
  id: "6",
  username: "Chiheb Kacem",
  age: 35,
  email: "Chiheb@email.xyz",
  address: ["Tunisia.Bizerte", "Menzel Bourguiba", 7050],
  slaray: 2700,
  occupation: "QA Engineer",
  department: "Quality Assurance",
  getDetails() {
    return `User with id:${this.id}, username:${this.username}, age: ${this.age}, ocuppation:${this.occupation}, department: ${this.department}, email: ${this.email}, located-in: ${this.address}`;
  }
};


interface Manager extends Person{
  tag: Tags.Manager,
  slaray: number,
  occupation: string,
  department: string,
  Managing():void;
}

const Chedli: Manager= {
  tag: Tags.Manager,
  id: "3",
  username: "Chedli Janhani",
  age: 27,
  email:"chedli@email.xyz",
  address: ["Tunisia.Soliman",],
  slaray: 4500,
  occupation: "Project Manager",
  department: "Dev production",
  getDetails(){
    return `User with id:${this.id}, username:${this.username}, age: ${this.age}, ocuppation:${this.occupation}, department: ${this.department}, email: ${this.email}, located-in: ${this.address}`
  },
  Managing(){
    return `${this.username}, is the Manager of the ${this.department} department.`
  }
}




const isEmployee =(person: Person): person is Employee => {
  return (person as Employee).tag === Tags.Employee;
}

const isManager = (person: Person):  person is Manager => {
  return (person as Manager).tag === Tags.Manager;
}

// GetPersonDaitials

const getPersonDetails = (p: Person): void => {
    if (isEmployee(p)) {
        console.log(p.getDetails());
    } else if (isManager(p)) { 
        console.log(p.getDetails());
        console.log(p.Managing());
    } else {
        console.log('Not listed!!');
    }
}

getPersonDetails(Chedli);
getPersonDetails(Bilel);
getPersonDetails(Ghofran);
getPersonDetails(Tarek);
getPersonDetails(Chiheb);