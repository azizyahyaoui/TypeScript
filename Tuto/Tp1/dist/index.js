"use strict";
let id = 52155544;
let fullName = "yahyaoui med aziz";
let isValidated = true;
let nums = [1, 2, 3, 4, 5];
let x = 'anything';
let arr = [1, true, 'someString',];
let person = [1, "anything", true];
let employee;
employee = [
    [124, "aziz", false],
    [4152, "bilel", true],
    [5202, 'dhiya', true]
];
let phoneNumber;
phoneNumber = '+2162292992929';
var directions;
(function (directions) {
    directions[directions["UP"] = 1] = "UP";
    directions[directions["DOWN"] = 2] = "DOWN";
    directions[directions["LEFT"] = 3] = "LEFT";
    directions[directions["RIGHT"] = 4] = "RIGHT";
})(directions || (directions = {}));
var directionsName;
(function (directionsName) {
    directionsName["UP"] = "up";
    directionsName["DOWN"] = "down";
    directionsName["LEFT"] = "left";
    directionsName["RIGHT"] = "right";
})(directionsName || (directionsName = {}));
const user = {
    id: 123,
    name: "chiheb"
};
console.log('----------------------------------------------------------------');
console.log('ID:', id);
console.log('fullName:', fullName);
console.log('----------------------------------------------------------------');
console.log('person:', person);
console.log('----------------------------------------------------------------');
console.log('employees:', employee);
console.log('----------------------------------------------------------------');
console.log('phoneNumber:', phoneNumber);
console.log('----------------------------------------------------------------');
console.log('direction 1:', directions.DOWN);
console.log('directionsName 1:', directionsName.DOWN);
console.log('----------------------------------------------------------------');
console.log('user:', user);
