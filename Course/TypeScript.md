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
```plaintext
+---------------------------+    +---------------------------+    +---------------------+
|                           |    |                           |    |                     |
|  Typescript File          |    |  Typescript Compiler      |    |  Javascript Code    |
|  (.ts or .tsx)            | -> |  Compilation/Transpiling  | -> |  (.js)              |
|                           |    |                           |    |                     |
|  Annotations, Types,      |    |                           |    |  Runs Everywhere    |
|  Generics                 |    |                           |    |                     |
+---------------------------+    +---------------------------+    +---------------------+
                                                                 |
                                                                 v
                                                     +---------------------+
                                                     |                     |
                                                     |  Vanilla JS Code    |
                                                     |                     |
                                                     +---------------------+
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
11. **`tsc --watch`**
  > If you want to auto-recompile on save with tsc --watch 

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

## **⚡ Using Vite with Vanilla TypeScript (Instead of `tsc`)**

For modern web projects, you can use [Vite](https://vitejs.dev/) to replace `tsc` and get:

- Instant dev server with hot reload 🔥
- TypeScript support out of the box
- Zero setup required

### 🚀 Why This Is a Great Addition

✅ **Beginner-friendly** — No config hell, instant feedback
✅ **Fast HMR** — You get live reloading *with no setup*
✅ **Scalable** — Can evolve into React, Vue, or Svelte later
✅ **Cleaner dev loop** — No need to run `tsc --watch`, Vite handles everything

It's perfect for learners *and* pros.

### ✅ Quick Setup

```bash
npm create vite@latest
# Choose: Vanilla → TypeScript
cd your-project-name
npm install
npm run dev
```

💥 You now have a blazing-fast dev server with TypeScript support — no manual config needed.

---

### 📁 Typical Vite + TS Structure

```
vite-ts-project/
├── index.html
├── main.ts
├── style.css
├── tsconfig.json
└── vite.config.ts
```

* `main.ts` is your entry point
* TypeScript compiles on-the-fly using Vite’s dev server
* No need to run `tsc` manually

---

### 🔄 Build Production Code

```bash
npm run build
```

* Vite uses `esbuild` under the hood = ultra-fast bundling
* Output goes to `/dist` folder

---

### 🧱 When to Use Vite

| Use Case                     | Use Vite?                         |
| ---------------------------- | --------------------------------- |
| Learning TS + DOM            | ✅                                 |
| Building fast frontend tools | ✅                                 |
| React/Vue/Svelte projects    | ✅                                 |
| Backend-only or CLI tools    | ❌ Use `tsc`, `tsup`, or `ts-node` |

---

### 🧠 Pro Tip

If you only want to **learn TypeScript without a bundler**, stick with:

```bash
tsc --watch
```

But if you're building UI or DOM-heavy projects:

```bash
npm create vite@latest
```

✨ Vite gives you the full experience, instantly.

---

##  **Before starting common landmines**

> I think before entering the TS world, you should know **common landmines** ESLint catches, especially those related to **globals** and tricky behaviors in JS/TS.

Here are some sneaky ones ESLint will often warn or error about:

---

### 🔥 **Global Identifiers (Especially in Browsers)**

These are **built-in browser globals** that can silently override or get overridden:

| Identifier                | Description                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| `name`                    | Refers to `window.name`                                                    |
| `event`                   | Refers to the global `event` object in some browsers (e.g., during events) |
| `length`                  | Can conflict with `arguments.length` or array-like objects                 |
| `status`                  | Refers to `window.status` (now mostly deprecated)                          |
| `location`                | Refers to `window.location`                                                |
| `top`, `parent`           | Refer to frame/window hierarchy                                            |
| `self`                    | Refers to `window.self`                                                    |
| `history`                 | Refers to `window.history`                                                 |
| `navigator`               | Refers to browser details like `navigator.userAgent`                       |
| `onload`, `onclick`, etc. | Built-in browser event handler properties                                  |

#### 🚫 ESLint rule: `"no-restricted-globals"`

If enabled, this rule will catch these and say something like:

> `'event' is a restricted global variable. Use a local variable instead.`

---

### 💥 Other JavaScript / TypeScript Pitfalls ESLint Covers

#### 1. **Shadowed Variables**

```ts
let count = 1;
function foo() {
  let count = 2; // ⚠️ May trigger `no-shadow`
}
```

#### 2. **Implicit `any`**

If using `@typescript-eslint/no-explicit-any` or `noImplicitAny` in `tsconfig.json`:

```ts
function greet(name) {
  console.log("Hello " + name); // ❌ Parameter has implicit 'any' type
}
```

#### 3. **Unused Variables**

```ts
const result = calculate(); // if not used, triggers `no-unused-vars`
```

#### 4. **Unawaited Promises**

With async functions:

```ts
fetchData(); // ❌ ESLint may say: "Promise returned is not handled"
```

#### 5. **Console usage**

Some configs treat `console.log()` as a code smell:

```ts
console.log("Debugging"); // ⚠️ via `no-console`
```

---

### ✅ Quick Fixes

* Rename identifiers like `name`, `event`, `status` → `userName`, `e`, `statusCode`
* Avoid using global-sounding names in the **global scope**
* Enable TypeScript's `strict` mode and let ESLint/TS do the rest
* Use local scope over global scope as much as possible

---

## **TypeScript Syntax**

### **Primitive Types**

```ts

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

#### 🔥Combo: Const Object + Literal Inference

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
#### 📌 Summary Table

| Feature         | Numeric Enum                    | String Enum                     |
| --------------- | ------------------------------- | ------------------------------- |
| Values          | Auto-assigned numbers (`0,1,2`) | Manually-assigned strings       |
| Reverse Mapping | ✅ Yes                           | ❌ No                            |
| Readability     | ❌ Less readable                 | ✅ More readable                 |
| Use case        | Internal flags, bitmasks        | API roles, DB values, UI labels |


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

#### 🧱 Function Type Aliases(will discussed Type Aliases in the next section)

