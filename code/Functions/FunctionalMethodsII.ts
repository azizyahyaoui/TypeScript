// Functional Array Methods Part II

/**
 *  More Functional and Typed Data Tools in TypeScript
 * `sort()`, `flatMap()`, `Set`, and `Map`
 *  - sort(array, compareFn) => array.sort(compareFn)
 *  - flatMap(array, fn) => array.flatMap(fn)
 *  - Set(array) => new Set(array)
 *  - Map(array) => new Map(array)
 */

// Sort function
console.log("------------- Sort Function -------------");
// The sort function sorts the elements of an array in place and returns the sorted array.

const numbersArray: number[] = [5, 3, 8, 1, 2];
const sortedNumbers: number[] = numbersArray.sort((a, b) => a - b);
console.log(`Sorted Numbers: ${sortedNumbers.join(", ")}`);

// FlatMap function
console.log("------------- FlatMap Function -------------");
// The flatMap function first maps each element using a mapping function, then flattens the result into a new array.

const nestedArray: number[][] = [[1, 2], [3, 4], [5]];
const flatMappedArray: number[] = nestedArray.flatMap(arr => arr);
console.log(`FlatMapped Array: ${flatMappedArray.join(", ")}`);

// Set function
console.log("------------- Set Function -------------");
// The Set object lets you store unique values of any type, whether primitive values or object references.

const uniqueNumbers: Set<number> = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(`Unique Numbers: ${Array.from(uniqueNumbers).join(", ")}`);

// Map function
console.log("------------- Map Function -------------");
// The Map object holds key-value pairs and remembers the original insertion order of the keys.

const userMap: Map<number, string> = new Map([
  [1, "AzizYahyaoui"],
  [2, "JohnDoe"],
  [3, "JaneDoe"],
  [4, "JackSmith"],
  [5, "AliceJohnson"]
]);

console.log("User Map:");
userMap.forEach((username, id) => {
  console.log(`ID: ${id}, Username: ${username}`);
});

// Chaining Array Methods with Sort and FlatMap

console.log("------------- Chaining Array Methods -------------");

const usersArray = [
  { id: 1, name: "AzizYahyaoui", age: 25 },
  { id: 2, name: "JohnDoe", age: 30 },
  { id: 3, name: "JaneDoe", age: 22 },
  { id: 4, name: "JackSmith", age: 28 },
  { id: 5, name: "JackSmith", age: 28 },
  { id: 6, name: "AliceJohnson", age: 35 }
];

const sortedUsernames = usersArray
  .sort((a, b) => a.age - b.age)
  .flatMap(user => user.name);

console.log(`Sorted Usernames by Age: ${sortedUsernames.join(", ")}`);

// Using Set and Map with Functional Methods
const userSet: Set<string> = new Set(usersArray.map(user => user.name));
console.log(`Unique Usernames: ${Array.from(userSet).join(", ")}`);
const userIdMap: Map<number, string> = new Map(usersArray.map(user => [user.id, user.name]));

console.log("User ID Map:");
userIdMap.forEach((username, id) => {
  console.log(`ID: ${id}, Username: ${username}`);
});

