import { employee } from "../utils/data.js";

export const negativeEmployeeCases = [
  {
    name: "missing first name",
    firstName: "",
    lastName: employee.AddEmp.lastName,
    employeeId: Math.floor(Date.now() / 1000),
    employeePhoto: employee.AddEmp.employeePhoto,
    expectFieldError: true,
    expectGlobalError: false,
  },
  {
    name: "missing last name",
    firstName: employee.AddEmp.firstName,
    lastName: "",
    employeeId: Math.floor(Date.now() / 1000),
    employeePhoto: employee.AddEmp.employeePhoto,
    expectFieldError: true,
    expectGlobalError: false,
  },
  {
    name: "duplicate employee id",
    firstName: employee.AddEmp.firstName,
    lastName: employee.AddEmp.lastName,
    employeeId: 12345,
    employeePhoto: employee.AddEmp.employeePhoto,
    expectFieldError: false,
    expectGlobalError: true,
  },
];