You can create a reusable function type:

```ts
type MathOperation = (x: number, y: number) => number;

const multiply: MathOperation = (x, y) => x * y;
```

---

#### 🧙‍♂️ Anonymous & Callback Functions

Anonymous functions (also called lambda or inline functions) are functions without a name, often used as arguments to higher-order functions like `map`, `filter`, or `forEach`. They are concise and ideal for short, one-off operations.

```ts
const numbers = [1, 2, 3];

// Anonymous callback function with forEach
numbers.forEach((n: number) => {
  console.log(n * 2);
});

// Using map with an anonymous function
const squared = numbers.map((n) => n * n); // [1, 4, 9]
```

- Arrow functions provide a compact syntax and automatically capture the `this` context from their enclosing scope.
- TypeScript allows you to annotate parameter and return types for callbacks, improving safety and editor support.
- Anonymous functions are commonly used for event handlers, array methods, and quick callbacks.
- For complex logic or reuse, prefer named functions for clarity and maintainability.
- Typing callback parameters helps prevent runtime errors and improves code completion in editors.
- Arrow functions do **not** have their own `this`—they inherit it from the surrounding context, which is useful in many scenarios.

#### *🧠 Part Notes*

| Feature               | Example                                      |
| --------------------- | -------------------------------------------- |
| Typed return value    | `(): number`                                 |
| Optional param        | `name?: string`                              |
| Default param         | `name: string = "Aziz"`                      |
| Arrow function typing | `(a: number, b: number): number =>`          |
| Function type alias   | `type Op = (x: number, y: number) => number` |

---

#### **`void` and `never` Types**

> In TypeScript, `void` and `never` are **function-specific return types** that help clarify intent and improve type safety.

---

##### 🔹 `void`

- Indicates that a function **does not return any value**
- Commonly used for **side-effect functions** like logging, updating UI, or triggering events

```ts
function log(message: string): void {
  console.log(message);
}
```
✅ The function completes successfully, but doesn't return anything


##### 🔹 `never`

* Indicates that a function **never completes normally**
* Common in functions that:

  * **Always throw errors**
  * **Run infinite loops**
  * Are **used in exhaustive type checking**

```ts
function fail(errorMessage: string): never {
  throw new Error(errorMessage);
}
try {
  throwErrorFunc("This function will never return.");
} catch (error) {
  if (error instanceof Error) {
    console.error("Caught an error: " + error.message);
  } else {
    console.error("Caught an unknown error:", error);
  }
}
```

##### 🧠 Real-World Use Cases

| Type    | Use Case Example                      | Description                               |
| ------- | ------------------------------------- | ----------------------------------------- |
| `void`  | `onClickHandler(): void`              | UI event handler (side-effect only)       |
| `void`  | `logErrorToServer(msg: string): void` | Sends log, no return                      |
| `never` | `throwError(msg: string): never`      | Used for throwing errors                  |
| `never` | `exhaustiveSwitchCheck(value): never` | Type-safe fallthrough in `switch`         |
| `never` | `while (true) {}`                     | Infinite loop (e.g., worker loop, daemon) |

---

##### ✅ Summary

| Type   | Description                                  | Use For                          |
|--------|----------------------------------------------|----------------------------------|
| void   | Function returns no value                    | Logging, event handlers, side-effects |
| never  | Function never returns (throws or loops)     | Error functions, infinite loops, exhaustiveness checking |


- `void`: Indicates a function does not return a value (returns `undefined`).
- `never`: Indicates a function never returns (throws an error or has an infinite loop).
- Use `void` for functions that perform actions but don’t return anything.
- Use `never` for functions that always throw or never finish executing.

---

##### 🧠 Exhaustiveness Checking with `never`

> TypeScript can help you ensure that **all possible cases** are handled in a `switch` statement using the `never` type.
**Exhaustiveness Checking with `never`** — one of the *smartest* TypeScript patterns, especially when working with **discriminated unions**.


##### 🔷 Use Case: Discriminated Union

```ts
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number }
  | { kind: "rectangle"; width: number; height: number };

function getArea(shape: Shape): number {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
    case "rectangle":
      return shape.width * shape.height;

    default:
      return assertNever(shape); // Ensures all cases are handled
  }
}
```

---

##### 🔐 `assertNever` Function

```ts
function assertNever(value: never): never {
  throw new Error(`Unhandled case: ${JSON.stringify(value)}`);
}
```

This helper ensures that if someone **adds a new variant** to `Shape`, and **forgets to update** the `switch`, TypeScript will throw a **compile-time error**.

---

##### ✅ Benefits

* Catches missed cases early
* Makes your code future-proof
* Great for API models, UI state machines, and more

---

##### 🧱 Summary Brick

| Pattern                     | Description                               |
|-----------------------------|-------------------------------------------|
| Exhaustive switch + never   | Ensures all union cases are handled       |
| assertNever()               | Compile-time safety + runtime fallback    |


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

#### **Rest Parameters in TypeScript**

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

##### 🔁 forEach()

Executes a function on each element — does **not** return anything.

```ts
const items = ["TS", "JS", "Node"];

items.forEach((item: string): void => {
  console.log("Tech:", item);
});
```

✅ Use for side effects like logging or UI updates
❌ Doesn’t modify or return a new array

---

##### 🔍 find()

Returns the **first** matching element — or `undefined` if no match found.

```ts
type User = { id: number; name: string };
const users: User[] = [
  { id: 1, name: "Aziz" },
  { id: 2, name: "Yahyaoui" }
];

const foundUser = users.find((u) => u.id === 1);

if (foundUser) {
  console.log("User found:", foundUser.name);
}
```

✅ Result is type `User | undefined`
🧠 Good candidate for type narrowing

---

##### ✅ some()

Returns `true` if **at least one** element matches the condition.

```ts
const numbers = [1, 2, 3, 4];

const hasEven = numbers.some((n) => n % 2 === 0); // true
```

