// Utility types
/**
 * -----------------------------------------------------------------------------------------------------------------
 * Utility Types in TypeScript are built-in types that help transform or construct new types from existing ones.
 *    - They provide powerful ways to manipulate types for flexibility and type safety.
 *    - Common utility types include Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract, NonNullable,
 *       ReturnType, and Parameters.
 *    - These types are especially useful for working with APIs, DTOs, configuration objects, and more.
 * -----------------------------------------------------------------------------------------------------------------
 * Examples:
 * 
 *        1  - Partial<T>: Makes all properties in T optional
 *              type PartialUser = Partial<{ name: string; age: number }>;
 *              --> Result: { name?: string; age?: number }
 * 
 *        2 - Required<T>: Makes all properties in T required
 *              type RequiredUser = Required<{ name?: string; age?: number }>;
 *              --> Result: { name: string; age: number }
 * 
 *        3 - Readonly<T>: Makes all properties in T readonly
 *            type ReadonlyUser = Readonly<{ name: string; age: number }>;
 *            --> Result: { readonly name: string; readonly age: number }
 * 
 *        4 - Record<K, T>: Constructs an object type with keys K and values T
 *            type UserRoles = Record<'admin' | 'user', boolean>;
 *            --> Result: { admin: boolean; user: boolean }
 * 
 *        5 - Pick<T, K>: Picks a set of properties from T
 *            type UserName = Pick<{ name: string; age: number }, 'name'>;
 *            --> Result: { name: string }
 * 
 *        6 - Omit<T, K>: Omits a set of properties from T
 *            type UserWithoutAge = Omit<{ name: string; age: number }, 'age'>;
 *            --> Result: { name: string }
 * 
 *        7 - Exclude<T, U>: Excludes types from T that are assignable to U
 *            type Status = Exclude<'success' | 'error' | 'pending', 'pending'>;
 *            --> Result: 'success' | 'error'
 * 
 *        8 - Extract<T, U>: Extracts types from T that are assignable to U
 *            type OnlySuccess = Extract<'success' | 'error', 'success'>;
 *            --> Result: 'success'
 * 
 *        9 - NonNullable<T>: Excludes null and undefined from T
 *           type Name = NonNullable<string | null | undefined>;
 *           --> Result: string
 * 
 *        10 - ReturnType<T>: Gets the return type of a function type
 *            type FnReturn = ReturnType<() => number>;
 *            --> Result: number
 * 
 *        11 - Parameters<T>: Gets the parameter types of a function type as a tuple
 *            type FnParams = Parameters<(a: string, b: number) => void>;
 *            --> Result: [string, number]
 * 
 *        12 - ConstructorParameters<T>: Gets the parameter types of a class constructor as a tuple
 *            class Person {
 *              constructor(name: string, age: number) {}
 *            }
 *            type PersonCtorParams = ConstructorParameters<typeof Person>;
 *            // Result: [string, number]
 * 
 *        13 - InstanceType<T>: Gets the instance type of a constructor function
 *            class Car {
 *              model: string = "";
 *            }
 *            type CarInstance = InstanceType<typeof Car>;
 *            // Result: Car
 * -----------------------------------------------------------------------------------------------------------------
 */

/**
 * 
 * 
 * | Utility Type         | What it Does                                      | Example UseCase                         |
 * |----------------------|---------------------------------------------------|-----------------------------------------|
 * | `Partial<T>`         | All properties optional                           | PATCH APIs, partial updates             |
 * | `Required<T>`        | All properties required                           | Validation, before save                 |
 * | `Readonly<T>`        | All properties immutable                          | Config, constants                       |
 * | `Record<K, T>`       | Object with keys `K` and values `T`               | Role maps, lookup tables                |
 * | `Pick<T, K>`         | Only specified keys from `T`                      | DTOs, previews                          |
 * | `Omit<T, K>`         | All but specified keys from `T`                   | Hide sensitive fields                   |
 * | `Exclude<T, U>`      | Remove types in `U` from union `T`                | Filter out unwanted union members       |
 * | `Extract<T, U>`      | Keep only types in `U` from union `T`             | Narrow down union types                 |
 * | `NonNullable<T>`     | Remove `null` and `undefined` from `T`            | Ensure value is always present          |
 * | `ReturnType<T>`      | Get return type of function                       | Infer output type for wrappers          |
 * | `Parameters<T>`      | Get parameter types of function as tuple          | Forwarding or reusing function args     |
 * 
 */


//Partial<T>: Makes all properties in T optional
console.log("------------------------------(Partial<T>)------------------------------");

type User = {
  id: number;
  name: string;
  age: number
};

const updateUser = (user: Partial<User>) => {
  return user;
};
console.log(updateUser({id: 54, age: 55}))

//Required<T>: Makes all properties in T required
console.log("------------------------------(Required<T>)------------------------------");

type UserWithOptional = {
  id?: number;
  name?: string;
};

