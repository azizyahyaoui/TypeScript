import { EmployeeType } from "./EmployeeType";
import { ManagerType } from "./ManagerType";
import { UserType as User } from "./UserType";

const Aziz: User = {
  id: 1,
  name: "Aziz",
  email: "aziz@mail.xyz",
  age: 25,
  isActive: true,
  createdAt: new Date(),
  role: "admin",
};

const Bilel: User = {
  id: 2,
  name: "Bilel",
  email: "bilel@mail.xyz",
  age: null,
  isActive: false,
  createdAt: new Date(),
  role: "user",
};

const Chedli: User = {
  id: 3,
  name: "Chedli",
  email: "chedli@mail.xcv",
  age: 26,
  isActive: true,
  createdAt: new Date(),
  role: "guest",
};
const Ghofran: User = {
  id: 4,
  name: "Ghofran",
  email: "Gh@mail.com",
  age: 30,
  isActive: true,
  createdAt: new Date(),
  role: "admin",
};

const createUser = (user: User): User => {
  console.log(`User created: ${user.name}`);
  return user;
}

createUser(Aziz);
createUser(Bilel);
createUser(Chedli);
createUser(Ghofran);

// Exercise II
console.log("---------------------- Type Guards with Union Types ----------------------");

type StringOrNumber = string | number;

let value: StringOrNumber;
value = "hello there";
value = 123;

const isString = (value: StringOrNumber): value is string => {
  return typeof value === "string";
}
const isNumber = (value: StringOrNumber): value is number => {
  return typeof value === "number";
}
if (isString(value)) {
  console.log(`The value is a string: ${value}`);
}
else if (isNumber(value)) {
  console.log(`The value is a number: ${value}`);
} else {
  console.log("The value is neither a string nor a number.");
}

// Exercise III
console.log("---------------------- Type Guards with Literal Types ----------------------");

type Theme = "light" | "dark" | "system";

let theme: Theme;

theme = "light";
theme = "dark";

const isLightTheme = (theme: Theme): theme is "light" => {
  return theme === "light";
}
const isDarkTheme = (theme: Theme): theme is "dark" => {
  return theme === "dark";
}
const isSystemTheme = (theme: Theme): theme is "system" => {
  return theme === "system";
}
if (isLightTheme(theme)) {
  console.log("The theme is light.");
}
else if (isDarkTheme(theme)) {
  console.log("The theme is dark.");
} else if (isSystemTheme(theme)) {
  console.log("The theme is system.");
} else {
  console.log("Unknown theme.");
}



// Exercise IV
console.log("---------------------- Exercise IV ----------------------");

type Staff = EmployeeType | ManagerType;

const printStaffDetails = (staff:Staff):void =>{
  if ('employees' in staff) {
    console.log(`${staff.ManagerName} is a manager and he has ${staff.employees.length} employees.`)
  }
  else{
    console.log(`${staff.empName} is an employee works in the ${staff.department} department.`)
  }
}


const emp1: EmployeeType = {
  id: 1,
  empName:"aziz",
  department: "Sys Operation"
};

const emp2: EmployeeType = {
  id: 2,
  empName: "Bilel",
  department:"Medical"
};

const emp3: EmployeeType = {
  id: 3,
  empName: "Chedli",
  department: "Development"
};

const manager1: ManagerType = {
  id: 4,
  ManagerName: "Tarek",
  employees: [emp1,emp2,emp3]
};

printStaffDetails(emp1);
printStaffDetails(emp2);
printStaffDetails(emp3);
printStaffDetails(manager1);