✅ Great for quick validation

---

##### 📋 every()

Returns `true` if **all** elements match the condition.

```ts
const allPositive = numbers.every((n) => n > 0); // true
```

✅ Useful for form validation, consistency checks, etc.

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

##### 🧠 Bonus: Strong Typing with Generics(will discover it in next section)

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


| Method     | Purpose                        | Return Type       | Notes                                |
|------------|--------------------------------|-------------------|--------------------------------------|
| `map()`    | Transform items                | `T[] → U[]`       | Same length as original              |
| `filter()` | Keep only matching items       | `T[] → T[]`       | Type-safe narrowing                  |
| `reduce()` | Collapse to single value       | `T[] → R`         | Requires initial value               |
| `forEach()`| Perform side effects           | `void`            | Doesn't return anything              |
| `find()`   | Get first match                | `T | undefined`   | Use null checks or type guards       |
| `some()`   | Check if any match             | `boolean`         | Returns true if at least one matches |
| `every()`  | Check if all match             | `boolean`         | Returns true only if all match       |

---


#### More Functional and Typed Data Tools in TypeScript

> `sort()`, `flatMap()`, `Set`, and `Map` 

##### 🔀 sort()

Sorts an array **in place** (modifies original array).

```ts
const scores: number[] = [85, 92, 70, 100];

scores.sort((a, b) => a - b); // Ascending
// [70, 85, 92, 100]

scores.sort((a, b) => b - a); // Descending
// [100, 92, 85, 70]
```

🧠 Default `sort()` compares values as **strings** — so always use a custom comparator for numbers or objects.

---

##### 🪄 sort() with Objects

```ts
type User = { id: number; name: string };

const users: User[] = [
  { id: 3, name: "Charlie" },
  { id: 1, name: "Aziz" },
  { id: 2, name: "Bob" }
];

users.sort((a, b) => a.id - b.id);
// Sorted by ID: 1 → 2 → 3
```

---

##### 🧩 flatMap()

Combines `map()` and `flat()` in one step. Returns a **flattened array** after transformation.

```ts
const sentences = ["hello world", "typescript rocks"];

const words = sentences.flatMap((s) => s.split(" "));
// ["hello", "world", "typescript", "rocks"]
```

✅ Best when each mapped item returns an array
✅ Prevents double loops or `.map(...).flat()`

---

##### 🧺 Set

A **Set** stores **unique values only** — duplicates are automatically removed.

```ts
const ids = new Set<number>();

ids.add(1);
ids.add(2);
ids.add(2); // Duplicate — ignored

console.log(ids); // Set { 1, 2 }
```

* Use `has()`, `add()`, `delete()`, `size`
* Great for deduplication and fast lookup

---

##### 🗺️ Map

A **Map** stores key-value pairs (like objects) — but keys can be **any type**.

```ts
const userRoles = new Map<number, string>();

userRoles.set(1, "Admin");
userRoles.set(2, "User");

console.log(userRoles.get(1)); // "Admin"
```

✅ Keeps insertion order
✅ Use when keys aren’t just strings

---

##### 🧱 Summary Brick

| Tool       | Description                              | Use Case                            |
|------------|------------------------------------------|-------------------------------------|
| sort()     | Sorts array in place                     | Numbers, strings, objects           |
| flatMap()  | Maps + flattens                          | Exploding and transforming arrays   |
| Set        | Stores unique values only                | Deduplication, existence checking   |
| Map        | Key-value store with flexible key types  | Lookup tables, caching, associations|

---

### **Record, WeakMap, WeakSet collection in TypeScript**

##### 🧾 `Record<K, V>`

A **utility type** that constructs an object type with **keys of type `K`** and **values of type `V`**.

```ts
type UserRoles = Record<"admin" | "editor" | "guest", string>;

const roles: UserRoles = {
  admin: "Aziz",
  editor: "Yahyaoui",
  guest: "Anonymous"
};
```

✅ Key-safe
✅ Alternative to `{ [key: string]: value }`
✅ Use when you **know all possible keys ahead of time**

---

##### 🔐 `WeakMap`

A special kind of `Map` where:

* **Keys must be objects**
* **Entries don’t prevent garbage collection**

```ts
const obj1 = { id: 1 };
const obj2 = { id: 2 };

const secretData = new WeakMap<object, string>();

secretData.set(obj1, "Top secret");
secretData.set(obj2, "Classified");

console.log(secretData.get(obj1)); // "Top secret"
```

✅ Keys are weakly held — auto-removed if object is no longer referenced
🚫 Cannot iterate (no `.keys()`, `.values()`, etc.)

---

##### 🪶 `WeakSet`

Like a `Set`, but:

* Only holds **objects**
* **Weakly references** them

```ts
const visitedObjects = new WeakSet<object>();

const session = { token: "abc123" };
visitedObjects.add(session);

console.log(visitedObjects.has(session)); // true
```

✅ Useful for tracking objects without preventing GC
✅ Non-enumerable
🚫 No `.forEach()`, `.size`, or iteration

---

##### 🧠 Real-World Use Cases

| Tool      | Use Case Example                                      |
| --------- | ----------------------------------------------------- |
| `Record`  | Role-based users, config maps, type-safe dictionaries |
| `WeakMap` | Store metadata or private values tied to DOM objects  |
| `WeakSet` | Marking visited nodes or cyclic references in memory  |

---

##### 🧱 Summary Brick


| Tool      | Description                              | Keys              | Notes                              |
|-----------|------------------------------------------|-------------------|------------------------------------|
| `Record`  | Object type with known keys & values     | `string` or union | Type-safe object map               |
| `WeakMap` | Map that holds object keys weakly        | object only       | Non-enumerable, GC-friendly        |
| `WeakSet` | Set of objects held weakly               | object only       | No size, no iteration              |

---

### **🧩 Interfaces in TypeScript**

> **Interfaces in TypeScript** — one of the cleanest and most powerful ways to define the **shape of your data**, especially for objects, APIs, and class contracts.

