# TypeScript: 2025 review

## Table of Contents
1. [Introduction](#introduction)
2. [TypeScript vs JavaScript](#typescript-vs-javascript)
3. [Core Syntax & Types](#core-syntax--types)
4. [Functions & Interfaces](#functions--interfaces)
5. [Classes & OOP](#classes--oop)
6. [Advanced Types](#advanced-types)
7. [Compiler & Configuration](#compiler--configuration)
8. [Testing Setup](#testing-setup)
9. [Best Practices](#best-practices)
10. [Common Errors](#common-errors)

---

## Introduction
TypeScript is a **statically typed superset of JavaScript** that compiles to plain JavaScript. Developed by Microsoft, it adds:
- Optional static typing
- Modern JavaScript features (ES6+)
- Advanced tooling (IntelliSense, refactoring)

### Key Features
- **Type Safety**: Catch errors at compile time
- **OOP Support**: Classes, interfaces, inheritance
- **Modern JS**: Async/await, destructuring, decorators
- **Rich Ecosystem**: `@types` packages for 3rd-party libraries

---

## TypeScript vs JavaScript
| Feature                | JavaScript          | TypeScript          |
|------------------------|---------------------|---------------------|
| Typing                 | Dynamic             | Static (optional)   |
| Compilation            | Runtime errors      | Compile-time checks |
| OOP Features           | Basic               | Advanced            |
| Tooling Support        | Limited             | Rich (VS Code)      |
| Adoption               | Browsers/Node.js    | Large-scale apps    |

---

## Core Syntax & Types
### Primitive Types
```typescript
let isAdmin: boolean = true;
let price: number = 9.99;
let username: string = "Alice";

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuples
let user: [string, number] = ["Alice", 30];

// Enums (Modern)
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}
```

### Special Types
```typescript
let unknownValue: unknown;  // Safer alternative to 'any'
let nullable: string | null = null;

// Type Assertions
const element = document.getElementById("root") as HTMLElement;
```

---

## Functions & Interfaces
### Type-Safe Functions
```typescript
// Optional parameters & default values
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}

// Arrow function with type
const add = (a: number, b: number): number => a + b;
```

### Interfaces
```typescript
interface User {
  id: number;
  readonly username: string;  // Immutable
  email?: string;  // Optional
}

function createUser(user: User): void {
  // Implementation
}

// Extending interfaces
interface Admin extends User {
  permissions: string[];
}
```

---

## Classes & OOP
```typescript
class Animal {
  constructor(public name: string, protected age: number) {}

  move(distance: number = 0): void {
    console.log(`${this.name} moved ${distance}m`);
  }
}

class Dog extends Animal {
  private _breed: string;

  constructor(name: string, age: number, breed: string) {
    super(name, age);
    this._breed = breed;
  }

  bark(): void {
    console.log("Woof!");
  }

  // Getter
  get breed(): string {
    return this._breed;
  }
}
```

---

## Advanced Types
### Union & Intersection
```typescript
type ID = string | number;
type Coord = { x: number } & { y: number };
```

### Generics
```typescript
function identity<T>(arg: T): T {
  return arg;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

class Box<T> {
  constructor(public content: T) {}
}
```

### Utility Types
```typescript
type PartialUser = Partial<User>;  // All properties optional
type ReadonlyUser = Readonly<User>;
type UserPreview = Pick<User, "id" | "username">;
type UserWithoutId = Omit<User, "id">;
```

### Type Guards
```typescript
// Type predicate
function isString(value: unknown): value is string {
  return typeof value === "string";
}

// Discriminated Union
type Shape = 
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };
```

---

## Compiler & Configuration
### tsconfig.json Essentials
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "moduleResolution": "node",
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

### Key Compiler Options
- **target**: Modern ES versions (ES2022)
- **module**: ESNext for modern apps, CommonJS for Node.js
- **strict**: Enable all strict checks
- **baseUrl/paths**: Module aliases
- **declaration**: Generate .d.ts files

---

## Testing Setup
### Excluding Test Files
```json
"exclude": ["**/*.spec.ts", "**/*.test.ts"]
```

### Test-Specific Config (tsconfig.spec.json)
```json
{
  "extends": "./tsconfig.json",
  "include": ["**/*.spec.ts"],
  "compilerOptions": {
    "types": ["jest"]
  }
}
```

---

## Best Practices
1. **Enable Strict Mode**: Always set `"strict": true`
2. **Avoid `any`**: Use `unknown` with type guards
3. **Use Type Inference**: Don't over-annotate
   ```typescript
   const numbers = [1, 2, 3];  // Inferred as number[]
   ```
4. **Leverage Utility Types**: Reduce boilerplate
5. **Modern Features**:
   ```typescript
   // Optional chaining
   const street = user?.address?.street;
   
   // Nullish coalescing
   const page = inputPage ?? 1;
   
   // Readonly arrays
   const colors: ReadonlyArray<string> = ["red", "green"];
   ```

---

## Common Errors
| Error Message                          | Solution                          |
|----------------------------------------|-----------------------------------|
| **Object is possibly 'null'**          | Use optional chaining (`?.`)      |
| **Type 'X' is missing property 'Y'**   | Use type assertion or narrowing   |
| **Cannot find module 'X'**             | Install `@types/X`                |
| **'this' implicitly has type 'any'**   | Enable `noImplicitThis`           |
| **Parameter has type 'any'**           | Enable `noImplicitAny`            |

---

**Pro Tip**: Always use the [TypeScript Playground](https://www.typescriptlang.org/play) to experiment with types!

[Official Handbook →](https://www.typescriptlang.org/docs/handbook)
```

---