const createUser = (user: Required<UserWithOptional>) => {
  // All properties must be provided
  return user;
};

const newUser = createUser({ id: 1, name: "Bilel" }); // now all the fields are mandatory
console.log(newUser);


//Readonly<T>: Makes all properties in T readonly, it freeze the structure — no mutations allowed.
console.log("------------------------------(Readonly<T>)------------------------------");

const readUser: Readonly<User> = {id: 4, name: " Med aziz", age: 27}
//user.age = 28 // Error: age is readonly
console.log(readUser)

//Record<K, T>: Constructs an object type with keys K and values T - dynamic keys with a fixed value type.
console.log("------------------------------(Record<K, T>)------------------------------");

const role: Record<'admin' | 'user', string> ={
  admin: "administrator",
  user: "normal user or a guest"
}

console.log(role);


/* Pick<T, K>: Picks a set of properties from T
Extract only the fields K from type T.
Like zooming in on just the data you care about 
*/
console.log("------------------------------(Pick<T, K>)------------------------------");
type employee = {
  id: number;
  name: string;
  email: string;
  badgeNumber: number;
  password: string;
};

// Pick only visible fields (e.g. public profile)
type UserPublic = Pick<employee, 'id' | 'name'>;


const publicUser: UserPublic = { id: 1, name: "Aziz" };// Hide email,badgeNumber, and password from public profile
console.log(publicUser);



// Omit<T, K>: Omits a set of properties from T - Remove sensitive info
console.log("------------------------------(Omit<T, K>)------------------------------");
// Omit sensitive fields

type UserSafe = Omit<employee, 'password'>;
const safeUser: UserSafe = { id: 1, name: "Aziz", email: "aziz@example.com", badgeNumber: 5858454623 };
console.log(safeUser);


//Exclude<T, U>: Excludes types from T that are assignable to U
console.log("------------------------------(Exclude<T, U>)------------------------------");
type Status = 'success' | 'error' | 'loading';

/* 
  Exclude removes what's in U
  ==> Remove from T any types that are assignable to U.
      It’s like doing: T - U.

  Extract<T, U>: Extracts types from T that are assignable to U 
  ==> Keep from T only the types assignable to U.
      It’s like doing: T ∩ U (intersection).
*/
type NoLoading = Exclude<Status, 'loading'>; // 'success' | 'error'
// Example usage:
const status1: NoLoading = 'success';
const status2: NoLoading = 'error';
console.log("NoLoading values:", status1, status2);


console.log("------------------------------(Extract<T, U>)------------------------------");
// Extract keeps only what’s in U
type OnlyLoading = Extract<Status, 'loading'>; // 'loading'

// Example usage:
const loadingStatus: OnlyLoading = 'loading';
console.log("OnlyLoading value:", loadingStatus);


/* 
  NonNullable<T>: Excludes null and undefined from T ==> Enforce presence
  ReturnType<T>: Gets the return type of a function type ==> Grab function output type
*/ 
console.log("------------------------------(NonNullable<T>)------------------------------");
type MaybeString = string | null | undefined;
type CleanString = NonNullable<MaybeString>; // string

const value: CleanString = "Hello, TypeScript!";
console.log(value);
//const value2: CleanString = null;
//console.log(value2);

console.log("------------------------------(ReturnType<T>)------------------------------");
function getPerson(): { id: number; name: string; } {
  return { id: 1, name: "Aziz" };
}

type Person = ReturnType<typeof getPerson>;

const person: Person = getPerson();
console.log(person);


/**
 * Concept:
 * Parameters<T> ===> Extracts argument types from a function type T.
 * ConstructorParameters<T> ===> Extracts constructor arguments from a class.
 * InstanceType<T> ===> Gets the type of an instance from a class constructor.
 * They all operate on function signatures — whether it's a normal function or a class.
 * 
 * - Parameters<T>: Gets the parameter types of a function type as a tuple
 * - ConstructorParameters<T>	: Gets a class constructor’s argument types
 * - InstanceType<T>	Gets the type of an instance from a class
 */
console.log("------------------------------(Parameters<typeof T>)------------------------------");
function greet(name: string, age: number) {
  return `Hello ${name}, you're ${age}`;
}

type GreetArgs = Parameters<typeof greet>; // [string, number]

const args1: GreetArgs = ['Aziz', 24];
console.log(args1);


console.log("------------------------------(ConstructorParameters<typeof T>)------------------------------");
class Books {
  constructor(public id: number, public title: string) {}
}

type BooksArgs = ConstructorParameters<typeof Books>; // [number, string]

const args2: BooksArgs = [1, "Aziz"];
const bk = new Books(...args2);
console.log(bk);

console.log("------------------------------(InstanceType<typeof T>)------------------------------");
type BookInstance = InstanceType<typeof Books>; // same as: User

const book: BookInstance = new Books(1, "TS language");
console.log(book);