#### ✅ Basic Interface

```ts
interface User {
  id: number;
  username: string;
  isActive: boolean;
}

const user: User = {
  id: 1,
  username: "Aziz",
  isActive: true
};
```

✅ All properties must be present and correctly typed
🧠 You can reuse `User` anywhere you need this shape

---

#### 🔹 Optional Properties

```ts
interface Profile {
  name: string;
  email?: string; // Optional
}
```

Use `?` to mark properties as optional.

---

#### 🔒 Readonly Properties

```ts
interface Account {
  readonly id: number;
  name: string;
}
```

✅ `id` cannot be changed once assigned
🚫 Will throw error if you try: `account.id = 5`

---

#### 🧬 Extending Interfaces (Inheritance)

```ts
interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 1,
  username: "aziz",
  isActive: true,
  permissions: ["manage-users", "view-logs"]
};
```

✅ Reuse base types like `User`
✅ Great for role systems, inheritance trees

---

#### 🧠 Interface vs Type

| Feature       | `interface`         | `type`                     |
| ------------- | ------------------- | -------------------------- |
| Object shape  | ✅ Yes               | ✅ Yes                      |
| Extending     | ✅ With `extends`    | ✅ With `&` (intersection)  |
| Union types   | ❌ Not directly      | ✅ Full support             |
| Class support | ✅ Implements easily | ❌ Not directly             |
| Primitives    | ❌ No                | ✅ Yes (`type ID = string`) |

💬 Use `interface` for **data structure** and **OOP-friendly code**
🧠 Use `type` when mixing types, unions, or creating aliases

---

#### 🧪 Interfaces with Functions

```ts
interface GreetFn {
  (name: string): string;
}

const greet: GreetFn = (name) => `Hello, ${name}`;
```

✅ Describes a function shape cleanly
✅ Helpful for APIs, callbacks, or dependency injection

---

#### 🎓 Interfaces with Classes

```ts
interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal {
  constructor(public name: string) {}
  speak() {
    console.log(`${this.name} barks`);
  }
}
```

✅ TS checks that `Dog` fully implements `Animal`

---

#### 🧱 Summary Brick


| Feature              | Syntax                       | Use Case                         |
|----------------------|------------------------------|----------------------------------|
| Object shape         | `interface User {}`          | Enforce object structure         |
| Optional field       | `email?: string`             | Fields that may be missing       |
| Readonly field       | `readonly id: number`        | Prevent mutation                 |
| Extending interface  | `interface A extends B`      | Reuse + extend base structures   |
| Implements in class  | `class X implements Y`       | Class shape contract             |
| Function signature   | `interface Fn { (): R }`     | Callbacks or APIs                |

---

### **The `type` Keyword in TypeScript: Aliases**

The `type` keyword in TypeScript is used to create **type aliases**—custom names for existing types. Type aliases improve code readability, reusability, and maintainability, and can represent anything from primitives to complex structures.

#### **Type Alias Basics**

You can alias primitives, objects, arrays, functions, and more:

```typescript
type Age = number;
let myAge: Age = 30;

type Person = {
  name: string;
  age: number;
  email?: string; // Optional
};

type StringArray = string[];
type Greet = (name: string) => void;
```

#### **Unions and Intersections** (will discussed in the next section)

Type aliases are essential for unions and intersections:

```typescript
type ID = number | string; // Union

type HasName = { name: string };
type HasAge = { age: number };
type PersonDetails = HasName & HasAge; // Intersection
```

#### **Tuples and Literal Types**

You can alias tuple types and literal unions for clarity:

```typescript
type Point = [number, number];
type Status = "pending" | "success" | "error";
```

#### **Mapped Types (Advanced)**

Type aliases enable advanced mapped types:

```typescript
type Optional<T> = { [K in keyof T]?: T[K] };

interface User {
  id: number;
  name: string;
}

type PartialUser = Optional<User>; // { id?: number; name?: string; }
```

#### **`type` vs. `interface`**

- **`interface`**: Best for describing object shapes and supporting declaration merging (extending or augmenting interfaces).
- **`type`**: More flexible—can alias primitives, unions, intersections, tuples, and support advanced type features. Cannot be merged.

**Use `type` when:**
- You need unions, intersections, or mapped/conditional types.
- You want to alias primitives, tuples, or function signatures.

**Use `interface` when:**
- Defining object shapes or class contracts.
- You want to leverage declaration merging.

In simple cases, both are interchangeable for objects, but `type` is more versatile for advanced scenarios.


### **Union & Intersection Types**

> TypeScript provides **union** and **intersection** types to create flexible and expressive type definitions.

---

#### **Union Types (`|`)**

A **union type** allows a value to be **one of several types**.

```typescript
type ID = string | number;

let userId: ID;
userId = "abc123"; // OK
userId = 42;       // OK
// userId = true;  // ❌ Error: boolean not allowed
```

- Use unions when a variable can be more than one type.
- Common for IDs, API responses, or flexible function parameters.

---

#### **Intersection Types (`&`)**

An **intersection type** combines multiple types into **one**. The resulting type has **all properties** from each type.

```typescript
type CoordX = { x: number };
type CoordY = { y: number };
type Coord = CoordX & CoordY;

const point: Coord = { x: 10, y: 20 }; // Must have both x and y
```

- Use intersections to compose types, especially for objects that must satisfy multiple contracts.

---

#### **Summary Table**

| Type            | Syntax        | Description                                  | Example                        |
|-----------------|---------------|----------------------------------------------|--------------------------------|
| Union           | `A &#124; B`  | Value can be type A **or** type B            | `type ID = string &#124; number` |
| Intersection    | `A & B`       | Value must satisfy **all** combined types    | `type Coord = {x} & {y}`        |

---

#### **When to Use**

- **Union**: When a value can be one of several types (e.g., `"success" | "error"`, `string | number`).
- **Intersection**: When you want to combine multiple type requirements into one (e.g., mixins, multiple interfaces).

