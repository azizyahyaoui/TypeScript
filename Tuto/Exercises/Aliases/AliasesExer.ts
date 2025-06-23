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

