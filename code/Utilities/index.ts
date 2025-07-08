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











//
console.log("------------------------------(<T>)------------------------------");

//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");
//
console.log("------------------------------(<T>)------------------------------");