---

### **Generics**

#### Intro to Generics:

- 🧠 What Are Generics?

**Generics** allow you to write **flexible and reusable code** that works with **any type**, while still keeping type safety.

It's like a **type placeholder** — instead of hardcoding a type, you define a "generic type" (like `T`, `U`, etc.) that will be **filled in later** when the function/class/interface is used.

- 🧪 Why Use Generics?

Without generics:

```ts
function identity(arg: any): any {
  return arg;
}
```

* ✅ Works with anything
* ❌ Loses type safety
  (you pass a number, get back `any`, no intellisense)

With generics:

```ts
function identity<T>(arg: T): T {
  return arg;
}

const result = identity<number>(42); // result is number ✅
```

* ✅ Works with any type
* ✅ Keeps **exact type**

---

#### 1. **Generic Function**

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const strArr = wrapInArray("hello"); // Type: string[]
const numArr = wrapInArray(5);       // Type: number[]
```

#### 2. **Generic Interface**

```ts
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  success: true,
  data: {
    name: "Aziz",
    age: 25,
  }
};
```

#### 3. **Generic Class**

```ts
class Box<T> {
  content: T;
  constructor(content: T) {
    this.content = content;
  }
}

const stringBox = new Box("Hello");     // Box<string>
const numberBox = new Box(123);         // Box<number>
```

#### 4. **Generic with Constraints**

If you want to limit what kind of types can be used:

```ts
function printLength<T extends { length: number }>(value: T): void {
  console.log(value.length);
}

printLength("Aziz");      // OK
printLength([1, 2, 3]);    // OK
// printLength(123);       // ❌ Error: number has no length
```

---

#### 🪛 Bonus: Default Generic Types

```ts
function doSomething<T = string>(value: T): T {
  return value;
}

doSomething();         // T is string by default
doSomething(100);      // T is number
```

---

#### 🧱 Summary (Cheat Sheet Style)

| Syntax                   | Purpose                      |
| ------------------------ | ---------------------------- |
| `function<T>(arg: T): T` | Generic function             |
| `interface<T> {...}`     | Generic interface            |
| `class<T> {...}`         | Generic class                |
| `<T extends U>`          | Add constraint to T          |
| `<T = DefaultType>`      | Provide default generic type |


#### Example with  `filter<T>`, `merge<T, U>`:

> Let’s dive into two very common and **super useful** generic function examples: `filter<T>` and `merge<T, U>`. These are fantastic to understand how generics shine in real-world code.

---

##### 🔍 1. `filter<T>` — Generic Filtering Function

###### ✅ Goal:

A function that accepts an array of type `T`, and a filter function that works on `T`. It returns a filtered array of `T`.

###### 💡 Code:

```ts
function filter<T>(array: T[], callback: (item: T) => boolean): T[] {
  const result: T[] = [];
  for (const item of array) {
    if (callback(item)) {
      result.push(item);
    }
  }
  return result;
}
```

###### 🧪 Usage:

```ts
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filter(numbers, (n) => n % 2 === 0);
console.log(evenNumbers); // [2, 4, 6]

const names = ["Aziz", "Bilel", "Admin"];
const filteredNames = filter(names, (name) => name !== "Admin");
console.log(filteredNames); // ["Aziz", "Bilel"]
```

* ✅ Works with any type
* ✅ Type-safe with full intellisense

---

##### 🔀 2. `merge<T, U>` — Merge Two Objects

###### ✅ Goal:

A function that merges two objects of different types `T` and `U`, and returns a new object that combines both.

###### 💡 Code:

```ts
function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}
```

###### 🧪 Usage:

```ts
const user = { name: "Aziz" };
const details = { age: 25, isAdmin: false };

const mergedUser = merge(user, details);
/*
mergedUser has type:
{
  name: string;
  age: number;
  isAdmin: boolean;
}
*/

console.log(mergedUser); // { name: 'Aziz', age: 25, isAdmin: false }
```

* ✅ Types are merged
* ✅ Access to all fields with proper type inference

---

###### 🧱 Summary

| Function     | Description                            |
| ------------ | -------------------------------------- |
| `filter<T>`  | Filter any array with full type safety |
| `merge<T,U>` | Merge two objects and keep both types  |

---

### **Utility Types**

> TypeScript provides several **built-in utility types** to help transform and manipulate types in a reusable and expressive way. These utilities work on top of generic types and make type transformations more readable and powerful.

[TS utility types docs](https://www.typescriptlang.org/docs/handbook/utility-types.html)

---

#### 🔹 `Partial<T>`

**What it does:**  
Makes **all properties** in type `T` **optional**. Useful for update patterns, patch objects, or when you want to allow incomplete data.

```ts
type User = {
  id: number;
  name: string;
};

const updateUser = (user: Partial<User>) => {
  // can pass { name: "Aziz" } or { id: 2 }
};
```
*Now you can pass any subset of `User` properties—great for PATCH APIs or form updates.*

---

#### 🔹 `Required<T>`

**What it does:**  
Makes **all optional properties** in `T` **required**. This is the opposite of `Partial<T>`, ensuring that every property must be present.

```ts
type Profile = {
  name?: string;
  age?: number;
};

type CompleteProfile = Required<Profile>; // name and age are now required
```
*Use this when you want to enforce that all fields must be filled in, such as before saving to a database.*

---

#### 🔹 `Readonly<T>`

**What it does:**  
Makes **all properties** in `T` **read-only** (immutable). You cannot reassign any property after initialization.

```ts
type Config = {
  port: number;
};

const serverConfig: Readonly<Config> = { port: 8080 };
// serverConfig.port = 3000 ❌ Error: cannot assign to readonly property
```
*Great for constants, configuration objects, or preventing accidental mutation.*

---

#### 🔹 `Record<K, T>`

**What it does:**  
Constructs an object type with keys `K` and values `T`.  
`K` is usually a union of string or number literals.

```ts
type Roles = 'admin' | 'user' | 'guest';

