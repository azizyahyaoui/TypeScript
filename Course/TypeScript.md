# TypeScript 2025 review



> Yahyaoui Med Aziz | 06172025.

<details>
  <summary>Links to resources:</summary>
  
  - Docks:
    - [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- Videos:
   - [Learn TypeScript - Full Course for Beginners](https://youtu.be/SpwzRDUQ1GI)
</details>


## **Introduction**

### Introduction to TypeScript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, meaning it adds new features to JavaScript while still being able to run any JavaScript code. TypeScript’s main goals are to bring optional static typing and other features to JavaScript to improve developer productivity and code quality.

#### Key Features of TypeScript
- **Static Typing**: You can declare types for variables, function parameters, and return values.
- **Interfaces and Enums**: Adds support for interfaces and enumerations.
- **Classes and Inheritance**: Provides enhanced support for object-oriented programming.
- **Modules**: Supports modular programming with ES6 module syntax.
- **Tooling**: Better tooling with editors and IDEs, including IntelliSense and code navigation.
- **Type Safety**: Catch errors at compile time
- **OOP Support**: Classes, interfaces, inheritance
- **Modern JS**: Async/await, destructuring, decorators
- **Rich Ecosystem**: `@types` packages for 3rd-party libraries

### JavaScript vs. TypeScript

#### JavaScript
- Dynamically typed
- No compile-time type checking
- Limited support for modern programming paradigms like OOP and interfaces
- Simplicity and flexibility, which can lead to runtime errors

#### TypeScript
- Statically typed (with optional typing)
- Compile-time type checking
- Supports modern programming paradigms (OOP, interfaces, generics)
- Better tooling support
- Transpiles to JavaScript, ensuring compatibility with existing JavaScript codebases and environments

| Feature                | JavaScript          | TypeScript          |
|------------------------|---------------------|---------------------|
| Typing                 | Dynamic             | Static (optional)   |
| Compilation            | Runtime errors      | Compile-time checks |
| OOP Features           | Basic               | Advanced            |
| Tooling Support        | Limited             | Rich (VS Code)      |
| Adoption               | Browsers/Node.js    | Large-scale apps    |

---

## **TypeScript Compiler (`tsc`)**

The TypeScript compiler (`tsc`) is used to compile TypeScript code into JavaScript. You can install it globally using npm:

```bash
npm install -g typescript
```

### Compiling TypeScript Files
To compile a TypeScript file (`example.ts`), use the following command:

```bash
tsc example.ts
```

This will generate an equivalent JavaScript file (`example.js`).

```bash
node example.ts
```

### tsconfig.json

For larger projects, it's convenient to use a `tsconfig.json` file to manage TypeScript project settings. You can create one using:

```bash
tsc --init
```

This will create a `tsconfig.json` file with default settings. You can customize it as needed. Here’s an example:

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

#### Running TypeScript

To compile the project using `tsconfig.json`, simply run:

```bash
tsc
```

This will compile all the TypeScript files specified in the `include` section of `tsconfig.json` and output the JavaScript files to the `outDir`.


#### tsconfig json file:

> The `tsconfig.json` file in TypeScript is used to configure how the TypeScript compiler (`tsc`) behaves when it compiles your TypeScript code. This file is crucial for managing the settings of your TypeScript project, including compiler options, file paths, and other configurations.

Here’s a more detailed overview of the `tsconfig.json` file, including some of the most common configurations:

#### Basic Structure of `tsconfig.json`
The `tsconfig.json` file is a JSON file that contains various compiler options and settings. A basic `tsconfig.json` might look like this:

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

#### Common `compilerOptions`

1. **target**
   - Specifies the ECMAScript target version: `"es5"`, `"es6"`, `"es2015"`, `"es2016"`, `"es2017"`, `"es2018"`, `"es2019"`, `"es2020"`, `"es2021"`, `"esnext"`.
   ```json
   "target": "es6"
   ```

2. **module**
   - Specifies the module system: `"commonjs"`, `"amd"`, `"umd"`, `"system"`, `"es6"`, `"es2015"`, `"esnext"`, `"none"`.
   ```json
   "module": "commonjs"
   ```

3. **strict**
   - Enables all strict type-checking options.
   ```json
   "strict": true
   ```

4. **outDir**
   - Redirects the output structure to the specified directory.
   ```json
   "outDir": "./dist"
   ```

5. **rootDir**
   - Specifies the root directory of input files.
   ```json
   "rootDir": "./src"
   ```

6. **esModuleInterop**
   - Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports.
   ```json
   "esModuleInterop": true
   ```

7. **forceConsistentCasingInFileNames**
   - Ensures that file names are treated consistently across the project.
   ```json
   "forceConsistentCasingInFileNames": true
   ```

8. **skipLibCheck**
   - Skips type checking of all declaration files (`.d.ts`).
   ```json
   "skipLibCheck": true
   ```

9. **sourceMap**
   - Generates corresponding `.map` files.
   ```json
   "sourceMap": true
   ```

10. **removeComments**
    - Removes comments from the output.
    ```json
    "removeComments": true
    ```

#### `include` and `exclude`
These settings control which files are included in the project and which are excluded.

- **include**: Specifies a list of glob patterns to include in the project.
  ```json
  "include": ["src/**/*"]
  ```

- **exclude**: Specifies a list of glob patterns to exclude from the project.
  ```json
  "exclude": ["node_modules", "**/*.spec.ts"]
  ```

#### Example Configuration

Here’s an example `tsconfig.json` for a typical Node.js project:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/*.test.ts"]
}
```

### Advanced Configurations

1. **baseUrl and paths**
   - Configure module resolution.
   ```json
   "baseUrl": "./",
   "paths": {
     "@app/*": ["src/app/*"]
   }
   ```

2. **lib**
   - Specify a list of library files to include in the compilation.
   ```json
   "lib": ["es2017", "dom"]
   ```

3. **typeRoots**
   - Specify a list of folders to include type definitions from.
   ```json
   "typeRoots": ["./node_modules/@types", "./custom_typings"]
   ```

4. **declaration**
   - Generates corresponding `.d.ts` files.
   ```json
   "declaration": true
   ```

#### Creating `tsconfig.json`
You can create a `tsconfig.json` file with default values by running:
```bash
tsc --init
```

This will generate a `tsconfig.json` file with a comprehensive list of commented options.

Understanding and configuring `tsconfig.json` appropriately is essential for managing your TypeScript project effectively. It ensures that your code is compiled with the correct settings, making it easier to maintain and scale.

In a `tsconfig.json` file, patterns like `**/*.spec.ts` are often used in the `exclude` array to exclude test files from being compiled. The `.spec.ts` extension typically indicates a TypeScript file that contains unit tests written with testing frameworks such as Jasmine, Mocha, or Jest.

#### Using `exclude` in `tsconfig.json`

When you have files that you don't want to be included in the compilation, such as test files, you can use the `exclude` property. This helps in reducing compile time and ensures that only the relevant files are part of the build output.

Here's an example configuration:

```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/*.test.ts", "**/*.spec.ts"]
}
```

#### Explanation
- **include**: Specifies the files or directories to be included in the compilation. In this case, it includes all files in the `src` directory.
- **exclude**: Specifies the files or directories to be excluded from the compilation. Common patterns include:
  - `node_modules`: Excludes all files in the `node_modules` directory.
  - `**/*.test.ts`: Excludes all files ending in `.test.ts` in any directory.
  - `**/*.spec.ts`: Excludes all files ending in `.spec.ts` in any directory.

#### Why Exclude Test Files?

1. **Reduce Compile Time**: Excluding test files can significantly reduce the time it takes to compile your TypeScript project, especially in large projects with many tests.
2. **Separate Concerns**: Keeps the build output clean and focused on the production code. Test files are typically only relevant in the development and testing phases.
3. **Avoid Compilation Errors**: Test files might have dependencies or setup code that isn’t needed or present in the production build, potentially causing unnecessary compilation errors.

#### Example of a Test File
A `.spec.ts` file might look like this:

```typescript
import { add } from './math';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

#### Including Test Files Separately
If you need to compile the test files separately, you can create another `tsconfig.json` specifically for tests:

**tsconfig.json** (main config)
```json
{
  "compilerOptions": {
    "target": "es2017",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "outDir": "./dist",
    "rootDir": "./src",
    "sourceMap": true
  },
  "include": ["src"],
  "exclude": ["node_modules", "**/*.test.ts", "**/*.spec.ts"]
}
```

**tsconfig.spec.json** (for test files)
```json
{
  "extends": "./tsconfig.json",
  "include": ["src/**/*.spec.ts", "src/**/*.test.ts"]
}
```

You can compile the test configuration separately using:

```bash
tsc -p tsconfig.spec.json
```

This approach helps keep your configurations modular and focused on specific aspects of your project.

---

## TypeScript Syntax

### **Primitive Types**

```typescript

let isAuth: boolean = false;
let isAdmin: boolean = true;
let age: number = 25;
let price: number = 9.99;
let bigNumber: bigint = 12345678901234567890n;
let username: string = "Alice";
//let name: string = "John";  // ❌ the word name is considered as a global scope variable. And there is more. 
let list: number[] = [1, 2, 3, 4];
let tuple: [string, number] = ["hello", 10];

// Arrays
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"]; //  Array using generic type 

// Tuples
let user: [string, number] = ["Alice", 30];

```

#### **Tuples :The difference** between **arrays** and **tuples** in **JavaScript vs TypeScript**



##### 🤹‍♂️ JavaScript

In **JavaScript**, there's **only one structure** for ordered lists:

```js
const arr = [1, "hello", true]; // An array with mixed types
```

* There's no native concept of **tuples**
* You can put anything in an array — there's **no enforcement of type or length**

---

##### 🎯 TypeScript

TypeScript introduces **tuples** to give arrays **fixed structure, types, and order**.

##### ✅ Arrays in TS

```ts
let languages: string[] = ["JS", "TS"];
let scores: Array<number> = [85, 90, 78];
```

* ✅ **Homogeneous**: all elements are the same type
* ✅ **Flexible size**: You can add/remove elements dynamically
* ⚠️ TypeScript checks the *type* of each item, but **not its position**

---

##### ✅ Tuples in TS

```ts
let person: [number, string, boolean] = [1, "Aziz", true];
```

* ✅ **Fixed length**
* ✅ **Fixed types per position**
* ✅ **Order matters**
* 🚫 Cannot add elements that don't match the structure without using workarounds

Compare the two:

| Feature        | Array                           | Tuple                               |
| -------------- | ------------------------------- | ----------------------------------- |
| Length         | Dynamic (can grow/shrink)       | Fixed (length is enforced)          |
| Type per index | Same type for all elements      | Specific types per position         |
| Index safety   | Type checked but not positional | Type & position both are enforced   |
| Use cases      | Lists, collections              | Structured data, like rows or pairs |

---

##### 🧠 Example Use Case

```ts
// Using array
let error1: string[] = ["404", "Not Found"]; // Works, but no enforcement on order

// Using tuple
let error2: [string, string] = ["404", "Not Found"]; // Enforced: [code, message]

// You can't do this:
let wrong: [string, string] = ["Not Found", "404"]; // ❌ Type mismatch by position
```

---

##### 🔥 Advanced: Tuples with Optional or Rest

```ts
let point: [number, number, number?] = [10, 20]; // Optional third value
let logs: [string, ...number[]] = ["start", 1, 2, 3]; // Tuple + rest elements
```

Tuples can get fancy, and they’re super useful for:

* Returning multiple values from a function
* Representing **CSV rows**, coordinate points, or key-value pairs

---

##### ✅ Summary Brick

| Feature         | Array | Tuple             |
| --------------- | ----- | ----------------- |
| Order enforced? | ❌     | ✅              |
| Length fixed?   | ❌     | ✅              |
| Type per item?  | Same  | Precise           |
| Use case        | Lists | Structured values |

---


### **Enums:**

Enums in TypeScript are used to define a set of named constants. They can be numeric or string-based, and are useful for modeling roles, states, or fixed options.

```ts

//Classic Numeric Enums
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Enums (Modern)
enum Status {
  Active = "ACTIVE",
  Inactive = "INACTIVE"
}

```

#### 🔢 Classic Numeric Enum

```ts
enum Color {
  Red,    // 0
  Green,  // 1
  Blue    // 2
}

let favoriteColor: Color = Color.Red;
console.log(favoriteColor); // Output: 0
console.log(Color[0]);      // Output: "Red"
```

* Auto-incrementing numbers starting from 0
* Supports reverse mapping (value → name)

---

#### 💬 String Enum

```ts
enum UserRole {
  Admin = "Admin",
  User = "User",
  Guest = "Guest"
}

let role: UserRole = UserRole.Admin;
console.log(role); // Output: "Admin"
```

* Each enum value is a string
* No reverse mapping
* More readable and recommended for API roles, permissions, etc.

---

#### ⚔️ Enum vs Union Type

```ts
// Union type (alternative)
type UserRoleType = "Admin" | "User" | "Guest";

let role: UserRoleType = "Admin";
```

| Feature                | Union Type (`"Admin" | "User"`) | Enum (`UserRole.Admin`)   |
|------------------------|-------------------------------|-----------------------------|
| Simpler syntax         | ✅ Yes                        | ❌ Verbose                 |
| Autocomplete support   | ✅ Yes                        | ✅ Yes                     |
| Prevents typos         | ✅ Yes                        | ✅ Yes                     |
| Namespace access       | ❌ No                         | ✅ Yes                     |
| Reverse mapping        | ❌ No                         | ✅ Yes (numeric enums only)|
| Runtime JS output      | ❌ No (disappears)            | ✅ Yes (code generated)    |
| Use in APIs/DB fields  | ✅ Excellent                  | ✅ Excellent               |

---

#### 🧠 When to Use What?

✅ Use **Union Types** when:

* You want clean and simple type safety
* No need for values at runtime
* Ideal for lightweight role/type strings

✅ Use **Enums** when:

* You want a centralized structure
* Need organized constants
* Prefer namespacing or working with numeric values

---

#### 🔥 Pro Combo: Const Object + Literal Inference

```ts
const UserRole = {
  Admin: "Admin",
  User: "User",
  Guest: "Guest"
} as const;

type UserRoleType = typeof UserRole[keyof typeof UserRole];
// "Admin" | "User" | "Guest"
```

✅ Gives you:

* Enum-like object for runtime usage
* Union-like type safety with no JS overhead

---

#### ✅ Real-World Examples:

```ts
enum HttpStatus {
  OK = 200,
  NotFound = 404,
  Unauthorized = 401
}

enum FilePermission {
  Read = 1,
  Write = 2,
  Execute = 4
}

// You can combine flags:
let perms = FilePermission.Read | FilePermission.Write;
```

---

### **Objects in TypeScript**

TypeScript lets you define the shape of objects with explicit property types, optional fields, and immutability. This improves code safety and editor support.

#### **Basic Object Type**

```ts
let user: {
  username: string;
  email: string;
  age: number;
  isActive: boolean;
} = {
  username: "Aziz Yahyaoui",
  email: "email@email.xyz",
  age: 27,
  isActive: true
};
```

- All properties are required and strictly typed.
- TypeScript will error if you miss a property or use the wrong type.

---

#### **Objects with Optional Properties**

Use `?` to mark properties as optional.

```ts
let product: {
  name: string;
  price: number;
  description?: string; // Optional property
} = {
  name: "Laptop",
  price: 1200
  // description is optional
};
```

- You can omit `description` when creating the object.
- TypeScript will enforce the type if you provide it.

---

#### **Objects with Readonly Properties**

The `readonly` modifier prevents reassignment after initialization, making objects (or properties) immutable.

```ts
let config: {
  readonly apiUrl: string;
  timeout: number;
} = {
  apiUrl: "https://api.example.com",
  timeout: 5000
};

// config.apiUrl = "https://another.com"; // ❌ Error: Cannot assign to 'apiUrl' because it is a read-only property.
```

- Use `readonly` for constants, IDs, or settings that should never change.

---

#### **Index Signatures**

For objects with dynamic keys, use index signatures:

```ts
let scores: { [username: string]: number } = {
  "alice": 95,
  "bob": 88
};
```

- Allows any string key with a number value.

---

#### **Nested Objects**

You can nest object types for more complex structures:

```ts
let order: {
  id: number;
  product: {
    name: string;
    price: number;
  };
  quantity: number;
} = {
  id: 1,
  product: { name: "Phone", price: 800 },
  quantity: 2
};
```

---

#### **Type Aliases for Objects**

For reusability and cleaner code, use `type` or `interface`:

```ts
type User = {
  username: string;
  email: string;
  age: number;
  isActive: boolean;
};

let admin: User = {
  username: "Admin",
  email: "admin@example.com",
  age: 30,
  isActive: true
};
```

---

#### 🧠 When to Use Inline vs. Reusable Types

| Scenario                         | Use Inline Object | Use `type`/`interface` |
| -------------------------------- | ----------------- | ---------------------- |
| One-time use                     | ✅ Yes            | ❌ Not necessary        |
| Reuse across variables/functions | ❌ No             | ✅ Recommended          |
| Cleaner code in large projects   | ❌ Cluttered      | ✅ Clean and DRY        |

---

#### **Summary**

- Use inline object types for quick, one-off structures.
- Use `type` or `interface` for reusable, scalable, and maintainable code.
- Leverage optional and readonly properties for flexibility and safety.
- Index signatures and nested objects help model complex data.

---


### **Special Types**
> TypeScript provides a few "special types" that help handle uncertain or edge-case scenarios more safely.

```ts
let unknownValue: unknown;  // Safer alternative to 'any'
let nullable: string | null = null;
let undefinedValue: undefined = undefined; // undefined type

// Type Assertions
const element = document.getElementById("root") as HTMLElement;
let anotherStringLength: number = (<string>anotherValue).length; // Using angle brackets syntax
```

#### 🔒 `unknown`

```ts
let unknownValue: unknown;
```

* Similar to `any`, but **stricter**: you can't use it directly without checking its type first
* Forces you to **narrow** the type before using it (safer)

```ts
if (typeof unknownValue === "string") {
  console.log(unknownValue.toUpperCase()); // ✅ Safe now
}
```

---

#### 🎯 `any`

```ts
let something: any;
```

* Disables all type checking
* ⚠️ Avoid using unless you *must* (e.g., working with legacy code or dynamic JSON)

---

#### 🌫️ `null` & `undefined`

```ts
let nullable: string | null = null;
let maybe: number | undefined = undefined;
```

* Used for **optional values**
* Combine with union types to allow absence of a value

---

#### 🧙 Type Assertions (aka Type Casting)

```ts
const element = document.getElementById("root") as HTMLElement;
```

* You're telling the compiler: “I *know* better — trust me, this is an HTMLElement”
* Used when TypeScript can't infer types correctly (especially with DOM or external data)

```ts
const input = document.querySelector("#name") as HTMLInputElement;
console.log(input.value);
```

#### 🧪 Alternate Syntax:

```ts
const el = <HTMLElement>document.getElementById("root");
```

⚠️ Not allowed in `.tsx` (React) — prefer `as` in those cases

---

#### 💡 Tips

| Type        | Description                      | Safety          |
| ----------- | -------------------------------- | --------------- |
| `any`       | Skip type checking               | ❌ Dangerous     |
| `unknown`   | Safer, requires type checking    | ✅ Safer         |
| `null`      | Explicitly represents "no value" | ✅ Common        |
| `undefined` | Usually means "not assigned yet" | ✅ Common        |
| `as`        | Type assertion                   | ✅ Use carefully |


---



### **Functions**

> TypeScript brings **type safety**, **parameter control**, and **better editor support** to JavaScript functions.


#### 🔹 Basic Function Typing

```ts
function add(x: number, y: number): number {
  return x + y;
}

let result: number = add(5, 10);
```

* Parameters and return value are strictly typed
* TypeScript will throw an error if types mismatch

---

#### 🔸 Optional Parameters

```ts
function greet(name: string, title?: string): string {
  return title ? `${title} ${name}` : name;
}
```

* `?` makes `title` optional
* Optional parameters **must come last**

---

#### 🔸 Default Parameters

```ts
function greet(name: string, title: string = "Mr."): string {
  return `${title} ${name}`;
}
```

* Default values are assigned if not passed
* You can combine optional + default, but only in order

---

#### 🔹 Arrow Function with Types

```ts
const sum = (a: number, b: number): number => a + b;
```

* Clean and concise
* Same typing rules apply
* Ideal for callbacks, array methods, etc.

---

#### 🧱 Function Type Aliases

You can create a reusable function type:

```ts
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (x, y) => x * y;
```

---

#### 🧙‍♂️ Anonymous & Callback Functions

```ts
const numbers = [1, 2, 3];

numbers.forEach((n: number) => {
  console.log(n * 2);
});
```

---

#### 🧠 Notes

| Feature               | Example                                      |
| --------------------- | -------------------------------------------- |
| Typed return value    | `(): number`                                 |
| Optional param        | `name?: string`                              |
| Default param         | `name: string = "Aziz"`                      |
| Arrow function typing | `(a: number, b: number): number =>`          |
| Function type alias   | `type Op = (x: number, y: number) => number` |

---

####  `void`, `never`

```ts
function log(message: string): void {
  console.log(message);
}

function fail(msg: string): never {
  throw new Error(msg);
}
```

* `void` → function returns **nothing**
* `never` → function **never returns** (e.g., throws an error or infinite loop)

---

#### **Function overloading**


Function overloading lets you define **multiple function signatures** for a single function — each with different parameters or return types.

It’s TypeScript-only (not available in plain JS), and it helps describe **complex function behavior clearly and safely**.

---

##### 📦 Basic Example

```ts
// Overload signatures
function greet(person: string): string;
function greet(person: string, age: number): string;

// Implementation
function greet(person: string, age?: number): string {
  return age ? `Hello ${person}, age ${age}` : `Hello ${person}`;
}

// Usage
greet("Aziz");          // OK
greet("Yahyaoui", 27);  // OK
```

✅ TypeScript knows the different versions you support
❌ If you try: `greet("Aziz", "27")` → ❌ TS will error

---

##### 🔍 Why Not Just Use Union Types?

You **can**, but you lose clarity:

```ts
function greet(person: string, age?: number | string): string {
  // 🤯 harder to reason about and less specific
}
```

✅ Overloads help TS give **smarter autocomplete**, type inference, and documentation support

---

##### 🧠 Real-World Example: `getUser`

```ts
type User = { id: number; name: string };

function getUser(id: number): User;
function getUser(username: string): User;

function getUser(param: number | string): User {
  if (typeof param === "number") {
    return { id: param, name: "ByID" };
  }
  return { id: 0, name: param };
}

const u1 = getUser(42);        // OK
const u2 = getUser("Aziz");    // OK
```

---

##### ⚠️ Rules of Overloading

* You write **multiple function declarations** (signatures)
* The **last function** is the actual implementation
* TypeScript will enforce that **only the declared signatures** are valid

---

##### ✅ Summary Brick

| Feature             | Description                                 |
| ------------------- | ------------------------------------------- |
| Multiple calls      | Define multiple valid signatures            |
| Safer code          | TypeScript enforces expected usage          |
| Better intellisense | Autocomplete varies by overload             |
| Union alt?          | Use when overloading becomes too repetitive |

---

#### Rest Parameters in TypeScript

---

##### 📦 Basic Example

```ts
function logMessages(...messages: string[]): void {
  messages.forEach((msg) => console.log(msg));
}

logMessages("Hello", "World", "TS is awesome");
// Output:
// Hello
// World
// TS is awesome
```

✅ The `...messages` is a **rest parameter**, allowing you to pass **any number of arguments**
✅ TypeScript enforces all args must be of the type `string`

---

##### 🧠 Use with Other Parameters

```ts
function greetAll(greeting: string, ...names: string[]): void {
  names.forEach((name) => console.log(`${greeting}, ${name}!`));
}

greetAll("Hey", "Aziz", "Yahyaoui", "SoftDev");
// Output:
// Hey, Aziz!
// Hey, Yahyaoui!
// Hey, SoftDev!
```

✅ You can combine normal and rest parameters — but the **rest must come last**

---

##### 🧪 Strong Typing with Tuples

You can go **next level** with tuple types + rest:

```ts
function formatCoordinates(...coords: [number, number]): string {
  const [x, y] = coords;
  return `X: ${x}, Y: ${y}`;
}

formatCoordinates(10, 25); // "X: 10, Y: 25"
```

✅ Only **two numbers allowed** — safe and strict

---

##### 🛑 Invalid Usage Examples

```ts
function wrong(...vals: string, msg: string) {} // ❌ Error: Rest param must be last
```

---

##### 💼 Real-World Use Case

```ts
type LogLevel = "info" | "warn" | "error";

function log(level: LogLevel, ...messages: string[]) {
  console.log(`[${level.toUpperCase()}]`, ...messages);
}

log("info", "Server started", "on port", "3000");
```

---

##### 🧱 Summary Brick

| Feature      | Syntax                          | Notes                           |
| ------------ | ------------------------------- | ------------------------------- |
| Rest params  | `(...args: T[])`                | Collects multiple args as array |
| Must be last | `param, ...rest`                | Rest param must be last         |
| Tuple combo  | `(...[x, y]: [number, number])` | Enforces fixed-length input     |
| Use case     | Logging, aggregation, APIs      | Flexible and clean              |


#### Functional Array Methods with TypeScript

---

##### 🔁 map()

**Transforms** each element in an array and returns a new array.

```ts
const numbers: number[] = [1, 2, 3];

const doubled: number[] = numbers.map((n: number): number => n * 2);
// [2, 4, 6]
```

✅ `map` returns a new array of the same length
✅ TypeScript infers types automatically from the input array
🧠 You can make the callback generic for custom transformations.

---

##### 🎯 filter()

**Filters** elements based on a condition, returns a new array.

```ts
const scores: number[] = [75, 92, 48, 89];

const passed: number[] = scores.filter((s: number): boolean => s >= 60);
// [75, 92, 89]
```

✅ TypeScript knows the output array will be the **same type** as the original
✅ Use this to narrow types, e.g., filtering out `null` or `undefined`.

---

##### 📦 reduce()

**Reduces** array to a single value by applying a function across elements.

```ts
const values: number[] = [1, 2, 3, 4];

const sum: number = values.reduce((acc: number, cur: number): number => acc + cur, 0);
// 10
```

✅ You must specify **initial value** and make sure **types match**
💡 `reduce` is powerful for building totals, transformations, even objects.

---

##### 💼 Real-World Example with Types

```ts
type User = {
  id: number;
  name: string;
  isActive: boolean;
};

const users: User[] = [
  { id: 1, name: "Aziz", isActive: true },
  { id: 2, name: "Yahyaoui", isActive: false },
  { id: 3, name: "John", isActive: true }
];

// ✅ Get names of active users
const activeNames: string[] = users
  .filter((u) => u.isActive)
  .map((u) => u.name);

// ✅ Count total active users
const totalActive: number = users.reduce(
  (count, user) => (user.isActive ? count + 1 : count),
  0
);
```

---

##### 🧠 Bonus: Strong Typing with Generics

```ts
function mapArray<T, U>(arr: T[], fn: (item: T) => U): U[] {
  return arr.map(fn);
}

const lengths = mapArray(["Aziz", "DevOps", "TS"], (word) => word.length);
// [5, 6, 2]
```

✅ Fully generic
✅ Reusable with any input/output types
🧠 Great for utility libraries

---

##### 🧱 Summary Brick

| Method   | Purpose                  | Return Type | Notes                             |
| -------- | ------------------------ | ----------- | --------------------------------- |
| `map`    | Transform items          | `T[] → U[]` | Always returns same-length array  |
| `filter` | Keep only matching items | `T[] → T[]` | Type-safe narrowing               |
| `reduce` | Collapse to single value | `T[] → R`   | Powerful, flexible, tricky typing |

---



### Union & Intersection
```typescript
type ID = string | number;
type Coord = { x: number } & { y: number };
```

#### Generics
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

#### Utility Types
```typescript
type PartialUser = Partial<User>;  // All properties optional
type ReadonlyUser = Readonly<User>;
type UserPreview = Pick<User, "id" | "username">;
type UserWithoutId = Omit<User, "id">;
```

#### Type Guards
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


### Interfaces
```typescript
interface Person {
    id: number;
    firstName: string;
    lastName: string;
    readonly username: string;  // Immutable
    email?: string;  // Optional
}

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "John", lastName: "Doe" };
console.log(greet(user));

// Extending interfaces
interface Admin extends User {
  permissions: string[];
}
```

### Classes & OOP
```typescript
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

let dog = new Dog("Rex");
dog.bark();
dog.move(10);
```


## **Tips to start with And Best Practices**

1. **Enable Strict Mode**: Always set `"strict": true`. This enforces best practices and helps catch potential errors early.

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
6. **Use IDEs with TypeScript Support**: VS Code, WebStorm, and other modern editors have excellent TypeScript support, including IntelliSense, type checking, and refactoring tools.

3. **Use Type Definitions**: For third-party libraries, use `@types` packages to get type definitions. For example:
   ```bash
   npm install --save @types/lodash
   ```

### Benefits of Strict Mode
1. **Eliminates Some JavaScript Silent Errors**: By changing them to throw errors.
2. **Fixes Mistakes That Make It Difficult for JavaScript Engines to Perform Optimizations**: By eliminating some silent errors, strict mode can sometimes lead to improved performance.
3. **Prohibits Some Syntax Likely to Be Defined in Future Versions of ECMAScript**: This prevents code from breaking in the future.

### Examples of Strict Mode

#### Enabling Strict Mode
```javascript
"use strict";
function myFunction() {
    // Code here will execute in strict mode.
}

// Alternatively, you can enable strict mode only within a specific function:
function anotherFunction() {
    "use strict";
    // Code here will execute in strict mode.
}
```

#### Key Differences in Strict Mode

1. **Variables Must Be Declared Before Use**:
   ```javascript
   "use strict";
   x = 3.14; // This will throw an error because x is not declared.
   ```

2. **Silent Errors Become Throw Errors**:
   ```javascript
   "use strict";
   var obj = Object.freeze({});
   obj.prop = 123; // This will throw an error in strict mode.
   ```

3. **Deleting Properties**:
   ```javascript
   "use strict";
   var obj = { prop: 1 };
   delete obj.prop; // This will throw an error in strict mode.
   ```

4. **Duplicate Parameter Names Are Not Allowed**:
   ```javascript
   "use strict";
   function sum(a, a, c) { // This will throw an error.
     return a + a + c;
   }
   ```

5. **Octal Literals Are Not Allowed**:
   ```javascript
   "use strict";
   var x = 010; // This will throw an error.
   ```

6. **`this` Keyword in Functions**:
   ```javascript
   "use strict";
   function myFunction() {
     console.log(this); // In strict mode, this will be undefined instead of the global object.
   }
   myFunction();
   ```

### Using Strict Mode in TypeScript
> TypeScript modules are always in strict mode, so you don't need to explicitly declare `"use strict";` in your TypeScript files. The TypeScript compiler will automatically insert the strict mode directive when it transpiles TypeScript to JavaScript.

> However, if you're working with plain JavaScript or older JavaScript code, adding `"use strict";` can help catch errors early and enforce a cleaner coding style.

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