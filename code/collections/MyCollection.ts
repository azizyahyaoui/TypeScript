// Collections 

/**
 *  Record, WeakMap, WeakSet in TypeScript
 * * `Record<K, T>` - A utility type for creating an object type with specific keys and values.
 * * `WeakMap<K, V>` - A collection of key-value pairs where keys are objects and values can be any type, with garbage collection for keys.
 * * `WeakSet<T>` - A collection of objects where each object is unique, with garbage collection for the objects.
 * 
 */

// Record
console.log("------------- Record Type -------------");
// The Record type is a utility type that allows you to create an object type with specific keys and values.

type UserRecord = Record<number, string>;

const userRecord: UserRecord = {
  1: "AzizYahyaoui",
  2: "JohnDoe",
  3: "JaneDoe",
  4: "JackSmith",
  5: "AliceJohnson"
};

console.log("User Record:");
Object.entries(userRecord).forEach(([id, username]) => {
  console.log(`ID: ${id}, Username: ${username}`);
});

// WeakMap
console.log("------------- WeakMap Type -------------");
/**
 * WeakMap is a collection of key-value pairs where keys are objects and values can be any type.
 * The keys in a WeakMap are weakly referenced, meaning that if there are no other  references to the key object, it can be garbage collected.
 * This is useful for storing metadata or additional information about objects without preventing them from being garbage collected 
 */

// Example of WeakMap

const object1 = { id: 1, objName: "Object 1" };
const object2 = { id: 2, objName: "Object 2" };
const object3 = { id: 3, objName: "Object 3" };
const object4 = { id: 4, objName: "Object 4" };

const secretData = new WeakMap<object, string>();

secretData.set(object1, "Top Secret Data for Object 1");
secretData.set(object2, "Classified Information for Object 2");
secretData.set(object3, "Confidential Data for Object 3");
secretData.set(object4, "Sensitive Information for Object 4");

console.log("WeakMap Secret Data:");
console.log(secretData.get(object1));
console.log(secretData.get(object2));
console.log(secretData.get(object3));
console.log(secretData.get(object4));

// WeakSet
console.log("------------- WeakSet Type -------------");
/**
 * WeakSet is a collection of objects where each object is unique.
 * The objects in a WeakSet are weakly referenced, meaning that if there are no other references to the object, it can be garbage collected.
 * This is useful for storing a set of objects without preventing them from being garbage collected.
 */

// Example of WeakSet(userSession)

const loggedUsers = new WeakSet<object>();

const user1 = { id: 1, username: "AzizYahyaoui" };
const user2 = { id: 2, username: "JohnDoe" };
const user3 = { id: 3, username: "JaneDoe" };
const user4 = { id: 4, username: "JackSmith" };
const user5 = { id: 5, username: "AliceJohnson" };

loggedUsers.add(user1);
loggedUsers.add(user2);
loggedUsers.add(user3);
loggedUsers.add(user4);


console.log("WeakSet Logged Users:");
console.log(loggedUsers.has(user1));
console.log(loggedUsers.has(user2));
console.log(loggedUsers.has(user3));
console.log(loggedUsers.has(user4));
console.log(loggedUsers.has(user5));

/** Note: WeakMap and WeakSet do not have methods to iterate over their elements,
 * so you cannot log all elements like you can with a regular Map or Set.
 * - `Record` ==> Role-based users, config maps, type-safe dictionaries.
 *  - `WeakMap` ==> Store metadata or private values tied to DOM objects
 * - `WeakSet` ==> Marking visited nodes or cyclic references in memory
 */