const permissions: Record<Roles, boolean> = {
  admin: true,
  user: true,
  guest: false
};
```
*Use this to create type-safe dictionaries or maps where you know all possible keys ahead of time.*

---

#### 🔹 `Pick<T, K>`

**What it does:**  
Creates a type by **picking a subset of properties** (`K`) from type `T`.  
Keeps only the specified keys.

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserPreview = Pick<User, 'id' | 'name'>;
```
*Handy for creating lightweight views or DTOs with only the needed fields.*

---

#### 🔹 `Omit<T, K>`

**What it does:**  
Creates a type by **omitting** a subset of properties (`K`) from type `T`.  
Removes the specified keys.

```ts
type User = {
  id: number;
  name: string;
  email: string;
};

type UserWithoutEmail = Omit<User, 'email'>;
```
*Useful for hiding sensitive fields or customizing types for different layers.*

---

#### 🔹 `Exclude<T, U>`

**What it does:**  
Removes from `T` **all types** that are assignable to `U`.  
Works with union types.

```ts
type Status = 'success' | 'error' | 'loading';

type NonLoading = Exclude<Status, 'loading'>; // 'success' | 'error'
```
*Use this to filter out unwanted members from a union.*

---

#### 🔹 `Extract<T, U>`

**What it does:**  
Extracts from `T` **only the types** that are assignable to `U`.

```ts
type Status = 'success' | 'error' | 'loading';

type OnlyLoading = Extract<Status, 'loading'>; // 'loading'
```
*Use this to get a subset of a union that matches a certain type.*

---

#### 🔹 `NonNullable<T>`

**What it does:**  
Removes `null` and `undefined` from type `T`.

```ts
type MaybeString = string | null | undefined;

type StrictString = NonNullable<MaybeString>; // just string
```
*Great for ensuring a value is always present before further processing.*

---

#### 🔹 `ReturnType<T>`

**What it does:**  
Gets the **return type** of a function type `T`.  
Useful for inferring types from existing functions.

```ts
function getAge() {
  return 30;
}

type Age = ReturnType<typeof getAge>; // number
```
*Helps keep types in sync when refactoring or using higher-order functions.*

---

#### 🔹 `Parameters<T>`

**What it does:**  
Gets the **parameter types** of a function as a tuple.

```ts
function greet(name: string, age: number) {
  return `Hello ${name}, age ${age}`;
}

type GreetArgs = Parameters<typeof greet>; // [string, number]
```
*Useful for generic wrappers, decorators, or when you want to forward arguments.*

---

**Summary Table:**

| Utility Type         | What it Does                                      | Example Use Case                        |
|----------------------|---------------------------------------------------|-----------------------------------------|
| `Partial<T>`         | All properties optional                           | PATCH APIs, partial updates             |
| `Required<T>`        | All properties required                           | Validation, before save                 |
| `Readonly<T>`        | All properties immutable                          | Config, constants                       |
| `Record<K, T>`       | Object with keys `K` and values `T`               | Role maps, lookup tables                |
| `Pick<T, K>`         | Only specified keys from `T`                      | DTOs, previews                          |
| `Omit<T, K>`         | All but specified keys from `T`                   | Hide sensitive fields                   |
| `Exclude<T, U>`      | Remove types in `U` from union `T`                | Filter out unwanted union members       |
| `Extract<T, U>`      | Keep only types in `U` from union `T`             | Narrow down union types                 |
| `NonNullable<T>`     | Remove `null` and `undefined` from `T`            | Ensure value is always present          |
| `ReturnType<T>`      | Get return type of function                       | Infer output type for wrappers          |
| `Parameters<T>`      | Get parameter types of function as tuple          | Forwarding or reusing function args     |

---

### **Type Guards**

> A **Type Guard** in TypeScript is a way to **narrow down a variable’s type** so the compiler knows exactly what you're dealing with at runtime.

> Think of it as a **type bouncer** at the door of your logic:
  > “Hold up! Only strings beyond this line. No unknowns allowed.”

#### 🔐 What is a Type Guard?

It's a **runtime check** that confirms the **actual type** of a variable — so you can safely access properties/methods without getting type errors.

#### ✅ Common Type Guards

##### 1. `typeof` – for primitives

```ts
function printLength(value: unknown) {
  if (typeof value === "string") {
    // ✅ value is now treated as string
    console.log(value.length);
  }
}
```

##### 2. `instanceof` – for class instances

```ts
class Animal {
  speak() { console.log("woof"); }
}

class Car {
  drive() { console.log("vroom"); }
}

function useThing(thing: Animal | Car) {
  if (thing instanceof Animal) {
    thing.speak(); // ✅ type is Animal
  } else {
    thing.drive(); // ✅ type is Car
  }
}
```

##### 3. Using `in` Type Guard

Checks if a property exists on an object—useful for distinguishing between object types.

```ts
type Cat = { meow: () => void };
type Dog = { bark: () => void };

function makeSound(animal: Cat | Dog) {
  if ("meow" in animal) {
    animal.meow(); // ✅ animal is Cat
  } else {
    animal.bark(); // ✅ animal is Dog
  }
}
```

- Use when types have unique property names.
- TypeScript narrows the type based on the property check.
- Great for union types with distinct members.

##### 4. Custom Type Guard (Type Predicate)

This is 🔥 powerful — lets you define your own check.

```ts
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function logValue(value: unknown) {
  if (isString(value)) {
    // ✅ value is string here
    console.log(value.toUpperCase());
  }
}
```

* Notice `value is string` → this is the **type predicate**
* TypeScript narrows the type if the function returns `true`

##### 5. Discriminated Unions

Perfect with `switch` + `never`

```ts
// Discriminated Union
type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; size: number };

function area(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.size ** 2;
  }
}
```
✅ TS automatically narrows `shape` to the correct type based on the `kind` field.

##### 6. **Equality Narrowing**
Using `===`, `!==`, `==`, or `!=` checks.

