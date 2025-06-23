import { EmployeeType } from "./EmployeeType"

export type ManagerType ={
    id: number;
    ManagerName: string;
    employees: EmployeeType[];
}