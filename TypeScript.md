# TypeScript: 


## Introduction to TypeScript

TypeScript is an open-source programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript, meaning it adds new features to JavaScript while still being able to run any JavaScript code. TypeScript’s main goals are to bring optional static typing and other features to JavaScript to improve developer productivity and code quality.

### Key Features of TypeScript
- **Static Typing**: You can declare types for variables, function parameters, and return values.
- **Interfaces and Enums**: Adds support for interfaces and enumerations.
- **Classes and Inheritance**: Provides enhanced support for object-oriented programming.
- **Modules**: Supports modular programming with ES6 module syntax.
- **Tooling**: Better tooling with editors and IDEs, including IntelliSense and code navigation.

## JavaScript vs. TypeScript

### JavaScript
- Dynamically typed
- No compile-time type checking
- Limited support for modern programming paradigms like OOP and interfaces
- Simplicity and flexibility, which can lead to runtime errors

### TypeScript
- Statically typed (with optional typing)
- Compile-time type checking
- Supports modern programming paradigms (OOP, interfaces, generics)
- Better tooling support
- Transpiles to JavaScript, ensuring compatibility with existing JavaScript codebases and environments

## TypeScript Syntax

### Basic Types
```typescript
let isDone: boolean = false;
let age: number = 25;
let name: string = "John";
let list: number[] = [1, 2, 3, 4];
let tuple: [string, number] = ["hello", 10];
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

### Functions
```typescript
function add(x: number, y: number): number {
    return x + y;
}

let result: number = add(5, 10);
```

### Interfaces
```typescript
interface Person {
    firstName: string;
    lastName: string;
}

function greet(person: Person) {
    return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = { firstName: "John", lastName: "Doe" };
console.log(greet(user));
```

### Classes
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

## TypeScript Compiler (`tsc`)

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

### Running TypeScript

To compile the project using `tsconfig.json`, simply run:

```bash
tsc
```

This will compile all the TypeScript files specified in the `include` section of `tsconfig.json` and output the JavaScript files to the `outDir`.

## Tips to start with

1. **Use IDEs with TypeScript Support**: VS Code, WebStorm, and other modern editors have excellent TypeScript support, including IntelliSense, type checking, and refactoring tools.
2. **Enable Strict Mode**: This enforces best practices and helps catch potential errors early.
3. **Use Type Definitions**: For third-party libraries, use `@types` packages to get type definitions. For example:
   ```bash
   npm install --save @types/lodash
   ```
4. **Read the Official Handbook**: The [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html) is a great resource to get a deeper understanding of the language.
5. **Practice and Build Projects**: The best way to learn TypeScript is by building projects and solving real problems.

I hope this helps you get started with TypeScript! If you have any specific questions or need further assistance, feel free to ask.
`"use strict";` is a directive in JavaScript that enables strict mode. Strict mode is a way to opt in to a restricted variant of JavaScript, which helps you write cleaner code by catching common coding mistakes and "unsafe" actions. When you include `"use strict";` at the beginning of a JavaScript file or a function, the entire script or function executes in strict mode.

## Benefits of Strict Mode
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
TypeScript modules are always in strict mode, so you don't need to explicitly declare `"use strict";` in your TypeScript files. The TypeScript compiler will automatically insert the strict mode directive when it transpiles TypeScript to JavaScript.

However, if you're working with plain JavaScript or older JavaScript code, adding `"use strict";` can help catch errors early and enforce a cleaner coding style.

---

## tsconfig json file:
The `tsconfig.json` file in TypeScript is used to configure how the TypeScript compiler (`tsc`) behaves when it compiles your TypeScript code. This file is crucial for managing the settings of your TypeScript project, including compiler options, file paths, and other configurations.

Here’s a more detailed overview of the `tsconfig.json` file, including some of the most common configurations:

### Basic Structure of `tsconfig.json`
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

### Common `compilerOptions`

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

### `include` and `exclude`
These settings control which files are included in the project and which are excluded.

- **include**: Specifies a list of glob patterns to include in the project.
  ```json
  "include": ["src/**/*"]
  ```

- **exclude**: Specifies a list of glob patterns to exclude from the project.
  ```json
  "exclude": ["node_modules", "**/*.spec.ts"]
  ```

### Example Configuration

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

### Creating `tsconfig.json`
You can create a `tsconfig.json` file with default values by running:
```bash
tsc --init
```

This will generate a `tsconfig.json` file with a comprehensive list of commented options.

Understanding and configuring `tsconfig.json` appropriately is essential for managing your TypeScript project effectively. It ensures that your code is compiled with the correct settings, making it easier to maintain and scale.

In a `tsconfig.json` file, patterns like `**/*.spec.ts` are often used in the `exclude` array to exclude test files from being compiled. The `.spec.ts` extension typically indicates a TypeScript file that contains unit tests written with testing frameworks such as Jasmine, Mocha, or Jest.

### Using `exclude` in `tsconfig.json`

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

### Explanation
- **include**: Specifies the files or directories to be included in the compilation. In this case, it includes all files in the `src` directory.
- **exclude**: Specifies the files or directories to be excluded from the compilation. Common patterns include:
  - `node_modules`: Excludes all files in the `node_modules` directory.
  - `**/*.test.ts`: Excludes all files ending in `.test.ts` in any directory.
  - `**/*.spec.ts`: Excludes all files ending in `.spec.ts` in any directory.

### Why Exclude Test Files?
1. **Reduce Compile Time**: Excluding test files can significantly reduce the time it takes to compile your TypeScript project, especially in large projects with many tests.
2. **Separate Concerns**: Keeps the build output clean and focused on the production code. Test files are typically only relevant in the development and testing phases.
3. **Avoid Compilation Errors**: Test files might have dependencies or setup code that isn’t needed or present in the production build, potentially causing unnecessary compilation errors.

### Example of a Test File
A `.spec.ts` file might look like this:

```typescript
import { add } from './math';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(add(1, 2)).toBe(3);
  });
});
```

### Including Test Files Separately
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