```typescript
function example(x: string | number, y: string | boolean) {
  if (x === y) {
    // Both x and y are strings here
    x.toUpperCase();
    y.toLowerCase();
  }
}
```

#### Why Use Type Guards?

1. **Type Safety**: Ensures you only access properties/methods that exist on the narrowed type
2. **Better Autocompletion**: IDEs provide accurate suggestions based on narrowed types
3. **Runtime Validation**: Combines compile-time checks with runtime verification
4. **Cleaner Code**: Avoids excessive type assertions (`as` syntax)

#### 🧱 Summary Brick

| Type Guard          | Use For                        | Example                              |
|---------------------|--------------------------------|--------------------------------------|
| `typeof`            | Primitives                     | `typeof value === "string"`          |
| `instanceof`        | Class instances                | `if (obj instanceof MyClass)`        |
| `in`                | Property existence on objects  | `"bark" in animal`                   |
| Custom predicate    | Complex checks / unknown types | `function isFoo(x): x is Foo { ... }`|
| Discriminated union | Objects with shared/tagged key | `switch (obj.kind)`                  |
| Equality narrowing  | Value comparison               | `if (x === y)`                       |


---

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

### Tips to start:

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

#### Benefits of Strict Mode
1. **Eliminates Some JavaScript Silent Errors**: By changing them to throw errors.
2. **Fixes Mistakes That Make It Difficult for JavaScript Engines to Perform Optimizations**: By eliminating some silent errors, strict mode can sometimes lead to improved performance.
3. **Prohibits Some Syntax Likely to Be Defined in Future Versions of ECMAScript**: This prevents code from breaking in the future.

#### Examples of Strict Mode

##### Enabling Strict Mode
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

##### Key Differences in Strict Mode

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

#### Using Strict Mode in TypeScript
> TypeScript modules are always in strict mode, so you don't need to explicitly declare `"use strict";` in your TypeScript files. The TypeScript compiler will automatically insert the strict mode directive when it transpiles TypeScript to JavaScript.

> However, if you're working with plain JavaScript or older JavaScript code, adding `"use strict";` can help catch errors early and enforce a cleaner coding style.

---

### When: `interface` vs `type`

> In TypeScript, both `type` and `interface` can be used to define the shape of data, but they have different strengths and best-use scenarios. Here's a clear breakdown to help you decide **when to use each** as a best practice:

#### ✅ Use `interface` when:

1. **You are defining the shape of an object or a class.**

   ```ts
   interface User {
     id: number;
     name: string;
   }
   ```

2. **You expect to extend or implement it.**

   * Interfaces are made for extension and implementation.

   ```ts
   interface Person {
     name: string;
   }

   interface Employee extends Person {
     id: number;
   }

   class Developer implements Employee {
     name: string;
     id: number;
     constructor(name: string, id: number) {
       this.name = name;
       this.id = id;
     }
   }
   ```

3. **You want better performance and readability in IDEs.**

   * Interfaces are slightly more optimized for tools like VS Code.

---

#### ✅ Use `type` when:

1. **You need to represent unions, intersections, or tuples.**

   ```ts
   type Status = "success" | "error" | "loading";
   type Point = [number, number];
   type Result<T> = T | Error;
   ```

2. **You are composing complex types.**

   * `type` is more flexible for advanced types.

   ```ts
   type User = {
     name: string;
   };
   type Admin = User & {
     admin: true;
   };
   ```

3. **You want to alias a primitive or utility type.**

   ```ts
   type ID = string | number;
   type Callback = () => void;
   ```

---

#### ❗Avoid overusing `type` to replace everything.

While `type` is more powerful in some cases, interfaces are semantically better when dealing with **object shapes and class contracts**. Stick with `interface` unless you **need** the features of `type`.

---

#### 💡 Best Practice Summary:

| Use Case                      | Use `interface` | Use `type` |
| ----------------------------- | --------------- | ---------- |
| Object/class structure        | ✅               | ✅          |
| Extendable/implementable      | ✅               | ❌          |
| Union/intersection types      | ❌               | ✅          |
| Tuples or function signatures | ❌               | ✅          |
| Primitive/utility type alias  | ❌               | ✅          |

---

### 📘 TypeScript: `export` vs `export default` & Interface Export Best Practice

#### 🔹 `export` vs `export default`

| Feature                     | `export` (Named)                           | `export default`                                     |
| --------------------------- | ------------------------------------------ | ---------------------------------------------------- |
| 🔧 Purpose                  | Export multiple values by name             | Export a single "main" value                         |
| 🧠 Import Style             | `import { something } from "./file"`       | `import something from "./file"`                     |
| ✍️ Auto-Complete & Refactor | ✅ IDE-friendly with auto-imports           | ⚠️ Slightly less IDE-friendly                        |
| 💥 Multiple Exports?        | Yes, unlimited                             | Only **one** default export per file                 |
| ⚙️ Use Case                 | Utility functions, shared constants, types | Config object, main class/function, default behavior |

##### ✅ Rule of Thumb:

> Use **named exports** (`export`) for utility-heavy modules
> Use **default export** when the file has **one primary export**

---

#### 🧾 Interface Export Best Practice

##### 🚫 Avoid This Style:

```ts
export default interface DeviceInter {
  // ...
}
```

* While valid, this is **less readable** and discouraged in many style guides.
* Not ideal for hover info, refactoring, or TS declaration files (`.d.ts`).

---

##### ✅ Preferred Style:

```ts
interface DeviceInter {
  // ...
}

export default DeviceInter;
```

* Keeps your interface **clean and readable**.
* Aligns with declaration file standards and best practices.

---

##### ✅ Or, When Using Named Exports:

```ts
export interface DeviceInter {
  // ...
}
```

Great if you want to export multiple interfaces or types from the same file.

---

#### 🧘 Nyro's Pro Tip:

> “Keep your types clean, and your exports separate — like good code and good coffee.”

---

## **⚙️ Watch Mode & Live Compilation**

