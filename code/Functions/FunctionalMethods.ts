// Functional Array Methods

/**
 * Applies a function to each element of an array and returns a new array with the results.
 *  - Map(array, fn) => array.map(fn)
 *  - Filter(array, fn) => array.filter(fn)
 *  - Reduce(array, fn, initialValue) => array.reduce(fn, initialValue)
 *  - ForEach(array, fn) => array.forEach(fn)
 *  - Find(array, fn) => array.find(fn)
 *  - Some(array, fn) => array.some(fn)
 *  - Every(array, fn) => array.every(fn)
 * 
 */


// Map function
console.log("------------- Map Function -------------");
// The map function creates a new array populated with the results of calling a provided function on every element in the calling array.

const usersLIst = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jack", age: 35 }
];

const userNames: string[] = usersLIst.map(user => user.name);
console.log(userNames);

// Filter function
console.log("------------- Filter Function -------------");
// The filter function creates a new array with all elements that pass the test implemented by the provided function.

const adults = usersLIst.filter(user => user.age >= 30);
console.log(adults);

// Reduce function
console.log("------------- Reduce Function -------------");
// The reduce function executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

const totalAge = usersLIst.reduce((accumulator, user) => accumulator + user.age, 0);
console.log(totalAge);

// ForEach function
console.log("------------- ForEach Function -------------");
// The forEach function executes a provided function once for each array element.
usersLIst.forEach(user => {
    console.log(`${user.name} is ${user.age} years old.`);
});

// Find function
console.log("------------- Find Function -------------");
// The find function returns the value of the first element in the array that satisfies the provided testing function. Otherwise, undefined is returned.
const userOver30 = usersLIst.find(user => user.age > 30);
console.log(userOver30);

// Some function
console.log("------------- Some Function -------------");
// The some function tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.

const hasAdult = usersLIst.some(user => user.age >= 30);
console.log(hasAdult);

// Every function
console.log("------------- Every Function -------------");
// The every function tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const allAdults = usersLIst.every(user => user.age >= 18);

console.log(allAdults);


// Chaining Array Methods
console.log("------------- Chaining Array Methods -------------");

const userNamesOver30 = usersLIst
    .filter(user => user.age > 30)
    .map(user => user.name);
console.log(userNamesOver30);


// Using Array Methods
console.log("------------- Using Array Methods -------------");

type User = {
  id: number;
  username: string;
  email: string;
  age: number;
  isActive: boolean;
};

const users: User[] = [
  { id: 1, username: "AzizYahyaoui", email: "aziz@email.xyz", age: 27, isActive: true },
  { id: 2, username: "JohnDoe", email: "Jo@email.com", age: 30, isActive: false }
  , { id: 3, username: "JaneDoe", email: "Jane@mail.xvc", age: 25, isActive: true }
  , { id: 4, username: "JackSmith", email: "jack@mail.xvc", age: 35, isActive: false }
  , { id: 5, username: "AliceJohnson", email: "ALice@mail.xvc", age: 28, isActive: true }
];


const getActiveUsers:string[] = users
  .filter(user => user.isActive)
  .map(user => user.username);

console.log(`Active Users: ${getActiveUsers.join(", ")}`);

const totalActiveUsers: number = users.reduce((count, user) => {
  return user.isActive ? count + 1 : count;
}, 0);

console.log(`Total Active Users: ${totalActiveUsers}`);

const userEmails: string[] = users.map(user => user.email);
console.log(`User Emails: ${userEmails.join(", ")}`);
