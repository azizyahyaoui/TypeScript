export type UserType = {
  id: number,
  name: string, 
  email: string,
  age?: number | null,
  isActive: boolean,
  createdAt: Date,
  role: "user" | "admin" | "guest",
};