TypeScript supports file watching via the CLI using:

```bash
tsc --watch
```

This enables automatic recompilation on save using your `tsconfig.json`.

---

### 🔄 Better Dev Loop with `ts-node-dev`

For projects that run TypeScript files (e.g., backend/server), use:

```bash
npm install --save-dev ts-node-dev
```

Then add this to your `package.json`:

```json
"scripts": {
  "dev": "ts-node-dev --respawn --transpile-only src/index.ts"
}
```

#### ✅ What it does:

* 🚀 Runs TypeScript **without precompiling**
* 🔄 **Watches for changes** and reloads automatically
* ⚡ **Fast restarts** (no file system lag)
* 🧠 `--transpile-only` skips type-checking for speed

---

### 💡 ts-node vs ts-node-dev vs tsc

| Tool          | Description                               | Live Reload?       | Type Checks?  |
| ------------- | ----------------------------------------- | ------------------ | ------------- |
| `tsc`         | Compiles TS to JS                         | ✅ (with `--watch`) | ✅             |
| `ts-node`     | Runs `.ts` files directly (no build step) | ❌                  | ✅             |
| `ts-node-dev` | Like nodemon for TypeScript               | ✅                  | ❌ (for speed) |

---

### 🛡️ Optional: Keep Type Checks Too

If you want **type checking** and **live reload** in dev:

* Use `tsc --watch` in one terminal
* And `nodemon dist/index.js` in another

OR try:

```bash
npm install --save-dev tsup
```

```bash
npx tsup src/index.ts --watch --onSuccess "node dist/index.js"
```

---

### 🧱 TL;DR

| Tool          | Use When...                          |
| ------------- | ------------------------------------ |
| `tsc --watch` | You want TS to compile automatically |
| `ts-node-dev` | You’re running dev servers/scripts   |
| `tsup`        | You want fast builds + watch combo   |

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

## Gotchas

### In generics

> TypeScript Generics – Notes & Gotchas

Generics allow you to write reusable, type-safe code without sacrificing flexibility. They act like *type placeholders* that get filled in when the function or type is used.

```ts
function identity<T>(value: T): T {
  return value;
}
```

#### ⚠️ TypeScript vs Runtime

TypeScript only exists **at compile time**. If you pass a wrong type (e.g. `string[]` instead of `number[]`), TypeScript will show an error — but **the code will still run** if compiled or executed using `ts-node`.

#### 🚫 Problem Example (Without Generics)

```ts
const getFirstElement = (item: number[]) => {
  return item[0];
};

const stringsArray = ["JP", "UK", "TN"];
const firstString = getFirstElement(stringsArray); // ❌ TS2345
console.log(firstString); // ✅ Still logs: "JP"
```

* TypeScript error ✅
* JavaScript runtime still returns a value ❗

---

#### ✅ Solution: Use Generics

```ts
const getFirstElement = <T>(item: T[]): T => {
  return item[0];
};

const numbers = [1, 2, 3];
const firstNum = getFirstElement(numbers); // number ✅

const countries = ["JP", "UK", "TN"];
const firstCountry = getFirstElement(countries); // string ✅
```

* Automatically infers and enforces the correct type
* Reusable with any array type

---

#### 🧱 Bonus: Safer Version with Fallback

```ts
const getFirstElement = <T>(item: T[]): T | undefined => {
  return item.length > 0 ? item[0] : undefined;
};
```

#### 💡 Summary

| Concept            | Explanation                                   |                                    |
| ------------------ | --------------------------------------------- | ---------------------------------- |
| `function<T>`      | Generic function                              |                                    |
| Error + Runtime OK | TS flags type mismatch, but JS still executes |                                    |
| Fix it with `<T>`  | Flexible and safe – no more hardcoded types   |                                    |
| Safe version       | Use \`T                                       | undefined\` to handle empty arrays |

---

# Funny notes:

- Me:
> I think I've got function arrow fever😅😅. I utilize it everywhere, even with overload function signatures. Is that right??

- ChatGpt:
> 🤣 Ah yes — welcome to the **arrow function fever club**, my guy!
You're not alone — it's clean, fast, expressive... but when it comes to **function overloading**, there’s a catch 🪤.

---

## 🧠 Can You Use Overloads with Arrow Functions?

### 🔴 Technically: **No**, not directly.

**Function overloading only works with regular (named) functions**, not with arrow functions.

---

### 🧪 Let’s Compare

#### ✅ Overload with Regular Function — ✅ Works

```ts
function greet(name: string): string;
function greet(name: string, age: number): string;

function greet(name: string, age?: number): string {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
}
```

---

#### ❌ Overload with Arrow Function — ❌ Not Supported

```ts
// ❌ This will cause an error in TS

const greet = (name: string): string;
const greet = (name: string, age: number): string;

const greet = (name: string, age?: number): string => {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
};
```

TypeScript will scream:

> **"Cannot redeclare block-scoped variable 'greet'"**

---

## ✅ Workaround: Use a Function Type + One Arrow Function

You can **define the overloaded signature separately**, and assign it to a typed arrow function:

```ts
type GreetFn = {
  (name: string): string;
  (name: string, age: number): string;
};

const greet: GreetFn = (name: string, age?: number): string => {
  return age ? `Hello ${name}, age ${age}` : `Hello ${name}`;
};
```

✅ This works
✅ Keeps the arrow style
✅ Keeps overload support

---

## 🧠 Why Arrow Can't Be Overloaded?

Because arrow functions are **values**, not declarations. Overloading works with function declarations that the compiler merges together.

---

### 🧱 TL;DR Brick

| Style                | Supports Overloading?  | Notes                                  |
| -------------------- | ---------------------- | -------------------------------------- |
| Regular function     | ✅ Yes                  | Recommended for multiple signatures    |
| Arrow function       | ❌ No                   | Use `type` + single impl workaround    |
| Typed arrow w/ alias | ✅ Yes (via type alias) | Best of both worlds if you love arrows |

---